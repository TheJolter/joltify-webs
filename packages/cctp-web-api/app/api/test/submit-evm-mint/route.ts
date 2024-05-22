import { submitEvmMint } from "@/utils/submit-evm-mint/submit-evm-mint";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: 'hello' }, { status: 200 });
  
  const res = await submitEvmMint({
    domain: 1,
    message: {
      "attestation": "0x1c1765515bb33c26d7ea5734a5c1db4337686730e41e31d6cf189aa883dce1fb47ce698297c11dcb52e81ffbcbd128122f2d1dfce608a5cbb2871ba04aaa9e081bffef652f01b2b163483981f2ecb534bff4e022128b69406faa7f7cb9a21bc5f30bc254cfc3db819daf9a4acac9f3470dbbb1f99c37c073690c29a4f3ad1cf7421b",
      "message": "0x000000000000000400000001000000000000627000000000000000000000000057d4eaf1091577a6b7d121202afbd2808134f1170000000000000000000000006b25532e1060ce10cc3b0a99e5683b91bfde6982000000000000000000000000000000000000000000000000000000000000000000000000487039debedbf32d260137b0a6f66b90962bec777250910d253781de326a716d000000000000000000000000353755fa4c3d8e73ca5190d86894866e9bd6abb800000000000000000000000000000000000000000000000000000000000186a0000000000000000000000000b7aa17ec6ddaba5af3d6007034b29f33a6da3afa",
      "eventNonce": "25200"
    }
  })

  console.log('res submitEvmMint', res)

  return NextResponse.json({ res }, { status: 200 });
}