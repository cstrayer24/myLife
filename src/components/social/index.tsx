"use client";
import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import { useEffect, useState } from "react";
import PersonalCard from "./PersonalCard";
import GroupJoin from "./GroupJoin";
import recomendGroups from "@/lib/recomendGroups";
import group_t from "@/types/group_t";
export default function SocialComponent({ data }: { data: baseData }) {
  const [pCardIsUp, setPCardIsUp] = useState(false);
  const [groups, setGroups] = useState<group_t[]>([]);
  async function getGroups() {
    const groups = recomendGroups(data);
    console.log(groups);
    const req = await fetch("/api/get-group-by-keyword", {
      method: "POST",
      body: JSON.stringify({ keywords: groups }),
    });
    console.log(req);
    const res: group_t[] = await req.json();
    setGroups(res);
    console.log(res);
  }
  getGroups();

  return (
    <>
      {pCardIsUp && (
        <PersonalCard
          closeLogic={(ev) => {
            setPCardIsUp(false);
          }}
          username={data.info.username}
        />
      )}
      <MainLayout data={data}>
        <div className=" w-full h-56 grid grid-flow-row grid-rows-2 bg-ml-aqua mb-14">
          <div className=" border-b-white border-b w-full">
            <div className=" w-[70%] flex justify-between text-white items-center h-full">
              <span
                className=" ml-2 text-lg font-bold cursor-pointer"
                onClick={(ev) => {
                  setPCardIsUp(true);
                }}
              >
                my card
              </span>
              <h1 className=" text-4xl font-bold italic ">Social Groups</h1>
            </div>
            <div className="w-full flex items-center justify-center h-full text-white">
              <p>Connect with alike people according to our data</p>
            </div>
          </div>
        </div>
        <div className=" relative">
          <hr className="w-full bg-ml-onyx text-ml-onyx h-1" />
          <h1 className=" absolute top-[-10px] block bg-white left-20 text-xl font-bold mb-10">
            Recommendations
          </h1>
        </div>
        <div className=" grid grid-cols-auto-fit mt-5">
          {/* <GroupJoin
            GroupName="students"
            img="https://nkkjhhjhj.uk/capAndGown.jpeg"
          /> */}
          {groups.map((v, i) => (
            <GroupJoin GroupName={v.name} img={v.thumbnail} key={i} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
