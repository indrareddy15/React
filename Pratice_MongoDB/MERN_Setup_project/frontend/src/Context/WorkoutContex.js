import { createContext } from "react";

export const WorkoutContext = createContext()

export const WorkoutContextProvider = ({ childeren }) => {

    return (
        <WorkoutContext.Provider>
            {childeren}
        </WorkoutContext.Provider>
    )
}