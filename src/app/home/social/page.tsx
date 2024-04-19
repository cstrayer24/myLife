import SocialComponent from "@/components/social";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import getBaseUserData from "@/lib/libApi/getBaseUserData";
import sendToLogin from "@/lib/sendToLogin";
import baseData from "@/types/userBaseData";

export default async function Page() {
  const req = await getBaseUserData();

  if (req.ok) {
    const data: baseData = await req.json();
    return <SocialComponent data={data} />;
  } else {
    if (req.status === UNAUTHORIZED) {
      sendToLogin();
    }
  }
}
