import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const REQ = await fetch(`${process.env.APIURL}/get-signed-url`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (REQ.ok) {
    return new Response(await REQ.text());
  } else {
    return new Response("", { status: 400 });
  }
}
