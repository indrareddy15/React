const passport = require('passport');

const strategyJwt = require('../config/passport');

passport.use(strategyJwt)


const authorize = passport.authenticate('jwt', { session: false });


module.exports =  authorize ;