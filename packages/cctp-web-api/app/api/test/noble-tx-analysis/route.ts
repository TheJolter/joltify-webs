import { NextResponse } from "next/server";
import { tx } from "./tx";
import { verifyTx } from "../../mint-on-evm/verify-tx";

export async function GET() {

  const verifyResult = verifyTx(tx)

  
  
  return NextResponse.json(verifyResult);
}