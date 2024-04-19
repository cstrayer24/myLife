import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const bod = await req.json();
  const REQ = await fetch(`${process.env.APIURL}/get-group-by-keyword`, {
    method: "POST",
    body: JSON.stringify(bod),
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });
  if (REQ.ok) {
    const BOD = await REQ.json();

    return NextResponse.json(BOD, { status: REQ.status });
  } else {
    return NextResponse.json({ stat: "fail" }, { status: REQ.status });
  }
}
