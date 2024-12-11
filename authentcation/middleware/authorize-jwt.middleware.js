const AuthService = require("../services/auth.service");
const UserService = require("../services/user.service");

const authServiceInstance = new AuthService();
const userServiceInstance = new UserService();

const authorizeJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log("authorizeJWT_token", token);
        const { userId } = authServiceInstance.verifyJwt(token);
        // console.log("authorizeJWT decoded", decoded);
        const user = await userServiceInstance.findById(userId);
        // console.log("authorizeJWT user", user);
        req.user = user;
        // console.log("token", req.headers.authorization);
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

module.exports = authorizeJWT;