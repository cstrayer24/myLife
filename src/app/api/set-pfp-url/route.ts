import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const bod = await req.json();
  const REQ = await fetch(`${process.env.APIURL}/set-pfp-url`, {
    method: "POST",
    body: JSON.stringify(bod),
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });

  if (REQ.ok) {
    const res = await REQ.json();
    return NextResponse.json(JSON.stringify(res), { status: 200 });
  } else {
    console.log(REQ.statusText);
    return NextResponse.json(JSON.stringify({ err: "fail" }));
  }
}
