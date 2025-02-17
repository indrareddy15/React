import React, { useEffect } from "react";
import fitnessStore from "../fitnessStore";

const WorkoutList = () => {
  const workouts = fitnessStore.getState().workouts;
  const [state, setState] = React.useState(workouts);

  useEffect(() => {
    fitnessStore.subscribe(() => {
      setState(fitnessStore.getState().workouts)
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
