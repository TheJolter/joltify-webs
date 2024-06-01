import { useStore } from "@/stores/hooks"
import evmToNoble from "@/utils/evm-to-noble/evmToNoble"
import { Button } from "@nextui-org/react"
import { observer } from "mobx-react-lite"

export default observer(function EvmToNoble() {
  const inputStore = useStore('inputStore')

  const handleEvmToNoble = () => {
    evmToNoble({
      sourceChainID: inputStore.sourceChainID,
      amount: inputStore.amount,
      targetAddress: inputStore.targetAddress
    })
  }

  return (
    <Button color="success"
      onClick={handleEvmToNoble}
    >Send to Noble</Button>
  )
})