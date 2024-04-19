"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import CartItem from "./CartItem";
import cartInfo_t from "@/types/cartInfo_t";
import rmCartItemById from "@/lib/rmCartItemById";
import checkoutItem_t from "@/types/checkoutItem_t";
import { useRouter } from "next/navigation";
import MLBoxButton from "../general/MLBoxButton";

export default function CartModalContents({
  closeModal,
}: {
  closeModal: MouseEventHandler<HTMLAnchorElement>;
}) {
  const router = useRouter();

  const [cartData, setCartData] = useState<cartInfo_t>({} as any);
  async function getItems() {
    const req = await fetch("/api/get-cart-items");
    if (req.ok) {
      const res = (await req.json()) as cartInfo_t;
      if (typeof window !== "undefined") {
        res.items = res.items.map((v) => ({
          ...v,
          keyForFrontEnd: window.crypto.randomUUID(),
        }));
      }
      setCartData(res);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  const continueStr = "continue shopping";
  return (
    <div className=" bg-white w-[65rem] h-[40rem] px-5">
      <div className="w-full border-b h-20 flex items-end pb-3 mb-5">
        <h1>your cart</h1>
      </div>
      <div className=" overflow-y-auto w-full h-96  mb-5">
        {cartData.items?.map((v, i) => (
          <CartItem
            itemName={v.name}
            image={v.image}
            price={v.price}
            handleRemove={async (ev) => {
              const req = await fetch("/api/remove-cart-item", {
                method: "PATCH",
                body: JSON.stringify({ itemid: v.id }),
              });
              if (req.ok) {
                setCartData((prev) => {
                  return {
                    total: prev.total - v.price,
                    items: prev.items.filter(
                      (it) => it.keyForFrontEnd !== v.keyForFrontEnd
                    ),
                  };
                });
              }
            }}
            key={i}
          />
        ))}
      </div>
      <div className=" w-full  h-28 flex justify-between">
        <div
          className={`h-full w-[${continueStr.length}ch] flex items-end  text-ml-forest`}
        >
          <a className=" cursor-pointer" onClick={closeModal}>
            {"<-"}continue shopping
          </a>
        </div>
        <div className=" h-full w-fit flex items-end flex-col justify-between">
          <div className=" w-32 flex justify-between">
            <h1>total</h1>
            <h1>${cartData?.total}</h1>
          </div>
          <MLBoxButton
            text="Checkout"
            onClick={async (ev) => {
              const itemsToSend: checkoutItem_t[] = [];

              cartData.items.forEach((v, i) => {
                const existingIndex = itemsToSend.findIndex(
                  (item) => item.itemid === v.id
                );

                if (existingIndex > -1) {
                  itemsToSend[existingIndex].quantity++;
                } else {
                  itemsToSend.push({ itemid: v.id, quantity: 1 });
                }
              });
              console.log(itemsToSend);
              const req = await fetch("/api/create-checkout-session-shop", {
                method: "POST",
                body: JSON.stringify({ itemsToSend: itemsToSend }),
              });
              if (req.ok) {
                const res = await req.json();
                router.push(res.paymentUrl);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
