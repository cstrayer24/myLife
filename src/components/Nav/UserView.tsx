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
      className={`${styles.navHover} border-y-white border-y w-full relative top-10 hover:bg-white/65 cursor-pointer py-4`}
      onClick={(e) => {
        router.push("/home/user-settings");
      }}
    >
      <div className=" h-10 flex items-center gap-10">
        {/* <UserCircle className=" w-10 h-10 ml-10 font-bold" /> */}
        <PfpComp
          iconClassName="w-10 h-10 ml-10 font-bold"
          imgSize={[100, 150]}
          pfpUrl={pfpUrl}
          className="w-10 h-10 ml-10 font-bold"
        />
        <h2 className="inline text-white font-bold">Hello {username}</h2>
      </div>
    </div>
  );
}
