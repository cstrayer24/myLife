import { redirect } from "next/navigation";

export default function sendToLogin() {
  redirect(`${process.env.LANDINGURL}/login`);
}
