import { FormEventHandler, useRef } from "react";
import DescriptionComponent from "./DescriptionComponent";
import FormSlot from "./FormSlot";
import StatusSelect from "./StatusSelect";
import formDataToObj from "@/lib/formDataToObj";
export default function NewGoalForm() {
  const formRef = useRef(null);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const fd = new FormData(formRef.current as unknown as HTMLFormElement);
    const fdObj = formDataToObj(fd);
    const req = await fetch("/api/make-goal", {
      method: "POST",
      body: JSON.stringify(fdObj),
    });
  };
  return (
    <div className=" w-full h-full">
      <form
        action=""
        className=" w-full h-full"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <FormSlot
          displayText="goal name"
          formName="name"
          formPlaceHolder="lose 30 pounds"
          formType="text"
        />
        <FormSlot
          displayText=" expected completion time"
          formType="date"
          formName="expectedCompletion"
        />
        <FormSlot
          displayText="expected time frame"
          formName="timeType"
          OtherComp={StatusSelect}
        />
        <DescriptionComponent />

        <div className=" w-full flex justify-center pt-4">
          <button className=" bg-ml-Celadon p-3 rounded-md text-white">
            add new Goal
          </button>
        </div>
      </form>
    </div>
  );
}
