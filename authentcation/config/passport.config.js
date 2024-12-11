const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserService = require("../services/user.service");
const userServiceInstance = new UserService();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
};

const strategyJwt = new JwtStrategy(options, async (payload, done) => {
    try {
        const user = await userServiceInstance.findById(payload.userId);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, null);
    }
});

module.exports = strategyJwt;