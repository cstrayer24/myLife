import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const bod = await req.json();
  const REQ = await fetch(`${process.env.APIURL}/remove-cart-item`, {
    method: "PATCH",
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
    body: JSON.stringify(bod),
  });

  if (REQ.ok) {
    return NextResponse.json({ stat: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ err: "fail" }, { status: REQ.status });
  }
}
