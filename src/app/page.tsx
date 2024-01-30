export const runtime = "experimental-edge";
import { redirect } from "next/navigation";

import { cookies, headers } from "next/headers";
import Image from "next/image";

export default function Home({
  params,
  searchParams,
}: {
  params: unknown;
  searchParams: { sessionid?: string };
}) {
  const hasCookie = cookies().has("sessionid");
  // the !! forces it into a boolean
  const hassessionParam = !!searchParams.sessionid;
  console.log(hassessionParam);
  if (!hasCookie && hassessionParam) {
    redirect(`${process.env.APPURL}/`);
  } else if (hasCookie && !hassessionParam) {
    redirect(`${process.env.APPURL}/home`);
  } else if (!hasCookie && !hassessionParam) {
    redirect(`${process.env.LANDINGURL}/login`);
  }
  redirect(`${process.env.APPURL}/home`);
  return <div className="bg-black">h</div>;
}
