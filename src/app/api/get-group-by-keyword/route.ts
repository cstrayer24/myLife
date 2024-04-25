import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("in proxy");
    const bod = await req.json();
    console.log(bod);
    console.log(process.env.APIURL);
    const REQ = await fetch(`${process.env.APIURL}/get-group-by-keyword`, {
      method: "POST",
      body: JSON.stringify(bod),
      headers: {
        "x-sessionid": req.cookies.get("sessionid")?.value as string,
      },
    });
    console.log(REQ);
    if (REQ.ok) {
      const BOD = await REQ.json();
      console.log("req was ok ");
      return NextResponse.json(BOD, { status: REQ.status });
    } else {
      return NextResponse.json({ stat: "fail" }, { status: REQ.status });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ stat: "fail" }, { status: 500 });
  }
}
