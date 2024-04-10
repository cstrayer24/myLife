import MainLayout from "@/components/Layout/mainLayout";
import UserSettingsComp from "@/components/UserSettings";
import HomeComponent from "@/components/home/HomeComponent";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import getBaseUserData from "@/lib/libApi/getBaseUserData";
import sendToLogin from "@/lib/sendToLogin";
import baseData from "@/types/userBaseData";

export const runtime = "experimental-edge";

export default async function Page() {
  const req = await getBaseUserData();
  if (req.ok) {
    const res: baseData = await req.json();

    return <UserSettingsComp data={res} />;
  } else {
    if (req.status === UNAUTHORIZED) {
      sendToLogin();
    }
  }

  return <div></div>;
}
