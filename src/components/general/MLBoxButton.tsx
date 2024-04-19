import { MouseEventHandler } from "react";

export default function MLBoxButton({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      className={` cursor-pointer bg-ml-Celadon rounded-sm py-2 px-5 text-white h-fit w-fit text-lg active:border-ml-onyx active:border `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
