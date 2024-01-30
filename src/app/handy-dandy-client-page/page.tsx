"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  if (typeof window != "undefined") {
    router.push("/home");
  }
  return <div></div>;
}
