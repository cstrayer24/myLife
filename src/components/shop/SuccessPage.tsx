"use client";

import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import { useEffect, useState } from "react";

export default function SuccessPage({ data }: { data: baseData }) {
  const [statusText, setStatusText] = useState("");
  async function clearCart() {
    console.log("test");
    const req = await fetch("/api/clear-cart");
    if (req.ok) {
      setStatusText("Your All Set!!");
    } else {
      setStatusText("there was an error try again");
    }
  }

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <MainLayout data={data}>
      <div className=" w-full h-full  grid place-items-center">
        <div>
          <h1 className=" text-ml-onyx text-6xl">{statusText}</h1>
        </div>
      </div>
    </MainLayout>
  );
}
