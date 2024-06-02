import { Button } from "@nextui-org/react"
import { useState } from "react"
import { Spinner, Link } from "@nextui-org/react";

export default function EvmToJolyify() {
  const [nobleReceived, setNobleReceived] = useState(false)
  const [sendingToNoble, setSendingToNoble] = useState(false)
  const [sendingToJoltify, setSendingToJoltify] = useState(false)

  return (
<div className="grid grid-cols-3">
  <Button
    disabled={sendingToNoble||nobleReceived}
    color={nobleReceived?'default':'success'}
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
  >
    3. IBC to Joltify
    {sendingToJoltify&&<Spinner size="sm" color="default"/>}
  </Button>
</div>
  )
}