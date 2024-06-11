import cosmosAddrConvertor from "@/utils/cosmosAddrConvertor";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const sourceAddr = 'noble1294dsmadnj8rkzw7jqeay7446c0mn00tnszk96'
  const targetPrefix = 'jolt'
  const targetAddr = cosmosAddrConvertor(sourceAddr, targetPrefix)
  return NextResponse.json({ sourceAddr, targetAddr }, { status: 200 });
}