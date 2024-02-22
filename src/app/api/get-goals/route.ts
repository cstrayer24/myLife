import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const REQ = await fetch(`${process.env.APIURL}/get-goals`, {
    method: "GET",
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });

  if (REQ.ok) {
    const res = await REQ.json();
    return NextResponse.json(res, { status: 200 });
  } else {
    return NextResponse.json({ err: "fail" }, { status: 500 });
  }
}
