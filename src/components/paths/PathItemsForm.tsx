import { useState } from "react";
import PathItemNode from "./PathItemNode";

export default function PathItemsForm() {
  const [pathItems, setPathItems] = useState([]);
  return (
    <div className=" w-full h-full overflow-y-scroll flex flex-col">
      <div className=" w-full h-[80%] overflow-y-scroll flex justify-center ">
        <PathItemNode />
      </div>
      <div className=" w-full h-[20%] flex justify-center items-center">
        <button className=" bg-ml-Celadon text-white px-10 rounded-full py-5">
          Finalize
        </button>
      </div>
    </div>
  );
}
