"use client";
import { useState } from "react";
import PencilLessSquare from "../iconComponents/PencilLessSquare";
import NewPathModal from "./NewPathModal";

export default function PathsHeader() {
  const [modalShown, setModalShown] = useState(false);

  return (
    <>
      {modalShown && (
        <NewPathModal
          closeLogic={(ev) => {
            setModalShown(false);
          }}
        />
      )}
      <div className=" w-full h-24 bg-ml-onyx text-ml-forest text-center flex justify-center">
        <div className=" grid w-full h-full items-center">
          <div className=" flex w-full justify-end">
            <div
              className="cursor-pointer"
              onClick={(ev) => {
                setModalShown(true);
              }}
            >
              <PencilLessSquare className="w-6 h-6 mr-4 mt-1 stroke-white" />
            </div>
          </div>
          <h1 className=" text-5xl ">Paths</h1>
        </div>
      </div>
    </>
  );
}
