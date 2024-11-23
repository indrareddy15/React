const Joi = require('joi');
const { validGenders } = require('../configs/userConfig');


const userValidationsSchema = Joi.object({
    gender: Joi.string().valid(...validGenders),
    age: Joi.number().integer().min(0).max(100)
}).or("gender", "age");

module.exports = { userValidationsSchema };

