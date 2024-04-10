import MainLayout from "@/components/Layout/mainLayout";
import UserSettingsComp from "@/components/UserSettings";
import GoalsComponent from "@/components/goals";
import HomeComponent from "@/components/home/HomeComponent";
import baseData from "@/types/userBaseData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import "@/pageStyles/goalsTable.css";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import sendToLogin from "@/lib/sendToLogin";
import getBaseUserData from "@/lib/libApi/getBaseUserData";

export const runtime = "experimental-edge";

export default async function Page() {
  const req = await getBaseUserData();
  if (req.ok) {
    const res: baseData = await req.json();

    return <GoalsComponent data={res} />;
  } else {
    if (req.status === UNAUTHORIZED) {
      sendToLogin();
    }
  }

  return <div></div>;
}
