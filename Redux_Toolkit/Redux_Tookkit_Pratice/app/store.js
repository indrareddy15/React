const configurStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
const breadsReducer = require('../features/Bread/brideSlice');
const userReducer = require('../features/user/userSlice');
// const reduxlogger = require('redux-logger')

// const logger = reduxlogger.createLogger();

const store = configurStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        breads: breadsReducer,
        users: userReducer
    },
    // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
})

module.exports = store