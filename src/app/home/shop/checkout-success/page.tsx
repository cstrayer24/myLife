import MainLayout from "@/components/Layout/mainLayout";
import HomeComponent from "@/components/home/HomeComponent";
import GetProComponent from "@/components/pro";
import ShopComponent from "@/components/shop";
import SuccessPage from "@/components/shop/SuccessPage";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import getBaseUserData from "@/lib/libApi/getBaseUserData";
import sendToLogin from "@/lib/sendToLogin";
import baseData from "@/types/userBaseData";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "experimental-edge";

export default async function Page() {
  const req = await getBaseUserData();
  if (req.ok) {
    const res: baseData = await req.json();

    return <SuccessPage data={res} />;
  } else {
    throw new Error("invalid req");
    // redirect(`${process.env.LANDINGURL}/login`);
  }
  return <div></div>;
}
