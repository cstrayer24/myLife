import { MouseEventHandler, useState } from "react";

import ModalLayer from "../general/ModalLayer";
import Xmark from "../iconComponents/Xmark";
import styles from "@/transitions/navHoverTransitions.module.css";
import PathInfoForm from "./PathInfoForm";
import pfState from "@/types/pathFormState";
import PathMakeCtx from "./PathMakeCtx";
import PathMakeForm from "./PathMakeForm";

export default function NewPathModal({
  closeLogic,
}: {
  closeLogic: MouseEventHandler<HTMLDivElement>;
}) {
  //create ui then wire together backend

  return (
    <ModalLayer>
      <div
        className={` absolute top-0 right-0 rounded-full hover:bg-white/55 m-10 cursor-pointer ${styles.navHover}`}
        onClick={closeLogic}
      >
        <Xmark className=" w-10 text-white h-10 m-6" />
      </div>

      <div className=" bg-white rounded-md h-full w-[80%]">
        <PathMakeCtx>
          <PathMakeForm />
        </PathMakeCtx>
      </div>
    </ModalLayer>
  );
}
