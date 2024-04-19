import { MouseEventHandler } from "react";
import MLContainer from "../general/MLContainer";
import MLModal from "../general/MLModal";
import Image from "next/image";
import MLPillButton from "../general/MLPillButton";
export default function GroupJoinModal({
  groupName,
  img,
  closeLogic,
}: {
  groupName: string;
  img: string;
  closeLogic: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <MLModal closeLogic={closeLogic}>
      <MLContainer className=" bg-white h-[30rem] w-96 grid grid-rows-3 gap-10">
        <div className=" w-full text-center">
          <h1 className=" font-bold text-3xl">{groupName}</h1>
        </div>
        <div className=" w-full flex justify-center">
          <Image
            alt={`${groupName} image`}
            src={img}
            width={100}
            height={100}
          />
        </div>
        <div className=" w-full flex justify-center">
          <MLPillButton text="Join" />
        </div>
      </MLContainer>
    </MLModal>
  );
}
