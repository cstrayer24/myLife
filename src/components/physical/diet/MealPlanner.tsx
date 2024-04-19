import MLSelect from "@/components/general/MLSelect";
import { ChangeEventHandler } from "react";

export default function MealPlanner({
  mealName,
  drinks,
  drinksOnChange,
  carbs,
  carbsOnChange,
  proteins,
  proteinsOnChange: proteinsOnChange,
  vegetables,
  vegetablesOnChange,
  fruits,
  fruitsOnChange,
  accentColor,
}: {
  mealName: string;
  drinks: string[];
  drinksOnChange?: ChangeEventHandler<HTMLSelectElement>;
  carbs: string[];
  carbsOnChange?: ChangeEventHandler<HTMLSelectElement>;
  proteins: string[];
  proteinsOnChange?: ChangeEventHandler<HTMLSelectElement>;
  vegetables: string[];
  vegetablesOnChange?: ChangeEventHandler<HTMLSelectElement>;
  fruits: string[];
  fruitsOnChange?: ChangeEventHandler<HTMLSelectElement>;
  accentColor?: string;
}) {
  return (
    <div className=" mb-4">
      <div className=" mb-2">
        <h1
          className="text-4xl font-bold mb-1"
          style={{ color: accentColor ? accentColor : "#343E3d" }}
        >
          {mealName}
        </h1>
        <hr
          className="h-1"
          style={{
            color: accentColor ? accentColor : "#343E3d",
            backgroundColor: accentColor ? accentColor : "#343E3",
          }}
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-5">
        <div className=" flex flex-col gap-10">
          <MLSelect
            placeholder="--select a drink--"
            values={drinks}
            onChange={drinksOnChange}
          />
          <MLSelect
            placeholder="--select a carb--"
            values={carbs}
            onChange={carbsOnChange}
          />
        </div>
        <div className=" flex items-center justify-center w-full">
          <MLSelect
            placeholder="--select the main protein--"
            values={proteins}
            className=" w-80"
            onChange={proteinsOnChange}
          />
        </div>
        <div className=" flex flex-col gap-10">
          <MLSelect
            placeholder="--select a vegetable--"
            values={vegetables}
            onChange={vegetablesOnChange}
          />
          <MLSelect
            placeholder="--select a fruit--"
            values={fruits}
            onChange={fruitsOnChange}
          />
        </div>
      </div>
    </div>
  );
}
