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
  const [currText, setCurrText] = useState(displayText);
  return (
    <div
      className={`${
        styles.navHover
      } w-full border-y   border-y-white text-center text-white flex justify-center items-center hover:bg-white/65 hover:text-black cursor-pointer ${
        //adding support for sub pages is likely as easy as changing currSlug === item.slug to currSlug.includes item.slug
        currSlug === item.slug ? " bg-ml-onyx/65" : ""
      }`}
      onClick={(e) => {
        setCurrText("loading...");
        router.push(`/home/${slug}`);
      }}
      style={{ height: `${height}px` }}
    >
      <h2 className=" text-lg">{currText}</h2>
    </div>
  );
}
