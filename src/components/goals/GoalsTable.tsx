"use client";

import ISOToFreedomDate from "@/lib/ISOToFreedomDate";
import { useEffect, useState } from "react";
import ChangeStatusSelect from "./ChangeStatusSelect";

export default function GoalsTable() {
  const [goalsArr, setGoalsArr] = useState<goal_t[]>([]);
  async function getGoals() {
    const req = await fetch("/api/get-goals", { method: "GET" });
    console.log(req);
    if (req.ok) {
      const res = (await req.json()) as goal_t[];
      setGoalsArr(res);
    }
  }

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <div>
      <table className=" border w-[30rem]">
        <thead>
          <tr className=" text-center">
            <th className=" p-5 text-center" colSpan={6}>
              Your goals
            </th>
          </tr>
          <tr>
            <th className="p-5">goal</th>
            <th className="p-5">start</th>
            <th className="p-5">expected completion</th>
            <th className=" p-5">status</th>
            <th className="p-5">urgency level</th>
            <th className="p-5">description</th>
          </tr>
        </thead>

        <tbody>
          {goalsArr.map((v, i) => (
            <tr key={i}>
              <td className=" p-5">{v.name}</td>
              <td className="p-5">{ISOToFreedomDate(v.startTime)}</td>
              <td className="p-5">{ISOToFreedomDate(v.expectedCompletion)}</td>
              <td className="p-2">
                <ChangeStatusSelect
                  currentStatus={v.status}
                  onChange={async (ev) => {
                    const req = await fetch("/api/change-goal-status", {
                      method: "PUT",
                      body: JSON.stringify({
                        goalId: v.id,
                        newVal: ev.target.value,
                      }),
                    });
                    if (req.ok) {
                      console.log(req);
                    }
                  }}
                />
              </td>
              <td className="p-5">{v.timeType}</td>
              <td className="p-5">{v.description || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
