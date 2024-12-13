const UserService = require('../services/user.service');
const AuthService = require('../services/auth.service');

const userService = new UserService();
const authService = new AuthService();

const authorize = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization.split(" ")[1];
        console.log(authToken)
        const { userId } = await authService.verfityJwt(authToken);
        console.log(userId)
        const user = await userService.findById(userId);
        console.log(user)
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ message: 'Unauthorized' });
    }
}

module.exports = authorize;