/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import WorkoutWrapper from "./components/WorkoutWrapper";
import Goals from "./components/Goals";
import Progress from "./components/Progress";

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [progress, setProgress] = useState({
    distanceCovered: 0,
    weightLost: 0,
  });
  const [goals, setGoals] = useState({
    distance: 100,
    weightLoss: 5,
  });

  // Function to add a workout
  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
    // Logic to update progress based on the new workout
  };

  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/8jbNLyB/premium-photo-1681433383783-661b519b154a.jpg"
          alt="premium-photo-1681433383783-661b519b154a"
          border="0"
          width="100%"
          height={400}
        />
      </div>
      <div className="container">
        <Dashboard progress={progress} goals={goals} />
        <div className="flex-view">
          <Goals goals={goals} setGoals={setGoals} />
          <Progress progress={progress} />
        </div>
        <WorkoutWrapper workouts={workouts} addWorkout={addWorkout} />
      </div>
    </div>
  );
};

export default App;
