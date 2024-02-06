import { useState } from "react";

export default function TextChanger({
  feild,
  val,
  thingToChange,
}: {
  feild: string;
  val: string;
  thingToChange: string;
}) {
  const [valState, setValState] = useState(val);

  return (
    <div className="w-full flex justify-center">
      <div>
        <h2>{feild}:</h2>
        <form>
          <input
            type="text"
            name=""
            id=""
            value={valState}
            onChange={(e) => {
              e.preventDefault();
              setValState(e.target.value);
            }}
          />
          <button>change</button>
        </form>
      </div>
    </div>
  );
}
