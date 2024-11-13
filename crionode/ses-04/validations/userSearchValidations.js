import Joi from "joi";
import validGenders from "../configs/config";

// const Joi = require("joi");
// const { validGenders } = require("../configs/config")

export const userSeachValidations = Joi.object({
    gender: Joi.string().valid(...validGenders),
    age: Joi.number().min(0).max(100)
}).or("gender", "age");

// module.exports = { userSeachValidations };
