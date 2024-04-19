import MainLayout from "@/components/Layout/mainLayout";
import baseData from "@/types/userBaseData";
import DietPlanner from "./DietPlanner";

export default function DietComponent({ data }: { data: baseData }) {
  return (
    <MainLayout data={data}>
      <div className="w-full h-full">
        <div className=" w-full  h-20 bg-ml-pink"></div>
        <div className="w-full h-full grid place-items-center">
          <DietPlanner />
        </div>
      </div>
    </MainLayout>
  );
}
