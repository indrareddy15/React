import createStore from "./library/createStore"

const INITIAL_STATE = {
    workouts: []
}

function handler(state) {
    console.log("Old State", state);

    state.workouts.push({
        id: Math.floor(Math.random() * 10),
        type: "Running",
        duration: 30,
        calories: 300,
        date: new Date().toLocaleDateString(),
    })

    console.log("New State", state);
}

const fitnessStore = createStore(INITIAL_STATE, handler);


export default fitnessStore;

/*
Requirements: Onclick of the addtoWorkout button, 
user should be able to modify the state of the createStore

The new item should be added to the workouts array in the state [UI]
*/