// immer is the library 
import redux from 'redux';
import { produce } from 'immer';
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;


const initialState = {
    Name: 'Ramco Sysytems',
    address: {
        city: 'San Francisco',
        state: 'CA',
        zip: '94107',
        street: '123 Main St'
    }
}

const STREET_UPDATE = 'STREET_UPDATE';

const updatedStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street,
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })
        default: {
            return state;
        }
    }
}

const store = redux.createStore(reducer);
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));
store.dispatch(updatedStreet('456 Main St'));
unsubscribe();

