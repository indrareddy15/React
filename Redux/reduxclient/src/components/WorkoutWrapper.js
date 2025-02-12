import React from "react";
import WorkoutList from "./WorkoutList";
import AddWorkout from "./AddWorkout";
import WorkoutFilter from "./WorkoutFilter";

const WorkoutWrapper = ({ workouts, addWorkout }) => {
  return (
    <div>
      <h2>Workouts</h2>
      <WorkoutFilter />
      <WorkoutList workouts={workouts} />
      <AddWorkout addWorkout={addWorkout} />
    </div>
  );
};

export default WorkoutWrapper;
