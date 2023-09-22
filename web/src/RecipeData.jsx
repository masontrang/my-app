function Recipe(
  recipeName,
  cuisineType,
  recipeType,
  recipeYield,
  prepTime,
  cookTime,
  ingredients,
  directions,
  recipeURL,
  imageURL,
  recipeNotes
) {
  this.recipeName = recipeName;
  this.cuisineType = cuisineType;
  this.recipeType = recipeType;
  this.recipeYield = recipeYield;
  this.prepTime = prepTime;
  this.cookTime = cookTime;
  this.ingredients = ingredients;
  this.directions = directions;
  this.recipeURL = recipeURL;
  this.imageURL = imageURL;
  this.recipeNotes = recipeNotes;
}

const myRecipe = new Recipe(
  "Fried Chicken",
  "American",
  "Side Dish",
  "8 servings",
  "30 min",
  "30 min",
  "chicken",
  "cook chicken",
  "url url",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff926647f3c831a8bb7a3024468adfd8f%2F1687043234863Screenshot_20230618_090145_Chrome.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
  "here are some notes"
);

const myRecipe2 = new Recipe(
  "Detroit Deep Dish Pizza ",
  "American",
  "Main Dish",
  "8 servings",
  "30 min",
  "20 min",
  "pizza",
  "cook pizza",
  "url url",
  "https://www.acozykitchen.com/wp-content/uploads/2020/08/DetroitStylePizza-8-1080x1432.jpg",
  "here are some notes"
);

const allRecipes = [
  myRecipe,
  myRecipe2,
  myRecipe,
  myRecipe2,
  myRecipe,
  myRecipe2,
  myRecipe,
  myRecipe2,
  myRecipe,
  myRecipe2,
  myRecipe,
];

export default allRecipes;
