import React, { useEffect } from "react";
import workoutStore from "../workoutStore";

const WorkoutList = () => {
  const workouts = workoutStore.getState().workouts;
  const [state, setState] = React.useState(workouts);

  useEffect(() => {
    workoutStore.subscribe(() => {
      setState(workoutStore.getState().workouts)
    });
  }, [state])
  return (
    <ul>
      {state.map((workout) => (
        <li key={workout.id}>
          {workout.date} - {workout.type}: {workout.duration} mins,{" "}
          {workout.calories} calories
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
