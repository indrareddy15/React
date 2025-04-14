// Problem statement
// Action Creater ==> this function returns an action object

import { ADD_WORKOUT } from "./actionConstants";

// we have function that will return an action object
export function addWorkout(data) {
    return {
        type: ADD_WORKOUT,
        payload: data
    }
}




