import { MouseEventHandler } from "react";

export default function MLContainer({
  className,
  children,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={` p-11 shadow-xl  drop-shadow-xl rounded-md border ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
