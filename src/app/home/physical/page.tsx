import PhysicalComponent from "@/components/physical";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import getBaseUserData from "@/lib/libApi/getBaseUserData";
import sendToLogin from "@/lib/sendToLogin";
import baseData from "@/types/userBaseData";

export default async function Page() {
  const req = await getBaseUserData();
  if (req.ok) {
    const res: baseData = await req.json();
    return <PhysicalComponent data={res} />;
  } else {
    if (req.status === UNAUTHORIZED) {
      sendToLogin();
    }
  }
}
