import MainLayout from "@/components/Layout/mainLayout";
import baseData from "@/types/userBaseData";
import WorkoutPlanner from "./WorkoutPlanner";

export default function WorkoutComponent({ data }: { data: baseData }) {
  return (
    <MainLayout data={data}>
      <div className="w-full h-full">
        <div className=" w-full  h-20 bg-ml-emerald"></div>
        <div className="w-full h-full grid place-items-center">
          <WorkoutPlanner />
        </div>
      </div>
    </MainLayout>
  );
}
