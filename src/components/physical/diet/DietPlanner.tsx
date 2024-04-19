"use client";
import MLContainer from "@/components/general/MLContainer";
import MLPillButton from "@/components/general/MLPillButton";
import MLTinput from "@/components/general/MLTinput";
import { useState } from "react";
import MealPlanner from "./MealPlanner";

function frontend2DatabaseFoodItem(frontend: string) {
  interface hm {
    [key: string]: string;
  }

  const itemsMap = {
    //drinks
    Water: "WATER",
    Coffee: "COFFEE",
    "Orange Juice": "OJ",
    "Apple Juice": "AJ",
    Milk: "MILK",
    "Chocolate Milk": "CHOCOLATE_MILK",
    "Sports Drink": "SPORTS_DRINK",
    "Iced Tea": "TEA",
    "Sparkling Water": "SPARKLING_WATER",
    "Red Wine": "RED_WINE",
    //carbs
    "Hash Brown": "HASHBROWN",
    Oatmeal: "OATMEAL",
    Granola: "GRANOLA",
    "Baked Potato": "BAKED_POTATO",
    Rice: "RICE",
    "Brown Rice": "BROWN_RICE",
    Noodles: "NOODLES",
    Quinoa: "QUINOA",
    "Mashed Potato": "MASHED_POTATO",

    //proteins
    Steak: "STEAK",
    Eggs: "EGGS",
    Bacon: "BACON",
    Sausage: "SAUSAGE",
    Turkey: "TURKEY",
    Ham: "HAM",
    Salami: "SALAMI",
    Fish: "FISH",
    Chicken: "CHICKEN",
    Lamb: "LAMB",
    Pork: "PORK",
    //veggies
    Spinach: "SPINACH",
    Peppers: "PEPPERS",
    Tomatoes: "TOMATOES",
    Avocado: "AVOCADO",
    Lettuce: "LETTUCE",
    Broccoli: "BROCCOLI",
    Asparagus: "ASPARAGUS",
    //fruits
    Strawberry: "STRAWBERRY",
    Orange: "ORANGE",
    Apple: "APPLE",
    Blueberries: "BLUEBERRY",
    Watermelon: "WATERMELON",
  };
}
export default function DietPlanner() {
  const workoutTypes = ["Cardio", "Endurance", "Lifting", "Calisthenics"];
  const trackingTypes = ["timed", "counted"];
  const [dietName, setDietName] = useState("");
  const [breakfastDrink, setBreakfastDrink] = useState("");
  const [breakfastCarb, setBreakfastCarb] = useState("");
  const [breakfastProtein, setBreakfastProtein] = useState("");
  const [breakfastVegetable, setBreakfastVegetable] = useState("");
  const [breakfastFruit, setBreakfastFruit] = useState("");
  const [lunchDrink, setLunchDrink] = useState("");
  const [lunchCarb, setLunchCarb] = useState("");
  const [lunchProtein, setLunchProtein] = useState("");
  const [lunchVegetable, setLunchVegetable] = useState("");
  const [lunchFruit, setLunchFruit] = useState("");
  const [dinnerDrink, setDinnerDrink] = useState("");
  const [dinnerCarb, setDinnerCarb] = useState("");
  const [dinnerProtein, setDinnerProtein] = useState("");
  const [dinnerFruit, setDinnerFruit] = useState("");
  const [dinnerVegetable, setDinnerVegetable] = useState("");
  return (
    <MLContainer className="  w-[55rem] overflow-y-scroll h-[40rem]">
      <span className="w-full flex justify-center">
        <MLTinput
          placeholder="diet name"
          onChange={(ev) => {
            setDietName(ev.target.value);
          }}
        />
      </span>
      <div>
        <MealPlanner
          mealName="Breakfast"
          drinks={[
            "Water",
            "Coffee",
            "Orange Juice",
            "Apple Juice",
            "Milk",
            "Chocolate Milk",
          ]}
          drinksOnChange={(ev) => {
            setBreakfastDrink(ev.target.value);
          }}
          carbs={["HashBrown", "Oatmeal", "Granola"]}
          carbsOnChange={(ev) => {
            setBreakfastCarb(ev.target.value);
          }}
          proteins={["Eggs", "Steak", "Bacon", "Sausage"]}
          proteinsOnChange={(ev) => {
            setBreakfastProtein(ev.target.value);
          }}
          vegetables={["Spinach", "Avocado", "Peppers", "Tomatoes"]}
          vegetablesOnChange={(ev) => {
            setBreakfastVegetable(ev.target.value);
          }}
          fruits={["Strawberry", "Orange", "Apple", "Blueberries"]}
          fruitsOnChange={(ev) => {
            setBreakfastFruit(ev.target.value);
          }}
          accentColor="#f08411"
        />
        <MealPlanner
          mealName="Lunch"
          drinks={["Water", "Apple Juice", "Milk", "Sports Drink", "Iced Tea"]}
          drinksOnChange={(ev) => {
            setLunchDrink(ev.target.value);
          }}
          carbs={["Baked Potato", "Rice", "Brown Rice", "Granola"]}
          carbsOnChange={(ev) => {
            setLunchCarb(ev.target.value);
          }}
          proteins={["Turkey", "Ham", "Salami", "Fish"]}
          proteinsOnChange={(ev) => {
            setLunchProtein(ev.target.value);
          }}
          vegetables={["Spinach", "Avocado", "Tomatoes", "Lettuce", "Broccoli"]}
          vegetablesOnChange={(ev) => {
            setLunchVegetable(ev.target.value);
          }}
          fruits={[
            "Strawberry",
            "Orange",
            "Apple",
            "Blueberries",
            "Watermelon",
          ]}
          fruitsOnChange={(ev) => {
            setLunchFruit(ev.target.value);
          }}
          accentColor="#18aedb"
        />
        <MealPlanner
          mealName="Dinner"
          drinks={["Water", "Sparkling Water", "Iced Tea", "Red Wine"]}
          drinksOnChange={(ev) => {
            setDinnerDrink(ev.target.value);
          }}
          carbs={["Rice", "Noodles", "Quinoa", "Baked Potato", "Mashed Potato"]}
          carbsOnChange={(ev) => {
            setDinnerCarb(ev.target.value);
          }}
          proteins={["Chicken", "Steak", "Fish", "Lamb", "Pork"]}
          proteinsOnChange={(ev) => {
            setDinnerProtein(ev.target.value);
          }}
          vegetables={[
            "Spinach",
            "Avocado",
            "Tomatoes",
            "Lettuce",
            "Broccoli",
            "Asparagus",
          ]}
          vegetablesOnChange={(ev) => {
            setDinnerVegetable(ev.target.value);
          }}
          fruits={[
            "Strawberry",
            "Orange",
            "Apple",
            "Blueberries",
            "Watermelon",
          ]}
          fruitsOnChange={(ev) => {
            setDinnerFruit(ev.target.value);
          }}
          accentColor="#2218db"
        />

        <div className=" flex justify-center align-middle ">
          <MLPillButton
            text="Plan"
            onClick={async (ev) => {
              const req = await fetch("/api/make-diet", {
                method: "POST",
                body: JSON.stringify({
                  name: dietName,
                  breakfast: {
                    drink: breakfastDrink,
                    fruit: breakfastFruit,
                    vegetable: breakfastVegetable,
                    carb: breakfastCarb,
                    protein: breakfastProtein,
                  },
                  lunch: {
                    drink: lunchDrink,
                    fruit: lunchFruit,
                    vegetable: lunchVegetable,
                    carb: lunchCarb,
                    protein: lunchProtein,
                  },
                  dinner: {
                    drink: dinnerDrink,
                    fruit: dinnerFruit,
                    vegetable: dinnerVegetable,
                    carb: dinnerCarb,
                    protein: dinnerProtein,
                  },
                }),
              });
            }}
          />
        </div>
      </div>
    </MLContainer>
  );
}
