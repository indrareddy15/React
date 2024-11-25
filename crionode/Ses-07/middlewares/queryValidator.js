const { userValidationsSchema } = require("../validations/userValidationsSchema");

const queryValidator = (req, res, next) => {
    const { gender, age } = req.query;
    const result = userValidationsSchema.validate({ gender, age });
    console.log(JSON.stringify(result));
    if (result.error) {
        return res.status(400).send({ message: result.error.details[0].message });
    }
    next();
}

module.exports = { queryValidator };