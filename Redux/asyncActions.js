import axios from 'axios';
import redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const initialState = {
    loading: false,
    Data: [],
    error: ""
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUserRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUserSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUserFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

    }

}


const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequested())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUserSucceeded(users))
        }).catch((error) => {
            //Resqueted with an error message
            dispatch(fetchUserFailed(error.massage))
        });
    }

}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => { console.log(store.getState()) });

store.dispatch(fetchUser())