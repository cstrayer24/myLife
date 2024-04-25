"use client";
import MLContainer from "@/components/general/MLContainer";
import MLPillButton from "@/components/general/MLPillButton";
import MLSelect from "@/components/general/MLSelect";
import MLTinput from "@/components/general/MLTinput";
import SnowIcon from "@/components/iconComponents/SnowIcon";
import SunIcon from "@/components/iconComponents/SunIcon";
import { useState } from "react";

function frontend2DatabaseStretchName(frontend: string) {
  interface hm {
    [key: string]: string;
  }
  const nameMap: hm = {
    //warmups
    "Hip Circles": "HIP_CIRCLES",
    "Arm Circles": "ARM_CIRCLES",
    "Arm Swings": "ARM_SWINGS",
    "Forward Jog": "FORWARD_JOG",
    "Backward Jog": "BACKWARD_JOG",
    "High Knees": "HIGH_KNEES",
    Braiding: "BRAIDING",
    //warmups
    "Child's Pose": "CHILDS_POSE",
    "Cat-Cow": "CAT_COW",
    "Standing Chest Opener": "STANDING_CHEST_OPENER",
    "Overhead Triceps Stretch": "OVERHEAD_TRICEPS_STRETCH",
    "Seated Forward Bend": "SEATED_FORWARD_BEND",
    "Knee-to-Chest Stretch": " KNEE_TO_CHEST_STRETCH",
    "Quad Stretch": "QUAD_STRETCH",
    "Hamstring Stretch": "HAMSTRING_STRETCH",
    "Calf Stretch": "CALF_STRETCH",
  };
  if (!Object.keys(nameMap).includes(frontend)) {
    return "";
  }
  return nameMap[frontend];
}
export default function WorkoutPlanner() {
  const workoutTypes = ["Cardio", "Endurance", "Lifting", "Calisthenics"];
  const trackingTypes = ["timed", "counted"];
  const [trackTypeState, setTrackTypeState] = useState(trackingTypes[0]);
  const [warmupType, setWarmupType] = useState("Hip Circles");
  const [warmupReps, setWarmupReps] = useState(0);
  const [workoutType, setWorkoutType] = useState("Cardio");
  const [workoutName, setWorkoutName] = useState("");
  const [workoutMinutes, setWorkoutMinutes] = useState(0);
  const [workoutSeconds, setWorkoutSeconds] = useState(0);
  const [workoutSets, setWorkoutSets] = useState(0);
  const [workoutReps, setWorkoutReps] = useState(0);
  const [cooldownType, setCoolDownType] = useState("Child's Pose");
  const [cooldownReps, setCoolDownReps] = useState(0);
  return (
    <MLContainer className="  w-[55rem] overflow-y-scroll h-[40rem] grid grid-rows-4 gap-4">
      <div>
        <div>
          <div className=" flex">
            <span className=" inline-flex justify-center items-center bg-red-500/90 w-10 h-10 mr-3">
              <SunIcon className=" w-6 h-6 text-white" />
            </span>
            <h1 className=" text-red-500/90 text-4xl font-bold mb-1">Warmup</h1>
          </div>
          <hr className=" bg-red-500/90 text-red-950 h-1" />
          <div className="w-full flex justify-between">
            <span>
              <label htmlFor="warmup_type" className=" mr-2 text-ml-onyx">
                type:
              </label>
              <MLSelect
                placeholder="--pick a type of warmup--"
                values={[
                  "Hip Circles",
                  "Arm Circles",
                  "Arm Swings",
                  "Forward Jog",
                  "Backward Jog",
                  "High Knees",
                  "Braiding",
                ]}
                id="warmup_type"
                onChange={(ev) => {
                  setWarmupType(ev.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="reps" className=" mr-2 text-ml-onyx">
                reps:
              </label>
              <input
                type="number"
                id="reps"
                onChange={(ev) => {
                  setWarmupReps(parseInt(ev.target.value));
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className=" border-t border-t-ml-onyx h-32 grid grid-cols-3">
        <div className="flex flex-col gap-10">
          <div>
            <MLSelect
              placeholder="--select a workout type--"
              values={workoutTypes}
              onChange={(ev) => {
                setWorkoutType(ev.target.value);
              }}
            />
          </div>
          <div>
            <MLTinput
              placeholder="Workout Name"
              className=" p-0.5 border-none"
              onChange={(ev) => {
                setWorkoutName(ev.target.value);
              }}
            />
          </div>
        </div>
        <div className=" relative">
          <div className=" absolute top-0 left-0 w-20 ml-12">
            <span className=" w-full text-center">
              <h1>track by?</h1>
            </span>
            <div className=" flex flex-col">
              {trackingTypes.map((v, i) => (
                <span key={i}>
                  <input
                    type="radio"
                    name="track_type"
                    id={`${v}_id`}
                    value={v}
                    className=" mr-1"
                    checked={v === trackTypeState}
                    onChange={(ev) => {
                      if (ev.target.value != "on") {
                        setTrackTypeState(v);
                      }
                    }}
                  />
                  <label htmlFor={`${v}_id`}>{v}</label>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          {trackTypeState === "timed" && (
            <div className=" h-full flex items-center">
              <input
                type="number"
                className=" w-9"
                onChange={(ev) => {
                  setWorkoutMinutes(parseInt(ev.target.value));
                }}
              />
              <label htmlFor="">m:</label>
              <input
                type="number"
                className=" w-9"
                max={59}
                onChange={(ev) => {
                  setWorkoutSeconds(parseInt(ev.target.value));
                }}
              />
              <label htmlFor="">s</label>
            </div>
          )}
          {trackTypeState === "counted" && (
            <div className=" flex h-full flex-col gap-5">
              <div>
                <span className=" w-6 h-6">
                  <label htmlFor="reps" className=" mr-2">
                    sets:
                  </label>
                  <input
                    type="number"
                    id="reps"
                    onChange={(ev) => {
                      setWorkoutSets(parseInt(ev.target.value));
                    }}
                  />
                </span>
              </div>
              <div>
                <span className="w-6 h-6">
                  <label htmlFor="spr" className=" mr-2">
                    reps:
                  </label>
                  <input
                    type="number"
                    id="spr"
                    onChange={(ev) => {
                      setWorkoutReps(parseInt(ev.target.value));
                    }}
                  />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          <div className=" flex">
            <span className=" inline-flex justify-center items-center bg-blue-500/90 w-10 h-10 mr-3">
              <SnowIcon className=" w-6 h-6 text-white" />
            </span>
            <h1 className=" text-blue-500 text-4xl font-bold mb-1">
              Cool Down
            </h1>
          </div>
          <hr className=" bg-blue-500 text-red-950 h-1" />
          <div className="w-full flex justify-between">
            <span>
              <label htmlFor="cooldown_type" className=" mr-2 text-ml-onyx">
                type:
              </label>
              <MLSelect
                placeholder="--pick a type of cooldown--"
                values={[
                  "Child's Pose",
                  "Cat-Cow",
                  "Standing Chest Opener",
                  "Overhead Triceps Stretch",
                  "Seated Forward Bend",
                  "Knee-to-Chest Stretch",
                  "Quad Stretch",
                  "Hamstring Stretch",
                  "Calf Stretch",
                ]}
                id="cooldown_type"
                onChange={(ev) => {
                  setCoolDownType(ev.target.value);
                }}
              />
            </span>
            <span>
              <label htmlFor="reps" className=" mr-2 text-ml-onyx">
                reps:
              </label>
              <input
                type="number"
                id="reps"
                onChange={(ev) => {
                  setCoolDownReps(parseInt(ev.target.value));
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center align-middle ">
        <MLPillButton
          text="Plan"
          onClick={async (ev) => {
            const req = await fetch("/api/make-workout", {
              method: "POST",
              body: JSON.stringify({
                name: workoutName,
                warmup: {
                  type: frontend2DatabaseStretchName(warmupType),
                  reps: warmupReps,
                },
                exercise: {
                  type: workoutType.toUpperCase(),
                  trackingType: trackTypeState,
                  reps: workoutReps,
                  sets: workoutSets,
                  minutes: workoutMinutes,
                  seconds: workoutSeconds,
                },
                cooldown: {
                  type: frontend2DatabaseStretchName(cooldownType),
                  reps: cooldownReps,
                },
              }),
            });

            if (req.ok) {
            }
          }}
        />
      </div>
    </MLContainer>
  );
}
