function createStore(initialState, reducer) {
    // Setp 1: Initialize the state
    const state = initialState;
    const subscribes = [];
    // Step 2: read the state
    // We apply abstraction here to hide the state from the outside world
    // // and only expose the state through the (getter function )getState function
    function getState() {
        return state;
    }
    // Step 3: Update the state
    function dispatch(action) { // handler is the function that will modify the state
        // type of data may be an object or a function or an array or a string is useful to make the changes in the state
        reducer(state, action); // This is the function that will be called when we want to update the state
        subscribes.forEach(cb => cb()) // This will call the render function
    }

    // Step 4: Re-render with the updated state (subscribe)

    function subscribe(cb) {
        // We will call the render function here
        subscribes.push(cb)
    }


    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore;


// let's not polute the libtrary code , let's keep it clean abstracted and simple

