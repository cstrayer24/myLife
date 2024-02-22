import UserCircle from "../iconComponents/UserCircle";
import type sizePair from "@/types/sizePair";

import Image from "next/image";
export default function PfpComp({
  pfpUrl,
  imgSize,
  iconClassName,
  className,
}: {
  pfpUrl: string;
  imgSize: sizePair;
  iconClassName?: string;
  className?: string;
}) {
  const [w, h] = imgSize;
  const hasPfp =
    pfpUrl !== "" && pfpUrl !== null && typeof pfpUrl !== "undefined";
  return (
    <>
      {hasPfp ? (
        <div>
          <Image
            alt="your profile picture"
            width={w}
            height={h}
            src={pfpUrl}
            loader={({ width, src, quality }) => src}
            className={className}
            style={{ borderRadius: "100%" }}
            priority
          />
        </div>
      ) : (
        <UserCircle className={iconClassName as string} />
      )}
    </>
  );
}
