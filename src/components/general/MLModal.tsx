import { MouseEvent, MouseEventHandler } from "react";
import ModalLayer from "./ModalLayer";

export default function MLModal({
  children,
  closeLogic,
}: {
  children: React.ReactNode | React.ReactNode[];
  closeLogic?: MouseEventHandler<HTMLDivElement>;
}) {
  return <ModalLayer closeLogic={closeLogic}>{children}</ModalLayer>;
}
