const recipeSelection = {
  isTypeSuitable(type, dietaryRestriction) {
    if (typeof type !== "string" || typeof dietaryRestriction !== "string") {
      throw new Error("Invalid input");
    }
    if (dietaryRestriction === "Vegetarian" && type === "Meat") {
      return "This recipe is not suitable for vegetarians";
    } else if (
      dietaryRestriction === "Vegan" &&
      (type === "Meat" || type === "Dairy")
    ) {
      return "This recipe is not suitable for vegans";
    } else {
      return "This recipe is suitable for your dietary restriction";
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let remainingBudget = budget - price;

    if (remainingBudget < 0) {
      return "You don't have enough budget to afford this recipe";
    } else {
      return `Recipe ingredients bought. You have ${remainingBudget}$ left`;
    }
  },
  getRecipesByCategory(recipes, category) {
    if (!Array.isArray(recipes) || typeof category !== "string") {
      throw new Error("Invalid input");
    }

    const filteredRecipes = recipes.filter(
      (recipe) => recipe.category === category
    );
    return filteredRecipes.map((recipe) => recipe.title);
  },
};

let res = recipeSelection.getRecipesByCategory(
  [{ title: " Spicy Tofu Stir-Fry ", category: " Asian " }],
  " Asian "
);
console.log(res);
module.exports = recipeSelection;
