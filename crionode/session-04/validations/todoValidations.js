const Joi = require('joi');


const statusQuerySchema = Joi.object({
    status: Joi.string().valid('true', 'false').required()
})

const userIDParamSchema = Joi.object({
    userId: Joi.number().integer().positive().required()
})

module.exports = { statusQuerySchema, userIDParamSchema }