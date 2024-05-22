import { NextResponse } from "next/server";
import { params } from "./config";

export async function GET() {
  return NextResponse.json(params, { status: 200 });
}