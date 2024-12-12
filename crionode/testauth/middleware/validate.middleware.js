const validateMiddleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)
    } else {
        next()
    }
}

module.exports = { validateMiddleware }
