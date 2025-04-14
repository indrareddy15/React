import { ADD_WORKOUT } from "./actionConstants";
import createStore from "./library/createStore"

const INITIAL_STATE = {
    workouts: []
}

function reducer(state, action) {
    // push --> changes the array in place
    // reassign --> will re-render
    // we need some level of identification anout
    // what action it that we want to excute
    // based on that do the "relevant" state chnages

    // data is nothing but the action

    // if data is an object  ==> data: {"type": "addWorkout" || "removeWorkout" , "payload": {}}
    // payload is the collection of data that we want to pass to the reducer [important information required to perform the action effect ]

    // Now coming to data which is action
    // action : {"type": "string ", "payload": {}}
    // state.workouts.push(
    //     ...state.workouts, // spread operator to get the old workouts
    //     action // action is nothing but the new workout object
    // )

    switch (action.type) {
        case ADD_WORKOUT:
            state.workouts = [...state.workouts, action.payload];
            break;

        default:
    }

    console.log("New State", action);
}

const fitnessStore = createStore(INITIAL_STATE, reducer);


export default fitnessStore;

/*
Requirements: Onclick of the addtoWorkout button, 
user should be able to modify the state of the createStore

The new item should be added to the workouts array in the state [UI]
*/

/*
as application grows, we need to manage the state of the application and new features are coming
TODO ITEMS (features set)
1.Adding workout
2.Filter workout
3.Set goals
4.Track progress

we have multiple functions but the limitation is that we have only one store create Store will accept only one which means
we need to reduce 

Reducer
Goal of the reducer will take all the handlers and make sure that createStore will recieve only one single handler (function)


once you have an action the job of reducer is to take the action figure out what is right steps to do  [return a new state]
*/


