import Xmark from "../iconComponents/Xmark";
import { MouseEventHandler } from "react";
export default function ModalLayer({
  children,
  closeLogic,
}: {
  children?: React.ReactNode | React.ReactNode[];
  closeLogic?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <>
      {/* <div className="w-full absolute flex justify-end z-50">
        <span className=" text-white font-bold text-5xl">X</span>
      </div> */}
      <div className=" w-screen h-screen bg-ml-onyx/55 absolute top-0 left-0 z-50 grid place-items-center ">
        <div
          className=" absolute top-0 right-0 rounded-full hover:bg-white/55 m-10 cursor-pointer"
          onClick={closeLogic}
        >
          <Xmark className="w-10 text-white h-10 m-6" />
        </div>
        {children}
      </div>
    </>
  );
}
