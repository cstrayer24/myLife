"use client";

import baseData, { baseUser } from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import UserCircle from "../iconComponents/UserCircle";
import TextChanger from "./TextChanger";

export default function UserSettingsComp({ data }: { data: baseData }) {
  return (
    <MainLayout data={data}>
      <div className="w-full h-full bg-ml-emerald text-white">
        <div className="w-full flex justify-center border-b border-b-white">
          <UserCircle className=" w-20 h-20" />
        </div>
        <TextChanger
          feild="username"
          val={data.info.username}
          thingToChange="username"
        />
      </div>
    </MainLayout>
  );
}
