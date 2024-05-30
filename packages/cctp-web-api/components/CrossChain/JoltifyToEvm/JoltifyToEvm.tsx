import { Button } from "@nextui-org/react"

export default function JoltifyToEvm() {
  return (
<div className="grid grid-cols-3">
  <Button color="success">1. IBC to Noble</Button>
  <div className="flex items-center justify-center">2. Received on Noble</div>
  <div className="flex items-center justify-center">3. Mint on EVM</div>
</div>
  )
}