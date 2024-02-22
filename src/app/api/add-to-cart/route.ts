import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const bod = await req.json();

  const REQ = await fetch(`${process.env.APIURL}/add-to-cart`, {
    body: JSON.stringify(bod),
    method: "PUT",
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });
  if (REQ.ok) {
    return NextResponse.json({ stat: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ err: "failed" }, { status: 500 });
  }
}
