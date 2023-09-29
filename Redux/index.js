import redux from 'redux';
// import { applyMiddleware } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'


const CAKE_ORDERED = 'CAKE_ORDERED';
const RESTOCK_CAKE = 'RESTOCK_CAKE';
const ICE_CREAM_STOCK = 'ICE_CREAM_STOCK';
const ICE_CREAM_RESTOCK = 'ICE_CREAM_RESTOCK';


function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
}

function restockCake(qty = 1) {
    return {
        type: RESTOCK_CAKE,
        payload: qty
    }
}

function iceCreamStoct(qty = 1) {
    return {
        type: ICE_CREAM_STOCK,
        payload: qty
    }
}

function iceCreamRestock(qty = 1) {
    return {
        type: ICE_CREAM_RESTOCK,
        payload: qty
    }
}


const initialCakeState = {
    noOfcakes: 10,
}

const initialIceCreamState = {
    noOfIceCreams: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                noOfcakes: state.noOfcakes - 1
            }
        case RESTOCK_CAKE:
            return {
                state,
                noOfcakes: state.noOfcakes + 3
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICE_CREAM_STOCK:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            }
        case ICE_CREAM_RESTOCK:
            return {
                state,
                noOfIceCreams: state.noOfIceCreams + 3
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})



const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initialState", store.getState());

const unsubscribe = store.subscribe(
    () => { });

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake());

store.dispatch(iceCreamStoct());
store.dispatch(iceCreamStoct());
store.dispatch(iceCreamStoct());

store.dispatch(iceCreamRestock());

//Helper function for binding the disptaching

// const actions = ActionCreator((orderCake, restockCake), store.dispatch)
// actions.noOfcakes();
// actions.noOfcakes();
// actions.noOfcakes();

// actions.restockCake();

unsubscribe();

