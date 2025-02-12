import React from "react";

const Goals = ({ goals }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  };

  const handleGoalChange = () => {
    const distance = document.querySelector('input[name="distance"]').value;
    const weightLoss = document.querySelector('input[name="weightLoss"]').value;
  };

  return (
    <div style={containerStyle}>
      <h2>Set Your Goals</h2>
      <div style={formStyle}>
        <div>
          <label style={labelStyle}>Distance Goal (km):</label>
          <input
            type="number"
            value={goals.distance}
            name="distance"
            onChange={handleGoalChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Weight Loss Goal (kg):</label>
          <input
            type="number"
            value={goals.weightLoss}
            name="weightLoss"
            onChange={handleGoalChange}
            style={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
