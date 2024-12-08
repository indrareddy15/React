const Joi = require("joi");

const userValidationSchema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(25)
        .required(),

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .required(),

    password: Joi.string()
        .min(6)
        .max(25)
        .required()
})