'use client'

import { Button } from "@nextui-org/button"

const PageMinOnEVM = () => {
  const handler = async () => {
    const res = await fetch('/api/mint-on-evm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "messages": [
          {
            "attestation": "0xa9bdd101a6432168e072b08f2ff8922a222c28f9c4c1ea4196b8f5b5d96348eb728b5ff19bbfa7a7c379c62cce5a0a7a3ccde8b98fdf995732af6157d8a6ea231bf2071f28b56fbd31894183afd4d18f77233d00602e93e9dc3ddebf6dd038329134c501c292366cd9e22562785f1aec4e08d4de443ca49a7f79406d5427d144931b",
            "message": "0x000000000000000400000001000000000000608800000000000000000000000057d4eaf1091577a6b7d121202afbd2808134f1170000000000000000000000006b25532e1060ce10cc3b0a99e5683b91bfde6982000000000000000000000000000000000000000000000000000000000000000000000000487039debedbf32d260137b0a6f66b90962bec777250910d253781de326a716d000000000000000000000000353755fa4c3d8e73ca5190d86894866e9bd6abb800000000000000000000000000000000000000000000000000000000000186a0000000000000000000000000b7aa17ec6ddaba5af3d6007034b29f33a6da3afa",
            "eventNonce": "24712"
          }
        ],
        transactionHash: '7635B16C71D33F37A4861DF71ECA1738234103317FB2960ACE8E23510C8A8249'
      })
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      <Button onClick={handler}>Click here</Button>
    </div>
  )
}

export default PageMinOnEVM