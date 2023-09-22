import MealTime from "../MealTime/MealTime";
import mealItems from "../../MealData";
function MealTimes(props) {
  const mealItemsToday = mealItems.filter(
    (mealItem) => mealItem.date.toString() == props.today
  );

  console.log("today", props.today);

  const breakfastMealItems = mealItemsToday.filter(
    (mealItem) => mealItem.mealTime === "Breakfast"
  );

  console.log("breakfastMealItems", breakfastMealItems);

  const lunchMealItems = mealItemsToday.filter(
    (mealItem) => mealItem.mealTime === "Lunch"
  );
  const dinnerMealItems = mealItemsToday.filter(
    (mealItem) => mealItem.mealTime === "Dinner"
  );
  return (
    <>
      <MealTime mealTime={"Breakfast"} mealItems={breakfastMealItems} />
      <MealTime mealTime={"Lunch"} mealItems={lunchMealItems} />
      <MealTime mealTime={"Dinner"} mealItems={dinnerMealItems} />
    </>
  );
}

export default MealTimes;
