const { recipeSchema } = require("../Validations/recipeValidations");
const RecipesJson = require("./recipe.json");

const getAllRecipes = (req, res) => {
    res.send(RecipesJson);
};


const getSearchRecipe = (req, res) => {
    const { error } = recipeSchema.validate(req.query);

    if (error) {
        return res.status(400).send({
            message: error.details[0].message,
        })
    }

    const { rating, mealType } = req.query;

    let filteredRecipes = RecipesJson.recipes;

    if (rating || mealType) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
            // Handle rating filter
            const matchesRating = rating
                ? recipe.rating >= parseFloat(rating)
                : true;

            // Handle mealType filter, ensuring we check against an array of mealTypes
            const matchesMealType = mealType
                ? recipe.mealType.some((type) => type.toLowerCase() === mealType.toLowerCase()) // Allow for case-insensitive matching
                : true;

            return matchesRating && matchesMealType;
        });

        if (filteredRecipes.length > 0) {
            return res.send(filteredRecipes);
        } else {
            return res.status(404).send({
                message: "No recipes found matching the criteria",
            });
        }
    }

    res.send(filteredRecipes);
};

const getRecipesByCuisine = (req, res) => {
    // const { error } = recipeSchema.validate(req.params);

    // if (error) {
    //     return res.status(400).send({
    //         message: error.details[0].message,
    //     })
    // }

    const { cuisine } = req.params;

    const recipe = RecipesJson.recipes.find((recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase());

    if (!recipe) {
        return res.status(404).send({
            message: "Recipe not found for the given cuisine",
        });
    }

    res.send(recipe);
};


module.exports = { getAllRecipes, getSearchRecipe, getRecipesByCuisine };
