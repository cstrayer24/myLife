import { useState } from "react";

export default function KeyWord({
  blurHandle,
}: {
  blurHandle: (text: string) => any;
}) {
  const [displayText, setDisplayText] = useState("");
  const [disabled, setDisabled] = useState(false);
  return (
    <input
      type="text"
      name=""
      id=""
      className=" w-20 rounded-full px-2 bg-gray-400 outline-none  border-ml-onyx border"
      disabled={disabled}
      onChange={(ev) => {
        setDisplayText(ev.target.value);
      }}
      onBlur={(ev) => {
        setDisabled(true);
        blurHandle(displayText);
      }}
    />
  );
}
