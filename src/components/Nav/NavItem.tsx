import navItem_t from "@/types/navItem_t";
import styles from "@/transitions/navHoverTransitions.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
export default function NavItem({
  item,
  height,
}: {
  item: navItem_t;
  height: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currSlug = pathname.split("/")[pathname.split("/").length - 1];
  const { displayText, slug } = item;

  return (
    <div
      className={`${
        styles.navHover
      } w-full border-y h-${height}  border-y-white text-center text-white flex justify-center items-center hover:bg-white/65 hover:text-black cursor-pointer ${
        currSlug === item.slug ? " bg-ml-onyx/65" : ""
      }`}
      onClick={(e) => {
        router.push(`/home/${slug}`);
      }}
    >
      <h2 className=" text-lg">{displayText}</h2>
    </div>
  );
}
