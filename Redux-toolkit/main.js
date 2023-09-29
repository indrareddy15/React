const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions;
const breadActions = require('./features/Bread/brideSlice').breadActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('initial State', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated State', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.iceCreamOrdered());
// store.dispatch(iceCreamActions.iceCreamRestocked(3));

// store.dispatch(breadActions.removeBread());
// store.dispatch(breadActions.removeBread());
// store.dispatch(breadActions.removeBread());

// store.dispatch(breadActions.addBread(3));


// unsubscribe();