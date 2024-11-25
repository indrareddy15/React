const Joi = require('joi');  // Fixed the require statement

const userValidationsSchema = Joi.object({
    fullName: Joi.string().max(50).default("")
        .messages({
            'string.base': 'Full name must be a string.',
            'string.max': 'Full name must be less than or equal to 50 characters.',
            'any.required': 'Full name is required.'
        }),

    userName: Joi.string().max(50).required()
        .messages({
            'string.base': 'User name must be a string.',
            'string.max': 'User name must be less than or equal to 50 characters.',
            'any.required': 'User name is required.'
        }),

    email: Joi.string().email({ tlds: { allow: false } }).required()
        .messages({
            'string.base': 'Email must be a string.',
            'string.email': 'Email must be a valid email address.',
            'any.required': 'Email is required.'
        })
});


const validateUser = (req, res, next) => {
    const { error } = userValidationsSchema.validate(req.body);
    console.log(error)
    if (error) {
        res.status(400).json({ message: `Invalid data`, details: error.details })
    }
    next()
}

module.exports = { validateUser };
