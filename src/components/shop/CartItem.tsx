import Image from "next/image";
import { MouseEventHandler } from "react";
export default function CartItem({
  itemName,
  price,
  image,
  handleRemove,
}: {
  itemName: string;
  price: number;
  image: string;
  handleRemove: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <div className=" h-20 w-full flex justify-between px-5 mb-5">
      <div className=" flex row">
        <Image
          src={image}
          alt={itemName}
          width={100}
          height={100}
          className=" w-20 h-20 mr-3"
        />
        <div className=" flex flex-col justify-between">
          <h1 className=" text-lg font-bold">{itemName}</h1>
          <a
            className=" text-sm text-ml-onyx/80 hover:underline cursor-pointer"
            onClick={handleRemove}
          >
            remove
          </a>
        </div>
      </div>
      <div className=" flex h-full items-center">
        <h1>${price}</h1>
      </div>
    </div>
  );
}
