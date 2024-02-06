import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import UnderConstruction from "../underConstruction";

function GetProComponent({ data }: { data: baseData }) {
  return (
    <MainLayout data={data}>
      <UnderConstruction />
    </MainLayout>
  );
}

export default GetProComponent;
