


// const verifyAuth = (req, res, next) => {
//     if (req.headers.authorization !== process.env.PASSWORD)
//         return res.status(401).send({ message: "Unauthorized" });
//     next();
// }

const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ message: `Unauthorized Access` })
    }
    next();
}

module.exports = { validateApiKey }