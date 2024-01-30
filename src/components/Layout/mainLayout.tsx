"use client";
import React, { useState } from "react";

import baseData from "@/types/userBaseData";
import Nav from "../Nav";
export default function MainLayout({
  data,
  children,
}: {
  data: baseData;
  children?: React.ReactNode | React.ReactNode[];
}) {
  const { info, diet, mental, physical } = data;
  return (
    <div className=" w-screen h-screen">
      <Nav userInfo={info} />
    </div>
  );
}
