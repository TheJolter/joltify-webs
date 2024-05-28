import { bech32 } from "bech32";
import { ethers } from "ethers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const mintRecipient = 'jolt1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh67q5555' // jolt or noble address
  const numberArray = bech32.fromWords(bech32.decode(mintRecipient).words)
  const mintRecipientBytes = new Uint8Array(32)
  mintRecipientBytes.set(numberArray, 32 - numberArray.length)
  const _mintRecipient = ethers.hexlify(mintRecipientBytes)
  const convertedAddr = convertAddress(mintRecipient, 'noble')
  return NextResponse.json({ mintRecipient, _mintRecipient, convertedAddr }, { status: 200 });
}

function convertAddress(oldAddress: string, newHrp: string): string {
  const { words } = bech32.decode(oldAddress);
  return bech32.encode(newHrp, words);
}

/*
0x000000000000000000000000b7aa17ec6ddaba5af3d6007034b29f33a6da3afa -> noble1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh6uruqln
0x000000000000000000000000b7aa17ec6ddaba5af3d6007034b29f33a6da3afa -> jolt1k74p0mrdm2a94u7kqpcrfv5lxwnd5wh67q5555
*/