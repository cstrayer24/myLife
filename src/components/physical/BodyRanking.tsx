import { physicalBaseData } from "@/types/userBaseData";
import MLContainer from "../general/MLContainer";
import LabelAndValue from "./LabelAndValue";

export default function BodyRanking({
  bodyData,
}: {
  bodyData: physicalBaseData;
}) {
  return (
    <MLContainer className=" h-96 w-80 grid grid-rows-2 text-ml-onyx">
      <div>
        <span>
          <h1 className=" text-ml-onyx text-4xl font-bold">Your body</h1>
        </span>
      </div>

      <div>
        <LabelAndValue label="weight" value="ABOVE AVERAGE" />
      </div>
    </MLContainer>
  );
}
