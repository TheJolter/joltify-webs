import { NextRequest, NextResponse } from "next/server";
import { bn, sleep } from 'utils';

export async function GET(request:NextRequest) {
  // Do whatever you want
  // await sleep(3000)
  const amount = bn('1000000000000000000000000000')
  return NextResponse.json({ message: "Hello World from GET", amount: amount.toFormat() }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request:NextRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World from POST" }, { status: 200 });
}