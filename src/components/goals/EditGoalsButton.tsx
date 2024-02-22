import { MouseEventHandler } from "react";
import PencilSquare from "../iconComponents/PencilSquare";

export default function EditGoalsButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div onClick={onClick} className=" cursor-pointer">
      <PencilSquare className=" text-white w-6 h-6 mr-5" />
    </div>
  );
}
