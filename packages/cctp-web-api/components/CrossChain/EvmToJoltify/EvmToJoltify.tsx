import { Button } from "@nextui-org/react"

export default function EvmToJolyify() {
  return (
<div className="grid grid-cols-3">
  <Button color="success">1. Send to Noble</Button>
  <div className="flex items-center justify-center text-gray-500">2. Received on Noble</div>
  <Button disabled>3. IBC to Joltify</Button>
</div>
  )
}