import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import BodyRanking from "./BodyRanking";
import MLContainer from "../general/MLContainer";
import WorkoutButton from "./WorkoutButton";
import DietButton from "./DietButton";

export default function PhysicalComponent({ data }: { data: baseData }) {
  //provide some sort of synopsis on the users current state of the users body
  return (
    <MainLayout data={data}>
      <div className="w-full h-full overflow-y-scroll grid grid-rows-2">
        <div className=" mb-2">
          <WorkoutButton />
        </div>
        <div>
          <DietButton />
        </div>
      </div>
    </MainLayout>
  );
}
