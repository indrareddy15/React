import React from "react";

const Progress = ({ progress }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    width: "100%",
  };

  const titleStyle = {
    color: "#007bff",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  };

  const boldStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Progress</h2>
      <p style={textStyle}>
        <span style={boldStyle}>Distance Covered:</span>{" "}
        {progress.distanceCovered} km
      </p>
      <p style={textStyle}>
        <span style={boldStyle}>Weight Lost: </span>
        {progress.weightLost} kg
      </p>
    </div>
  );
};

export default Progress;
