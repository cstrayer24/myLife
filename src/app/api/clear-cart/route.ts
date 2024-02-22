import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const REQ = await fetch(`${process.env.APIURL}/clear-cart`, {
    method: "GET",
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });

  if (REQ.ok) {
    return NextResponse.json({ stat: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ err: "fail" }, { status: REQ.status });
  }
}
