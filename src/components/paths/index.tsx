"use client";
import baseData from "@/types/userBaseData";
import MainLayout from "../Layout/mainLayout";
import PathsHeader from "./PathsHeader";

export default function PathsComponent({ data }: { data: baseData }) {
  return (
    <MainLayout data={data}>
      <div className=" w-full h-full">
        <PathsHeader />
      </div>
    </MainLayout>
  );
}
