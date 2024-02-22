import { useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

import { BaseSettingsCtx } from ".";
export default function TextChanger({
  feild,
  val,
  thingToChange,
  isEmail,
}: {
  feild: string;
  val: string;
  thingToChange: string;
  isEmail?: boolean;
}) {
  const [valState, setValState] = useState(val);
  const [borderState, setBorderState] = useState("border");
  const st = useContext(BaseSettingsCtx) as {
    settingText: any;
    setSettingsText: Dispatch<SetStateAction<{}>>;
  };
  console.log(st);
  return (
    <div className="w-full flex justify-center mb-5">
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const req = await fetch("/api/set-user-setting", {
              method: "POST",
              body: JSON.stringify({
                thingToChange: thingToChange,
                newValue: valState,
              }),
            });
          }}
        >
          <h2 className=" text-ml-onyx mb-3">{feild}:</h2>
          <input
            type={`${isEmail ? "email" : "text"}`}
            name=""
            id=""
            className={` text-ml-onyx ${borderState} outline-none  w-80 ml-4 pb-[0.1rem] border-b-ml-onyx mr-4 bg-transparent rounded-t-md px-3 py-2`}
            value={valState}
            onChange={(e) => {
              e.preventDefault();
              setValState(e.target.value);
              st.setSettingsText((prev) => {
                const newObj = { ...prev } as any;
                newObj[thingToChange] = valState;
                return newObj;
              });
              console.log(st.settingText);
            }}
            onFocus={(e) => {
              setBorderState("border-2");
            }}
            onBlur={(e) => {
              setBorderState("border");
            }}
          />
          {/* <button className=" bg-ml-Celadon rounded-full p-3">change</button> */}
        </form>
      </div>
    </div>
  );
}
