import sendToLogin from "@/lib/sendToLogin";
import baseData from "@/types/userBaseData";
import { UNAUTHORIZED } from "@/lib/httpStatusCodes";
import getBaseUserData from "@/lib/libApi/getBaseUserData";
import WorkoutComponent from "@/components/physical/workout";
export default async function Page() {
  const req = await getBaseUserData();
  if (req.ok) {
    const res: baseData = await req.json();
    return <WorkoutComponent data={res} />;
  } else {
    if (req.status === UNAUTHORIZED) {
      sendToLogin();
    }
  }
}
