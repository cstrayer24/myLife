"use client";
import { useRouter } from "next/navigation";
import MLContainer from "../general/MLContainer";
import Image from "next/image";
export default function WorkoutButton() {
  const router = useRouter();
  return (
    <MLContainer
      className=" h-full grid grid-cols-2 cursor-pointer hover:bg-ml-emerald/50"
      onClick={(ev) => {
        router.push("/home/physical/workout");
      }}
    >
      <div className=" h-full flex items-center">
        {" "}
        <Image
          src={"/images/workoutImg.jpeg"}
          alt="very strong guy"
          height={100}
          width={100}
          className=" w-52 h-48"
        />
      </div>
      <div className=" h-full flex items-center">
        <h1 className=" font-extrabold text-4xl italic text-ml-onyx">
          My Workout
        </h1>
      </div>
    </MLContainer>
  );
}
