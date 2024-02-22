export default function DescriptionComponent() {
  return (
    <div className=" w-full border-y flex flex-col justify-center gap-14 py-4">
      <div className=" flex justify-center">
        <h1>Description(optional)</h1>
      </div>
      <div className=" flex justify-center">
        <textarea
          name="description"
          id=""
          cols={5}
          rows={5}
          className=" w-1/2 border  px-3 py-2"
        ></textarea>
      </div>
    </div>
  );
}
