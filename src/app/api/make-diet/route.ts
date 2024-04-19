import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {
  const bod = await req.json();
  const REQ = await fetch(`${process.env.APIURL}/make-diet`, {
    method: "POST",
    body: JSON.stringify(bod),
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });

  if (REQ.ok) {
    return NextResponse.json({ stat: "Success" }, { status: 200 });
  } else {
    return NextResponse.json({ err: "fail" }, { status: REQ.status });
  }
}
