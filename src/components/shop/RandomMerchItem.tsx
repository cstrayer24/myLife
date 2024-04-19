import product_t from "@/types/product_t";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function RandomMerchItem() {
  const [merchItem, setMerchItem] = useState<product_t>();

  async function getItem() {
    const req = await fetch("/api/get-products");

    const res: product_t[] = await req.json();

    setMerchItem(res[Math.floor(Math.random() * res.length)]);
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div
      className=" h-full relative bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${merchItem?.image})` }}
    >
      <h4 className=" absolute bottom-0 right-0">{merchItem?.name}</h4>
    </div>
  );
}
