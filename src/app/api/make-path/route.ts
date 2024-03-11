import next from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const BOD = await req.json();

  const REQ = await fetch(`${process.env.APIURL}/make-path`, {
    method: "POST",
    body: JSON.stringify(BOD),
    headers: {
      "x-sessionid": req.cookies?.get("sessionid")?.value as string,
    },
  });

  if (REQ.ok) {
    const RES = await REQ.json();
    return NextResponse.json(RES, { status: 200 });
  } else {
    return NextResponse.json({ err: "failed" }, { status: REQ.status });
  }
}
