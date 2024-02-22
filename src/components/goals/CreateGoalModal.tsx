import { MouseEventHandler } from "react";
import Xmark from "../iconComponents/Xmark";
import styles from "@/transitions/navHoverTransitions.module.css";
import ModalContents from "./ModalContents";
export default function CreateGoalModal({
  closeLogic,
}: {
  closeLogic: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className=" w-screen h-screen absolute top-0 left-0 bg-ml-emerald/55 z-50 grid place-items-center">
      <div
        className={` absolute top-0 right-0 rounded-full hover:bg-white/55 m-10 cursor-pointer ${styles.navHover}`}
        onClick={closeLogic}
      >
        <Xmark className=" w-10 text-white h-10 m-6" />
      </div>

      <ModalContents />
    </div>
  );
}
