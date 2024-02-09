import MainLayout from "@/components/Layout/mainLayout";
import UserSettingsComp from "@/components/UserSettings";
import GoalsComponent from "@/components/goals";
import HomeComponent from "@/components/home/HomeComponent";
import baseData from "@/types/userBaseData";
import { cookies } from "next/headers";
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

      return <GoalsComponent data={res} />;
    } else {
      throw new Error("invalid req");
    }
  } catch (error) {
    redirect(`${process.env.LANDINGURL}/login`);
  }

  return <div></div>;
}
