import { MouseEventHandler } from "react";
import CartModalContents from "./CartModalContents";

export default function CartModal({
  closeModal,
}: {
  closeModal: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <div className=" w-screen h-screen bg-ml-onyx/55 absolute top-0 left-0 z-50 grid place-items-center ">
      <CartModalContents closeModal={closeModal} />
    </div>
  );
}
