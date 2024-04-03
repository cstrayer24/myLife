import MainLayout from "@/components/Layout/mainLayout";
import HomeComponent from "@/components/home/HomeComponent";
import GetProComponent from "@/components/pro";
import ShopComponent from "@/components/shop";
import SuccessPage from "@/components/shop/SuccessPage";
import baseData from "@/types/userBaseData";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "experimental-edge";

export default async function Page() {
  // try {
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

    return <SuccessPage data={res} />;
  } else {
    redirect(`${process.env.LANDINGURL}/login`);
    throw new Error("invalid req");
  }
  // } catch (error) {
  // }

  return <div></div>;
}
