function MealItem(date, mealTime, recipeId, recipeName, recipeDescription) {
  this.date = date;
  this.mealTime = mealTime;
  this.recipeId = recipeId;
  this.recipeName = recipeName;
  this.recipeDescription = recipeDescription;
}

const myMeal1 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
  "Breakfast",
  "RecipeId",
  "MyRecipeName1",
  "MyRecipeDescription"
);

const myMeal2 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
  "Lunch",
  "RecipeId",
  "MyRecipeName1",
  "MyRecipeDescription"
);

const myMeal3 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
  "Dinner",
  "RecipeId",
  "MyRecipeName1",
  "MyRecipeDescription"
);

const myMeal4 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  ),
  "Breakfast",
  "RecipeId",
  "MyRecipeName2",
  "MyRecipeDescription"
);

const myMeal5 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  ),
  "Lunch",
  "RecipeId",
  "MyRecipeName2",
  "MyRecipeDescription"
);
const myMeal6 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1
  ),
  "Dinner",
  "RecipeId",
  "MyRecipeName2",
  "MyRecipeDescription"
);

const myMeal7 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 2
  ),
  "Breakfast",
  "RecipeId",
  "MyRecipeName3",
  "MyRecipeDescription"
);

const myMeal8 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 2
  ),
  "Lunch",
  "RecipeId",
  "MyRecipeName3",
  "MyRecipeDescription"
);
const myMeal9 = new MealItem(
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 2
  ),
  "Dinner",
  "RecipeId",
  "MyRecipeName3",
  "MyRecipeDescription"
);

const mealItems = [
  myMeal1,
  myMeal2,
  myMeal3,
  myMeal4,
  myMeal5,
  myMeal6,
  myMeal7,
  myMeal8,
  myMeal9,
];

export default mealItems;
