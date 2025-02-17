import React, { useState } from "react";
import fitnessStore from "../fitnessStore";

const AddWorkout = ({ addWorkout }) => {
  const [type, setType] = useState("Running");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "20px",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch action to add workout
    // action: an operation that changes the state of the application
    fitnessStore.dispatch()
    const newWorkout = {
      id: Date.now(),
      type,
      duration: parseInt(duration),
      calories: parseInt(calories),
      date: new Date().toISOString().split("T")[0],
    };

    addWorkout(newWorkout);
    setDuration("");
    setCalories("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={formStyle}>
        <div style={inputStyle}>
          <label style={labelStyle}>Type of Workout:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ padding: "10px", width: "100%" }}
          >
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
            <option value="Yoga">Yoga</option>
          </select>
        </div>
        <div style={inputStyle}>
          <label style={labelStyle}>Duration (minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            style={{ padding: "10px", width: "calc(100% - 22px)" }}
          />
        </div>
        <div style={inputStyle}>
          <label style={labelStyle}>Calories Burned:</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
            style={{ padding: "10px", width: "calc(100% - 22px)" }}
          />
        </div>
      </div>
      <button type="submit" style={buttonStyle}>
        Add Workout
      </button>
    </form>
  );
};

export default AddWorkout;
