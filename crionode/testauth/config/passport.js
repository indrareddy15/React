const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserService = require('../services/user.service');
const userServiceInstance = new UserService();

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 's9+3uLNZiqvcJfQ+rIZiTMZUPdQPc6yclViHM4xCXV/0JicvIunYkWSmSGs='
}

const strategyJwt = new JwtStrategy(options, async (payload, done) => {
    try {
        const user = await userServiceInstance.findById(payload.userId);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        console.log('Error in JWT Strategy', error);
        return done(error, false);
    }
})

module.exports = strategyJwt;