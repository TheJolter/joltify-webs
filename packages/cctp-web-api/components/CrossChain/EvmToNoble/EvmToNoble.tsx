import { useStore } from "@/stores/hooks"
import evmToNoble from "@/utils/evm-to-noble/evmToNoble"
import { Button } from "@nextui-org/react"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Spinner, Link } from "@nextui-org/react";
import watchCosmosUsdcChange from "@/utils/watchCosmosTokenChange"
import { chains } from "@/config/chains"
import getUsdcBalance from "@/utils/get-usdc-balance"

export default observer(function EvmToNoble() {
  const inputStore = useStore('inputStore')
  const modalStore = useStore('modalStore')
  const evmWalletStore = useStore('evmWalletStore')
  const balanceStore = useStore('balanceStore')
  const [sending, setSending] = useState(false)
  const targetChain = chains.find(c => c.chainID === inputStore.targetChainID)
  const sourceChain = chains.find(c => c.chainID === inputStore.sourceChainID)

  const handleEvmToNoble = () => {
    setSending(true)
    evmToNoble({
      sourceChainID: inputStore.sourceChainID,
      amount: inputStore.amount,
      targetAddress: inputStore.targetAddress
    }).then(() => {
      getUsdcBalance({chainID: sourceChain?.chainID ?? '', address: evmWalletStore.address!}).then(balance => {
        balanceStore.addUsdcBalance({chainID: sourceChain?.chainID ?? '', balance, address: evmWalletStore.address!})
      })
      watchCosmosUsdcChange({chainID: inputStore.targetChainID, address: inputStore.targetAddress, timeoutSecond: 99999}).then(() => {
        modalStore.showModal({
          title: '✅ Success',
          body: (
            <div>
              <p>Send to Noble successfully</p>
              <p><Link href={`${targetChain?.explorer}/accounts/${inputStore.targetAddress}`} target="_blank">Click here</Link> to view on explorer</p>
            </div>
          )
        })
      }).catch((e) => {
        modalStore.showModal({
          title: 'It may take a while to received on noble, please check later',
          body: e.message ?? e.toString()
        })
      }).finally(()=>{
        setSending(false)
      })
    }).catch((e) => {
      setSending(false)
      modalStore.showModal({
        title: '❌ Failed to send to Noble',
        body: e.message ?? e.toString()
      })
    })
  }

  return (
    <Button color="success"
      onClick={handleEvmToNoble}
      disabled={sending}
    >
      Send to Noble
      {sending&&<Spinner size="sm" color="default"/>}
    </Button>
  )
})