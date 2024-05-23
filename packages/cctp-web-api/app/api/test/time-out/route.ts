export const maxDuration = 25

import { NextRequest, NextResponse } from "next/server";
import { sleep } from 'utils';

export async function GET(req:NextRequest) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const time = params.get('time')
  if (!time) {
    return NextResponse.json({
      message: `usage: /api/test/time-out?time=10 means sleep 10 seconds`
    }, { status: 200 });
  }
  await sleep(parseInt(time)*1000)
  return NextResponse.json({ message: `Hello World from GET, sleep ${time} seconds` }, { status: 200 });
}