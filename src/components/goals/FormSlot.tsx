import { FC } from "react";

export default function FormSlot({
  displayText,
  formType,
  formName,
  formPlaceHolder,
  OtherComp,
}: {
  displayText: string;
  formType?: string;
  formName: string;
  formPlaceHolder?: string;
  OtherComp?: FC;
}) {
  return (
    <div className=" flex justify-between w-full h-14 px-10 border-y border-ml ">
      <div className=" flex items-center">
        <label htmlFor="">{displayText}</label>
      </div>
      <div className=" flex items-center">
        {!formType && OtherComp ? (
          <OtherComp />
        ) : (
          <input
            type={formType}
            name={formName}
            className=" border border-ml-onyx rounded-md px-5"
            id=""
            placeholder={formPlaceHolder}
          />
        )}
      </div>
    </div>
  );
}
