"use client";

import baseData, { baseUser } from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";

export default function UserSettingsComp({ data }: { data: baseData }) {
  return <MainLayout data={data}></MainLayout>;
}
