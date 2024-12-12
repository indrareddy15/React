const Joi = require("joi");


const userValidation = Joi.object({
    fullname: Joi.string().min(5).max(20).required(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = { userValidation };