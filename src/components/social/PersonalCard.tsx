import { MouseEventHandler } from "react";
import MLModal from "../general/MLModal";
import MLBoxButton from "../general/MLBoxButton";
import MLContainer from "../general/MLContainer";

export default function PersonalCard({
  closeLogic,
  username,
}: {
  closeLogic?: MouseEventHandler<HTMLDivElement>;
  username: string;
}) {
  //if have time upgrade the text label to images and icons
  return (
    <MLModal closeLogic={closeLogic}>
      <MLContainer className=" bg-white rounded-md h-96 w-96  p-5 ">
        <div className=" w-full border-b border-b-black text-center mb-5">
          <h1>{username}</h1>
        </div>
        <div className=" grid grid-flow-row grid-rows-4 h-[70%]">
          <span>
            <label htmlFor="" className=" mr-3">
              phone:
            </label>
            <input type="text" name="" id="" placeholder="4402256083" />
          </span>
          <span>
            {" "}
            <label htmlFor="" className=" mr-3">
              instagram:
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="my instagram handle"
            />
          </span>
          <span>
            {" "}
            <label htmlFor="" className=" mr-3">
              facebook:
            </label>
            <input type="text" name="" id="" placeholder="my facebook handle" />
          </span>
          <span>
            <label htmlFor="" className=" mr-3">
              X/Twitter:
            </label>
            <input type="text" name="" id="" placeholder="my x handle" />
          </span>
        </div>
        <div className=" w-full flex justify-center">
          <MLBoxButton text="Edit Card" />
        </div>
      </MLContainer>
    </MLModal>
  );
}
