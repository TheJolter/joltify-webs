import { Button } from "@nextui-org/react"

export default function NobleToEvm() {
  return (
<div className="grid grid-cols-2">
  <Button color="success">1. Burn on Noble</Button>
  <div className="flex items-center justify-center">2. Mint on Evm</div>
</div>
  )
}