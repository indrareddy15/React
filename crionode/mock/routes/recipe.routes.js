const Router = require("express");
const {
    getAllRecipes,
    getSearchRecipe,
    getRecipesByCuisine,
} = require("../controllers/recipe.controller.js");

const router = Router();

router.get("/", getAllRecipes);
router.get("/search", getSearchRecipe);
router.get("/cuisine/:cuisine", getRecipesByCuisine);

module.exports = { router };
