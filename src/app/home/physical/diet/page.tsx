import DietComponent from "@/components/physical/diet";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import getBaseUserData from "@/lib/libApi/getBaseUserData";
import sendToLogin from "@/lib/sendToLogin";

export default async function Page() {
  const req = await getBaseUserData();
  if (req.ok) {
    const res = await req.json();
    return <DietComponent data={res} />;
  } else {
    if (req.status === UNAUTHORIZED) {
      sendToLogin();
    }
  }
}
