import { useContext } from "react";
import { WorkoutContext } from "../Context/WorkoutContex";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error('useWorkoutContext must be used in inside WorkoutContexProvider')
    }
    return context

}

