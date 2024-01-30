import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("hi");

  console.log(req.headers.get("user-agent"));

  console.log(cookies().getAll());
  return NextResponse.json({ hi: "test" });
}
