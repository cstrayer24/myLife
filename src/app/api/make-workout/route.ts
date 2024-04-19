import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {
  const bod = await req.json();
  const REQ = await fetch(`${process.env.APIURL}/make-workout`, {
    method: "POST",
    body: JSON.stringify(bod),
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });
  if (REQ.ok) {
    return NextResponse.json({ stat: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ stat: "fail" }, { status: REQ.status });
  }
}
