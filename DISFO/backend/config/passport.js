const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const UserService = require("../services/user.service");
const UserServiceInstance = new UserService()


const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
};


const strategyJwt = new JwtStrategy(options, async (payload, done) => {
    try {
        const user = await UserServiceInstance.findById(payload.userId)
        if (user) {
            return done(null, user);
        }

        return done(null, user)
    } catch (error) {
        return done(error, false)
    }

})

module.exports = strategyJwt 