import MainLayout from "@/components/Layout/mainLayout";
import HomeComponent from "@/components/home/HomeComponent";
import baseData from "@/types/userBaseData";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "experimental-edge";

export default async function Page() {
  try {
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
      throw new Error("invalid req");
    }
  } catch (error) {
    // redirect(`${process.env.LANDINGURL}/login`);
  }

  return <div></div>;
}
