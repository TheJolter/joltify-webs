import { chains } from "@/config/chains"
import { useStore } from "@/stores/hooks"
import { Button, Link, Spinner } from "@nextui-org/react"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { circle, cosmos, getSigningCircleClient, getSigningCosmosClient } from 'codegen-circle'
import { Keplr } from "@keplr-wallet/types"
import cosmosAddrConvertor from "@/utils/cosmosAddrConvertor"
import { bigNumberCeil, bn } from "utils"
import { nobleFee } from "@/config"
import { params } from "@/app/api/params/config"
import { SigningStargateClient } from "@cosmjs/stargate"

export default observer(function NobleToEvm({
  disabled
}:{
  disabled?: boolean
}) {
  const inputStore = useStore('inputStore')
  const cosmosWalletStore = useStore('cosmosWalletStore')
  const modalStore = useStore('modalStore')
  const balanceStore = useStore('balanceStore')

  const targetChain = chains.find(chain => chain.chainID === inputStore.targetChainID)
  const sourceChain = chains.find(chain => chain.chainID === inputStore.sourceChainID)
  const param = params.targetChains.find((item) => item.domain === targetChain?.domain)

  const [sending, setSending] = useState(false)

  const handleSend = async () => {
    const keplr:Keplr = (window as any).keplr
    if (!keplr || !cosmosWalletStore.address || !inputStore.targetAddress) return
    const { depositForBurn } = circle.cctp.v1.MessageComposer.withTypeUrl
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl
    const from = cosmosAddrConvertor(cosmosWalletStore.address!, 'noble')

    const cleanedMintRecipient = inputStore.targetAddress.replace(/^0x/, '');
    const zeroesNeeded = 64 - cleanedMintRecipient.length;
    const mintRecipient = '0'.repeat(zeroesNeeded) + cleanedMintRecipient;
    const buffer = Buffer.from(mintRecipient, "hex");
    const mintRecipientBytes = new Uint8Array(buffer)

    const gasFee = bn(nobleFee).times(1e6).toFixed(0)
    const routeFee = param?.fee || Infinity
    let amount = bn(inputStore.amount).times(10**6).toFixed(0)
    const balanceNoble = balanceStore.getUsdcBalance('noble-1', from)
    console.log('balanceNoble', balanceNoble)
    if (bn(amount).plus(gasFee).plus(routeFee).gt( bn(balanceNoble).times(10**6) )) {
      amount = bn(bn(balanceNoble).times(10**6)).minus(gasFee).minus(routeFee).toFixed(0)
    }

    const msg = depositForBurn({
      from,
      amount,
      destinationDomain: targetChain?.domain!, 
      mintRecipient: mintRecipientBytes,
      burnToken: 'uusdc',
    })

    const msgFee = send({
      fromAddress: from,
      toAddress: params.minter!,
      amount: [{denom: 'uusdc', amount: param?.fee!}]
    })

    let client: SigningStargateClient
    setSending(true)
    try {
      const signer = await keplr.getOfflineSignerAuto('noble-1')
      client = await getSigningCircleClient({rpcEndpoint: sourceChain?.rpc!, signer}) as unknown as SigningStargateClient

      // const signer = keplr.getOfflineSignerOnlyAmino('noble-1')
      // client = await getSigningCosmosClient({rpcEndpoint: sourceChain?.rpc!, signer}) as unknown as SigningStargateClient
    } catch(error:any) {
      setSending(false)
      modalStore.showModal({title: 'Error', body: error?.message??error.toString()})
      return
    }
    let fee = {amount: [{amount: '0', denom: 'uusdc'}], gas: '200000'}
    console.log({from, msgFee, msg})
    try {
      fee = {amount: [{amount: '0', denom: 'uusdc'}], gas:((await client.simulate(from, [msgFee, msg],''))*Number(2)).toString()}
      console.log('fee', fee)
    } catch(error:any) {
      console.error('simulate error', error)
      setSending(false)
      modalStore.showModal({title: 'Error', body: error?.message??error.toString()})
      return
    }

    client.signAndBroadcast(from, [
      msgFee,
      msg
    ], fee).then((res)=>{
      if (res.code !==0) {
        setSending(false)
        modalStore.showModal({title: 'Error', 
          body: (
            <div>
              <p>{res.rawLog}</p>
              <p><Link href={`${sourceChain?.explorer}/transactions/${res.transactionHash}`} target="_blank">Click here</Link> to view details on explorer</p>
            </div>
          )
        })
        return
      }

      let counter = 0
      getAttestationAndMintOnServer() // must after let counter = 0
      function getAttestationAndMintOnServer() {
        counter ++
        if (counter > 9999) {
          setSending(false)
          modalStore.showModal({
            title: `Timeout to mint USDC on ${targetChain?.chainName}`, 
            body: `Copy and save this url: ${sourceChain?.explorer}/transactions/${res.transactionHash} and contact us for help`
          })
          return
        }
        fetch(`https://iris-api.circle.com/v1/messages/4/${res.transactionHash}`)
        .then(res=>res.json()).then(({messages})=>{
          if (!messages || messages[0]?.attestation==='PENDING') {
            setTimeout(()=>{
              getAttestationAndMintOnServer()
            }, 6000)
            return
          }
          fetch(`/api/mint-on-evm`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages,
              transactionHash: res.transactionHash,
            })
          }).then(res=>res.json()).then((res)=>{
            if (res.status!==1) {
              modalStore.showModal({
                title: res.error ?? res.message ?? res.toString(), 
                body: `Copy and save this url: ${sourceChain?.explorer}/transactions/${res.transactionHash} and contact us for help`
              })
              return
            }
            modalStore.showModal({title: `✅ USDC Minted on ${targetChain?.chainName}`, 
              body: (
                <div>
                  <p><Link href={`${targetChain?.explorer}/tx/${res.hash}`} target="_blank">Click here</Link> to view details on explorer</p>
                </div>
              )
            })
          }).catch(error=>{
            modalStore.showModal({
              title: error?.message??error.toString(), 
              body: `Copy and save this url: ${sourceChain?.explorer}/transactions/${res.transactionHash} and contact us for help`
            })
          }).finally(()=>{
            setSending(false)
          })
        })
      }

    }).catch((error)=>{
      setSending(false)
      modalStore.showModal({title: 'Error', body: error?.message??error.toString()})
    })
  }

  return (
<div>
  <Button color="success" onClick={handleSend}
    disabled={sending || disabled}
  >
    Send to {targetChain?.chainName}
    {sending&&<Spinner size="sm" color="default"/>}
  </Button>
  <p className="text-sm text-gray-500 mt-1">
    Gas fee: less than {nobleFee} USDC; Router fee: { bigNumberCeil(bn(param?.fee||0).div(10**6), 6).toFixed() } USDC
  </p>
  {sending&&<p className="mt-5">Please stay in this page while in processing</p>}
</div>
  )
})