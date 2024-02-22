"use client";

import baseData from "@/types/userBaseData";
import { useState } from "react";
import MainLayout from "../Layout/mainLayout";
import MainLogo from "../imageComponents/MainLogo";
import type sizePair from "@/types/sizePair";
export default function HomeComponent({ data }: { data: baseData }) {
  // const { info, diet, mental, physical } = data;
  const logoSize: sizePair = [100, 100];
  return (
    <MainLayout data={data}>
      <div className=" h-full w-full grid place-items-center">
        <div>
          <MainLogo size={logoSize} />
          <span className=" block border-b border-b-ml-aqua pb-4">
            Welcome to myLife Click on any of the options in the navigation bar
            to get started
          </span>
        </div>
      </div>
    </MainLayout>
  );
}
