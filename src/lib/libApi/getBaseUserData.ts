import { cookies } from "next/headers";

export default async function getBaseUserData() {
  const cookieObj = cookies();
  const req = await fetch(`${process.env.APIURL}/getBaseUserData`, {
    cache: "no-store",
    headers: {
      "x-sessionid": cookieObj.get("sessionid")?.value as string,
    },
    mode: "cors",
  });
  return req;
}
