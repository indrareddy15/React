const passport = require('passport');

const JwtStrategy = require("../config/passport.config");

passport.use(JwtStrategy);

const authorizePassport = passport.authenticate('jwt', { session: false });

module.exports = authorizePassport;