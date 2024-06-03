export const maxDuration = 60

// https://developers.circle.com/stablecoins/docs/noble-cosmos-module#receivemessage

import { NextRequest, NextResponse } from "next/server";
import { AttestationType } from "@/types";
import { circle, getSigningCircleClient } from 'codegen-circle'
import { ethers } from "ethers";
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing"
import { DeliverTxResponse } from "@cosmjs/stargate";

export async function POST(req:NextRequest) {
  const { messages } = await req.json() as AttestationType
  const priveteKey = process.env.MINTER_PRIVATE_KEY!
  const wallet = await DirectSecp256k1Wallet.fromKey(
    ethers.toBeArray(priveteKey.startsWith('0x') ? priveteKey : '0x'+priveteKey),
    'noble'
  )
  const from = (await wallet.getAccounts())[0].address
  console.log('from', from)
  const rpcEndpoint = 'https://rpc.noble.strange.love'
  const { receiveMessage } = circle.cctp.v1.MessageComposer.withTypeUrl
  const client = await getSigningCircleClient({
    rpcEndpoint,
    signer: wallet as any,
  })
  const msg = receiveMessage({
    from,
    message: ethers.toBeArray(messages[0].message),
    attestation: ethers.toBeArray(messages[0].attestation)
  })

  let gasNumber = 100000
  try {
    gasNumber = await client.simulate(from,[msg],'')
    console.log('gasNumber', gasNumber)
  } catch(error) {}

  try {
    const txRes = await client.signAndBroadcast(
      from, [msg],
      {amount: [{amount: '0', denom: 'uusdc'}], gas:(gasNumber*2).toString()}
    )
    return NextResponse.json(txRes, { status: 200 });
  } catch(error) {
    console.error(error)
    return NextResponse.json(error, { status: 500 });
  } 
}

export async function GET() {
  return NextResponse.json('Only POST is avaliable', { status: 403 });
}

/* test on browser console
fetch('/api/mint-on-noble', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({"messages":[{"attestation":"0xd14fae292aaa1b9952a9f74fae688bc58f7ce06d9f8fbbfc4a307c9fcd0495ec2df8646d758dcccb3a5d2702048b2818649af84413bc831e85d98ef19f5cd0471cfa771dd4d61c5fd84c0b682a7460594cd0ece5ee8d6ac254ff1b524516486c9f376db4989976b6e353c56437cd5d4f849fded479bd28419516aa47292abf2f241c","message":"0x000000000000000100000004000000000001c58d0000000000000000000000006b25532e1060ce10cc3b0a99e5683b91bfde698200000000000000000000000057d4eaf1091577a6b7d121202afbd2808134f117000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e0000000000000000000000003896394f3214c778a4875a89c3315f9101dcdb54000000000000000000000000000000000000000000000000000000000016e360000000000000000000000000353755fa4c3d8e73ca5190d86894866e9bd6abb8","eventNonce":"116109"}]})
}).then(res => res.json()).then(console.log).catch(console.error)

https://iris-api.circle.com/v1/messages/1/0x50ad2c26059beb8b05694e45440196f057f14140cad17666b63cb44981c727e5

{
    "code": 36,
    "height": 6494254,
    "events": [
        {
            "type": "tx",
            "attributes": [
                {
                    "key": "fee",
                    "value": "0uusdc"
                },
                {
                    "key": "fee_payer",
                    "value": "noble1ehkr9sju0dypwj2xs69kza3l9kugp0yq93dakc"
                }
            ]
        },
        {
            "type": "tx",
            "attributes": [
                {
                    "key": "acc_seq",
                    "value": "noble1ehkr9sju0dypwj2xs69kza3l9kugp0yq93dakc/5"
                }
            ]
        },
        {
            "type": "tx",
            "attributes": [
                {
                    "key": "signature",
                    "value": "h2KamJaYLSjLDL2AyfB1Re8dZ8M2Fnd6jdcayqto7CVXFENZ75cjVEi2XL/tgsd2Bl0uu3zH55Mf607E4VqbuA=="
                }
            ]
        }
    ],
    "rawLog": "failed to execute message; message index: 0: unable to verify signatures: Invalid signature: not an attester: unable to verify signature: err in receive message",
    "transactionHash": "9699B5BA7A519BB8362027C98321218716E38A4AB806833656EF1F00B877FB3E",
    "gasUsed": 61956,
    "gasWanted": 200000
}
*/