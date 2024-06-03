import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Spinner, Link } from "@nextui-org/react";
import { observer } from "mobx-react-lite";
import evmToNoble from "@/utils/evm-to-noble/evmToNoble";
import getUsdcBalance from "@/utils/get-usdc-balance";
import { useStore } from "@/stores/hooks";
import { chains } from "@/config/chains";
import watchCosmosUsdcChange from "@/utils/watchCosmosTokenChange";
import { MsgTransferEncodeObject, SigningStargateClient } from "@cosmjs/stargate"
import { Decimal } from "@cosmjs/math"
import { Keplr } from "@keplr-wallet/types"
import { nobleFee } from "@/config";
import { bn } from "utils";
import cosmosAddrConvertor from "@/utils/cosmosAddrConvertor";

export default observer(function EvmToJolyify() {
  const inputStore = useStore('inputStore')
  const modalStore = useStore('modalStore')
  const balanceStore = useStore('balanceStore')
  const [nobleReceived, setNobleReceived] = useState(false)
  const [sendingToNoble, setSendingToNoble] = useState(false)
  const [sendingToJoltify, setSendingToJoltify] = useState(false)
  const targetChain = chains.find(c => c.chainID === inputStore.targetChainID)
  const sourceChain = chains.find(c => c.chainID === inputStore.sourceChainID)
  const nobleChain = chains.find(c => c.chainID==='noble-1')
  const [balanceNoble, setBalanceNoble] = useState('0') // base amount
  const evmWalletStore = useStore('evmWalletStore')

  useEffect(()=>{
    if ( targetChain?.chainType!=='cosmos' || !inputStore.targetAddress?.startsWith('noble')) return
    getUsdcBalance({chainID: 'noble-1', address: cosmosAddrConvertor(inputStore.targetAddress, 'noble')}).then(balance => {
      setBalanceNoble(bn(balance).times(10**6).toFixed(0))
    })
  }, [inputStore.targetAddress, targetChain?.chainType])

  const handleSendToNoble = () => {
    if (!evmWalletStore.address || Number(inputStore.amount)<=0 || !inputStore.targetAddress) return
    setSendingToNoble(true)
    evmToNoble({
      sourceChainID: inputStore.sourceChainID,
      amount: inputStore.amount,
      targetAddress: inputStore.targetAddress
    }).then(() => {
      // watch NOBLE balance change
      watchCosmosUsdcChange({chainID: 'noble-1', address: cosmosAddrConvertor(inputStore.targetAddress, 'noble'), timeoutSecond: 99999})
      .then(({newBalance}) => {
        setBalanceNoble(newBalance)
        setNobleReceived(true)
      }).catch((e) => {
        modalStore.showModal({
          title: 'It may take a while to received on noble, please check later',
          body: e.message ?? e.toString()
        })
      }).finally(()=>{
        setSendingToNoble(false)
      })
    }).catch((e) => {
      setSendingToNoble(false)
      modalStore.showModal({
        title: '❌ Failed to send to Noble',
        body: e.message ?? e.toString()
      })
    })
  }

  const handleNobleToJoltify = async () => {
    const keplr:Keplr = (window as any).keplr
    if (!keplr || !nobleChain) return
    const signer = keplr.getOfflineSignerOnlyAmino(nobleChain.chainID)
    setSendingToJoltify(true);
    const sender = (await signer.getAccounts())[0].address
    const client = await SigningStargateClient.connectWithSigner(nobleChain.rpc, signer, {gasPrice: {amount: Decimal.fromUserInput('4000', 0), denom: 'uusdc'}})
    const gasFee = bn(nobleFee).times(1e6).toFixed(0)
    let amount = bn(inputStore.amount).times(1e6).toFixed(0)
    if (bn(amount).plus(gasFee).gt(balanceNoble)) {
      amount = bn(balanceNoble).minus(gasFee).toFixed(0)
    }
    const msg:MsgTransferEncodeObject = {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: {
        sourcePort: "transfer",
        sourceChannel: 'channel-81',
        token: {denom: nobleChain.usdcAddress, amount},
        sender, 
        receiver: inputStore.targetAddress,
        timeoutTimestamp: BigInt((new Date().getTime()+10*60*1000)*1000000),
        memo: '', // can not be undefined
      }
    }
    console.log({msg, sender})
    client.signAndBroadcast(sender, [msg], 'auto').then((res) => {
      console.log(res)
      if (res.code===0) {
        watchCosmosUsdcChange({chainID: inputStore.targetChainID, address: inputStore.targetAddress, timeoutSecond: 600}).then(() => {
          resetStatus()
          modalStore.showModal({
            title: '✅ Success',
            body: (
              <div>
                <p>Send to Joltify successfully</p>
                <p><Link href={`${targetChain?.explorer}/accounts/${inputStore.targetAddress}`} target="_blank">Click here</Link> to view on explorer</p>
              </div>
            )
          })
        }).catch((e) => {
          modalStore.showModal({
            title: 'It may take a while to received on joltify, please check later',
            body: e.message ?? e.toString()
          })
        }).finally(()=>{
          setSendingToJoltify(false)
          getUsdcBalance({chainID: sourceChain?.chainID ?? '', address: evmWalletStore.address!}).then(balance => {
            balanceStore.addUsdcBalance({chainID: sourceChain?.chainID ?? '', balance, address: evmWalletStore.address!})
          })
        })
        return
      }
      setSendingToJoltify(false)
      modalStore.showModal({
        title: '❌ Failed to send from Noble to Joltify',
        body: (
          <div>
            <p>{res.rawLog ?? res.toString()}</p>
            <p><Link href={`${nobleChain?.explorer}/transactions/${res.transactionHash}`} target="_blank">Click here</Link> to view on explorer</p>
          </div>
        )
      })
    }).catch((e) => {
      console.error('send to joltify error', e)
      setSendingToJoltify(false)
      modalStore.showModal({
        title: '❌ Failed to send from Noble to Joltify',
        body: e.message ?? e.toString()
      })
    })
  }

  const resetStatus = () => {
    setNobleReceived(false)
    setSendingToNoble(false)
    setSendingToJoltify(false)
  }

  return (
<div>
  <div className="grid grid-cols-3">
    <Button
      disabled={sendingToNoble||nobleReceived}
      color={nobleReceived?'default':'success'}
      onClick={handleSendToNoble}
    >
      1. Send to Noble
      {sendingToNoble&&<Spinner size="sm" color="default"/>}
    </Button>
    <div className={`flex items-center justify-center ${!nobleReceived&&'text-gray-500'}`}>
      2. Received on Noble
    </div>
    <Button 
      disabled={!nobleReceived||sendingToJoltify}
      color={nobleReceived?'success':'default'}
      onClick={handleNobleToJoltify}
    >
      3. IBC to Joltify
      {sendingToJoltify&&<Spinner size="sm" color="default"/>}
    </Button>
  </div>
  <p className=" text-orange-600 text-xl">Plaese stay in this page while in processing</p>
</div>
  )
})