import { NextRequest, NextResponse } from "next/server";
import type MiddlewareResponseInit from "next";
export async function middleware(req: NextRequest) {
  const hasSessionSearchParam = req.nextUrl.searchParams.has("sessionid");
  const sessionSearch = req.nextUrl.searchParams.get("sessionid");
  const hasSessionCookie = req.cookies.has("sessionid");

  if (hasSessionSearchParam && !hasSessionCookie) {
    // Set the cookie
    const res = NextResponse.next();
    res.cookies.set({
      path: "/",
      name: "sessionid",
      value: sessionSearch as string,
    });

    return res;
  } else if (hasSessionCookie && !hasSessionSearchParam) {
    console.log("test2");
    return NextResponse.next();
  }
}
export const config = {
  matcher: "/",
};
