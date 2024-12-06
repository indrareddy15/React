// JSON web token process
const AuthService = require("../services/auth.service");
const UserService = require("../services/user.service");

const authService = new AuthService();
const userService = new UserService();

const authorize = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const { userId } = authService.verifyJwt(token)
        const user = await userService.findById(userId)
        req.user = user;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(403).send({ message: `Jwt Expired` })
        }
        if (error.name = "JsonWebTokenError") {
            return res.status(403).send({ message: error.message })
        }
        res.sendStatus(401).json({ message: `Unauthorized` })
    }

}

module.exports = authorize