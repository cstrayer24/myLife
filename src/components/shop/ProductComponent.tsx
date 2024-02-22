"use client";
import Image from "next/image";
import ShoppingCart from "../iconComponents/ShoppingCarts";
import { useState } from "react";
import { Span } from "next/dist/trace";

export default function ProductComponent({
  src,
  productName,
  price,
  id,
}: {
  src: string;
  productName: string;
  price: number;
  id: string;
}) {
  const [addedToCart, setAddedToCart] = useState(false);
  return (
    <div className=" col-span-1 row-span-1">
      <Image
        height={100}
        width={100}
        src={src}
        alt={productName}
        className=" h-[80%] w-full"
        priority
      />

      <div className=" h-[20%] bg-ml-forest flex justify-between text-white pt-2  px-10">
        <div>
          <h1 className=" text-2xl font-bold">{productName}</h1>
          <span className=" text-lg text-ml-onyx/80">${price}</span>
        </div>
        <div className=" flex items-center ">
          {" "}
          <button
            className=" bg-ml-Celadon w-20 rounded-md p-2 flex"
            onClick={async (ev) => {
              const req = await fetch("/api/add-to-cart", {
                method: "PUT",
                body: JSON.stringify({ itemid: id }),
              });
              if (req.ok) {
                setAddedToCart(true);
                setTimeout(() => {
                  setAddedToCart(false);
                }, 500);
              }
            }}
          >
            {!addedToCart && (
              <span className=" flex">
                <ShoppingCart className=" w-6 h-6 text-white" />+
              </span>
            )}

            {addedToCart && (
              <span className=" w-full">
                <h1>✓</h1>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
