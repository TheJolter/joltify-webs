export const maxDuration = 60

// https://developers.circle.com/stablecoins/docs/noble-cosmos-module#receivemessage

import { NextRequest, NextResponse } from "next/server";
import { AttestationType } from "@/types";
import { circle, getSigningCircleClient } from 'codegen-circle'
import { ethers } from "ethers";
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing"
import { DeliverTxResponse } from "@cosmjs/stargate";
import { chains } from "@/config/chains";

export async function POST(req:NextRequest) {
  const { messages } = await req.json() as AttestationType
  const priveteKey = process.env.MINTER_PRIVATE_KEY!
  const wallet = await DirectSecp256k1Wallet.fromKey(
    ethers.toBeArray(priveteKey.startsWith('0x') ? priveteKey : '0x'+priveteKey),
    'noble'
  )
  const from = (await wallet.getAccounts())[0].address
  console.log('from', from)
  const rpcEndpoint = chains.find(item=>item.chainID==='noble-1')?.rpc!
  const { receiveMessage } = circle.cctp.v1.MessageComposer.withTypeUrl
  const client = await getSigningCircleClient({
    rpcEndpoint,
    signer: wallet as any,
  })
  const msg = receiveMessage({
    from,
    message: new Uint8Array(Buffer.from(messages[0].message.replace('0x', ''), "hex")),
    attestation: new Uint8Array(Buffer.from(messages[0].attestation.replace('0x', ''), "hex")),
  })

  console.log('messages', messages)
  console.log('msg', msg)

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
  body: JSON.stringify({"messages":[{"attestation":"0x0320d00d570b8311bd1239499ea4f8d26ae50ff453579a83946e3abc59a0a2dc5c93339f6b653ea0380a2e8b0b83cfea88cb665bf98d341a941b843ad0a9fc361cea33564fb567b83129b5c8c9a5118c7a791cc0b41bc726fb783f513cfbde0a126d828f698157237bea4971972475c2ee87ae60ccffc852dc2fe2d508ec97c2a61c","message":"0x000000000000000100000004000000000001c6280000000000000000000000006b25532e1060ce10cc3b0a99e5683b91bfde698200000000000000000000000057d4eaf1091577a6b7d121202afbd2808134f117000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e000000000000000000000000b7aa17ec6ddaba5af3d6007034b29f33a6da3afa000000000000000000000000000000000000000000000000000000000001adb0000000000000000000000000353755fa4c3d8e73ca5190d86894866e9bd6abb8","eventNonce":"116264"}]})
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