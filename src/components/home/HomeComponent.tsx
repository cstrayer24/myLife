"use client";

import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import MainLogo from "../imageComponents/MainLogo";
import { useRouter } from "next/navigation";
import type sizePair from "@/types/sizePair";
import MLContainer from "../general/MLContainer";
import RandomMerchItem from "../shop/RandomMerchItem";
export default function HomeComponent({ data }: { data: baseData }) {
  const logoSize: sizePair = [100, 100];
  const router = useRouter();
  return (
    <MainLayout data={data}>
      <div className=" h-full w-full grid place-items-center ">
        <div className=" z-0">
          <MainLogo size={logoSize} />
          <span className=" block border-b border-b-ml-aqua pb-4">
            Welcome to myLife Click on any of the options in the navigation bar
            to get started
          </span>
        </div>

        {/* <div className="h-full w-full grid grid-rows-2 grid-cols-2">
          <div className=" p-1"></div>
          <div className=" p-2"> </div>
          <div></div>
          <div>
            <MLContainer
              className=" w-64 h-60 cursor-pointer"
              onClick={(ev) => {
                router.push("/home/shop");
              }}
            >
              <div className=" w-full border-b text-center">featured item</div>
              <RandomMerchItem />
            </MLContainer>
          </div>
        </div> */}
      </div>
    </MainLayout>
  );
}
