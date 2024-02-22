import { MouseEventHandler } from "react";
import ShoppingCart from "../iconComponents/ShoppingCarts";

export default function CartButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className=" cursor-pointer" onClick={onClick}>
      <ShoppingCart className=" w-6 h-6 text-white mr-2 " />
    </div>
  );
}
