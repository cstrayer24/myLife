import cartInfo_t from "@/types/cartInfo_t";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const REQ = await fetch(`${process.env.APIURL}/get-cart-items`, {
    headers: {
      "x-sessionid": req.cookies.get("sessionid")?.value as string,
    },
  });

  if (REQ.ok) {
    const RES = (await REQ.json()) as cartInfo_t;

    return NextResponse.json(RES, { status: 200 });
  } else {
    return NextResponse.json({ err: "fail" }, { status: 500 });
  }
}
