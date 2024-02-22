import NewGoalForm from "./NewGoalForm";

export default function ModalContents() {
  return (
    <div className=" bg-white h-[35rem] rounded-md  w-[40rem]">
      <div className=" w-full border-b h-10 border-b-ml-aqua text-center py-2 text-ml-onyx mb-5">
        <h2 className=" font-bold text-lg">start a new goal</h2>
      </div>

      <div className=" h-[90%]">
        <NewGoalForm />
      </div>
    </div>
  );
}
