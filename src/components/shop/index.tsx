"use client";
import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import UnderConstruction from "../underConstruction";
import CartButton from "./CartButton";
import ProductComponent from "./ProductComponent";
import { useEffect, useState } from "react";
import product_t from "@/types/product_t";
import CartModal from "./CartModal";

function ShopComponent({ data }: { data: baseData }) {
  const [products, setProducts] = useState<product_t[]>([]);
  const [inCart, SetInCart] = useState(false);

  async function getProducts() {
    const req = await fetch("/api/get-products");

    if (req.ok) {
      const res = (await req.json()) as product_t[];

      setProducts(res);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {inCart && (
        <CartModal
          closeModal={(ev) => {
            SetInCart(false);
          }}
        />
      )}
      <MainLayout data={data}>
        <div className="w-full h-[5%] bg-ml-Celadon flex justify-end items-center">
          <CartButton
            onClick={(ev) => {
              SetInCart(true);
            }}
          />
        </div>
        <div className=" w-full h-[95%] grid px-2 grid-cols-2 auto-rows-auto  pt-5 gap-4">
          {products.map((v, i) => (
            <ProductComponent
              src={v.image}
              productName={v.name}
              price={v.price}
              id={v.id}
              key={i}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default ShopComponent;
