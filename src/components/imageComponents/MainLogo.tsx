"use client";
import Image from "next/image";
import type sizePair from "@/types/sizePair";
function MainLogo({ className, size }: { className?: string; size: sizePair }) {
  const [w, h] = size;
  return (
    <div className=" text-center flex justify-center mb-5">
      <Image
        alt="myLife logo"
        height={h}
        width={w}
        src={`/images/mlNewLogo.png`}
      />
    </div>
  );
}
export default MainLogo;
