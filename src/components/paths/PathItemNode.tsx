import {
  useContext,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
} from "react";
import { PmCtx } from "./PathMakeCtx";

export default function PathItemNode() {
  const itemsCtx = useContext(PmCtx) as {
    pathState: any;
    setPathState: Dispatch<SetStateAction<{}>>;
  };
  const [imgName, setImgName] = useState("Thumbnail?");
  const [left, setLeft] = useState<ReactElement<any, any>>();
  const [right, setRight] = useState<ReactElement<any, any>>();
  const fpRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="h-72 w-52 flex flex-col border border-ml-onyx mt-1">
        <div
          className="w-full h-[60%] grid place-items-center cursor-pointer"
          onClick={(ev) => {
            fpRef.current?.click();
          }}
        >
          <label htmlFor="">{imgName}</label>
          <input type="file" className="hidden" ref={fpRef} />
        </div>
        <input
          type="text"
          className="w-full h-[10%] px-1 outline"
          placeholder="name"
        />
        <div className="w-full h-[30%] flex items-center justify-between">
          <button
            className="ml-1"
            onClick={(ev) => {
              setLeft(<PathItemNode />);
            }}
          >
            left
          </button>
          <button
            className="mr-1"
            onClick={(ev) => {
              setRight(<PathItemNode />);
            }}
          >
            right
          </button>
        </div>
        <div className="flex justify-between">
          {left}
          {right}
        </div>
      </div>
    </>
  );
}
