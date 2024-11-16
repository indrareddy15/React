const Joi = require("joi");
const { mealTypeSchema } = require("../configs/config");


const recipeSchema = Joi.object({
    rating: Joi.number().required(),
    mealType: Joi.string().valid(...mealTypeSchema).required()
}).or("rating", "mealType");


module.exports = { recipeSchema };