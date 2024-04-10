import HomeComponent from "@/components/home/HomeComponent";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import sendToLogin from "@/lib/sendToLogin";
import baseData from "@/types/userBaseData";
import { cookies } from "next/headers";

export const runtime = "experimental-edge";

export default async function Page() {
  const cookieObj = cookies();
  const req = await fetch(`${process.env.APIURL}/getBaseUserData`, {
    cache: "no-store",
    headers: {
      "x-sessionid": cookieObj.get("sessionid")?.value as string,
    },
    mode: "cors",
  });
  if (req.ok) {
    const res: baseData = await req.json();

    return <HomeComponent data={res} />;
  } else {
    if (req.status == UNAUTHORIZED) {
      sendToLogin();
    }
  }

  return <div></div>;
}
