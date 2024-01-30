export const config = {
  matcher: "/",
};

export const runtime = "experimental-edge";
import { NextRequest, NextResponse } from "next/server";
import type MiddlewareResponseInit from "next";
export async function middleware(req: NextRequest) {
  const hasSessionSearchParam = req.nextUrl.searchParams.has("sessionid");
  const sessionSearch = req.nextUrl.searchParams.get("sessionid");
  const hasSessionCookie = req.cookies.has("sessionid");
  console.log("hi from middleware");
  //get rid of this at some point
  if (req.nextUrl.pathname !== "/") {
    const res = NextResponse.next();
    res.headers.set("user-agent", req.headers.get("user-agent") as string);
    return res;
  }
  if (hasSessionSearchParam && !hasSessionCookie) {
    // Set the cookie
    const res = NextResponse.next();
    res.headers.set("user-agent", req.headers.get("user-agent") as string);
    res.cookies.set({
      path: "/",
      name: "sessionid",
      value: sessionSearch as string,
      httpOnly: true,
      expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
    });
    return res;
  } else if (hasSessionCookie && !hasSessionSearchParam) {
    console.log("test2");
    const res = NextResponse.next();
    res.headers.set("user-agent", req.headers.get("user-agent") as string);
    return res;
  }
}
