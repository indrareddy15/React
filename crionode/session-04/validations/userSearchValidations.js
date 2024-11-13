const Joi = require("joi");
const { validGenders } = require("../configs/config")

const userSeachValidations = Joi.object({
    gender: Joi.string().valid(...validGenders),
    age: Joi.number().min(0).max(100)
}).or("gender", "age");

module.exports = { userSeachValidations };
