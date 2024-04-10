"use client";
import UserCircle from "../iconComponents/UserCircle";
import styles from "../../transitions/navHoverTransitions.module.css";
import { useRouter } from "next/navigation";
import PfpComp from "../general/PfpComp";
export default function UserView({
  username,
  pfpUrl,
}: {
  username: string;
  pfpUrl: string;
}) {
  const router = useRouter();
  return (
    <div
      className={`${styles.navHover} border-y-white border-b w-full relative hover:bg-white/65 cursor-pointer py-4 grid grid-flow-row grid-rows-2`}
      onClick={(e) => {
        router.push("/home/user-settings");
      }}
    >
      <div className=" justify-center h-10 flex w-full items-center gap-10">
        {/* <UserCircle className=" w-10 h-10 ml-10 font-bold" /> */}
        <PfpComp
          iconClassName="w-10 h-10 ml-10 font-bold"
          imgSize={[100, 150]}
          pfpUrl={pfpUrl}
          className="w-10 h-10 ml-10 font-bold"
        />
      </div>

      <div className=" flex justify-center h-10 mt-3">
        <h2 className="inline text-white font-bold text-2xl">{username}</h2>
      </div>
    </div>
  );
}
