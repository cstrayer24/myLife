import { useState } from "react";
import GroupJoinModal from "./GroupJoinModal";

export default function GroupJoin({
  GroupName,
  img,
}: {
  GroupName: string;
  img: string;
}) {
  const [joinModalIsUp, setJoinModalIsUp] = useState(false);
  return (
    <>
      {joinModalIsUp && (
        <GroupJoinModal
          groupName={GroupName}
          img={img}
          closeLogic={(ev) => {
            setJoinModalIsUp(false);
          }}
        />
      )}
      <div
        style={{ backgroundImage: `url(${img})` }}
        className=" w-36 h-36 relative cursor-pointer"
        onClick={(ev) => {
          setJoinModalIsUp(true);
        }}
      >
        <span className=" text-ml-onyx bg-white z-20 absolute bottom-0 right-0">
          {GroupName}
        </span>
      </div>
    </>
  );
}
