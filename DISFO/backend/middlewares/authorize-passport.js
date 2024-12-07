const passport = require("passport");

const JwtStrategy = require("../config/passport")

passport.use(JwtStrategy)

const authorize = passport.authenticate('jwt', { session: false });

module.exports = authorize;