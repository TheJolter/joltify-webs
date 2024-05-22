import { NextResponse } from "next/server";
import { txExample } from "./tx";
import { verifyTx } from "../../mint-on-evm/verify-tx";

export async function GET() {

  const verifyResult = verifyTx(txExample)

  
  
  return NextResponse.json(verifyResult);
}