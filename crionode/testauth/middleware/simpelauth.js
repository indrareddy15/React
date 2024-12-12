const authorization = (req, res, next) => {
    try {
        const PASSKEY = process.env.AUTH;
        if (req.headers.authorization && req.headers.authorization === PASSKEY) {
            return next();
        }
        res.status(401).send({ message: 'Unauthorized' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

module.exports = { authorization }