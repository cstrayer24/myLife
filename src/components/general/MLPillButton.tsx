import { MouseEventHandler } from "react";

export default function MLPillButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className=" cursor-pointer bg-ml-Celadon rounded-full py-2 px-5 text-white h-fit w-fit text-lg active:border-ml-onyx active:border "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
