export const maxDuration = 25

import { NextRequest, NextResponse } from "next/server";
import { txExample } from "../test/noble-tx-analysis/tx";
import { verifyTx } from "./verify-tx";
import { submitEvmMint } from "@/utils/submit-evm-mint/submit-evm-mint";

type ReqBody = {
  messages: {
    attestation: string,
    message: string,
    eventNonce: string
  }[],
  transactionHash: string
}

export async function POST(req:NextRequest) {
  const {messages, transactionHash} = await req.json() as ReqBody
  if (!transactionHash) return NextResponse.rewrite('transactionHash not found', { status: 403 });

  // get target evm chain doaccording to transactionHash
  let tx: (typeof txExample)
  try {
    tx = (await (await fetch(`https://lcd.mainnet.noble.strange.love/cosmos/tx/v1beta1/txs/${transactionHash}`)).json()) as (typeof txExample)
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
  if (!tx) return NextResponse.rewrite('noble tx not found', { status: 403 });

  // verify tx
  const verify = verifyTx(tx)
  if (verify.code!==0) return NextResponse.json({ verify }, { status: 400 });
  console.log('verifyTx result', verify)
  const domain = verify.destination_domain // 0 is success
  if (domain===undefined) return NextResponse.rewrite('destination_domain not found', { status: 403 });

  try {
    const res = await submitEvmMint({domain, message: messages[0]})
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.rewrite('Only POST is avaliable', { status: 403 });
}