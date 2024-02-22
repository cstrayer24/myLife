"use client";

import baseData, { baseUser } from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import UserCircle from "../iconComponents/UserCircle";
import TextChanger from "./TextChanger";
import { createContext, useEffect, useState } from "react";
import PfpChanger from "./PfpChanger";

export const BaseSettingsCtx = createContext({});

export default function UserSettingsComp({ data }: { data: baseData }) {
  async function getSignedUrl() {
    if (typeof window != "undefined") {
      console.log("gtg");
      if (!window.localStorage.getItem("pfp-url")) {
        const req = await fetch("/api/get-signed-url", {
          method: "POST",
          body: JSON.stringify({
            imgPath: `${data.info.username}_pfp`,
          }),
          cache: "no-store",
        });
        if (req.ok) {
          const res = await req.text();
          window.localStorage.setItem("pfp-url", res);
        }
      } else {
        return window.localStorage.getItem("pfp-url");
      }
    }
  }
  useEffect(() => {
    getSignedUrl();
  });

  const [settingText, setSettingsText] = useState({});
  return (
    <MainLayout data={data}>
      <div className="w-full h-full  text-white">
        <PfpChanger username={data.info.username} pfpUrl={data.info.pfp} />
        <BaseSettingsCtx.Provider value={{ settingText, setSettingsText }}>
          <TextChanger
            feild="username"
            val={data.info.username}
            thingToChange="username"
          />
          <TextChanger
            feild="email"
            val={data.info.email}
            thingToChange="email"
            isEmail
          />
          <TextChanger
            feild="first name"
            val={data.info.firstname}
            thingToChange="firstname"
          />

          <TextChanger
            feild="last name"
            val={data.info.lastname}
            thingToChange="lastname"
          />
        </BaseSettingsCtx.Provider>
        <div className="w-full flex justify-center mt-5">
          {" "}
          <button
            className=" bg-ml-Celadon rounded-md p-2 px-5"
            onClick={async (e) => {
              //todo make the api route
              const req = await fetch("/api/set-user-setting", {
                method: "PATCH",
                body: JSON.stringify({ thingsToChange: settingText }),
              });

              if (req.ok) {
                if (typeof window != "undefined") {
                  window.location.reload();
                }
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
