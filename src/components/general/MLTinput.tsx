import { ChangeEventHandler, useRef, useState } from "react";

export default function MLTinput({
  onChange,
  placeholder,
  type,
  className,
  value,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  value?: string;
  className?: string;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [divBorderStyle, setDivBorderStyle] = useState("border");
  const [textInBorderStyle, setTextInBorderStyle] = useState("border-b");
  return (
    <div
      className={`${divBorderStyle} ${className} p-5 border-ml-onyx rounded-md  cursor-text flex justify-center `}
      onClick={(ev) => {
        inputRef.current?.focus();
        setDivBorderStyle("border-2");
      }}
    >
      <input
        type={type ? type : ""}
        onChange={onChange ? onChange : undefined}
        placeholder={placeholder ? placeholder : ""}
        className={` px-5 py-1 ${textInBorderStyle} border-ml-forest outline-none mb-3`}
        ref={inputRef}
        value={value}
        onFocus={(ev) => {
          setTextInBorderStyle("border-b-2");
        }}
        onBlur={(ev) => {
          setDivBorderStyle("border");
          setTextInBorderStyle("border-b");
        }}
      />
    </div>
  );
}
