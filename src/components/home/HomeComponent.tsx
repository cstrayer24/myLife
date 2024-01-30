"use client";

import baseData from "@/types/userBaseData";
import { useState } from "react";
export default function HomeComponent({ data }: { data: baseData }) {
  const { info, diet, mental, physical } = data;
  return <div className=" w-screen h-screen"></div>;
}
