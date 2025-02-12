import React from "react";

const Dashboard = ({ progress, goals }) => {
  // Calculate progress percentages
  const distanceProgress = (
    (progress.distanceCovered / (goals.distance || 1)) *
    100
  ).toFixed(2);
  const weightLossProgress = (
    (progress.weightLost / (goals.weightLoss || 1)) *
    100
  ).toFixed(2);

  return (
    <div className="section">
      <h2 className="title">Fitness Tracker</h2>
      <section>
        <h2>Progress Towards Goals</h2>
        <div className="flex-view goals">
          <div>
            <p>
              <b>Distance Goal:</b> <span>{goals.distance}</span> km
            </p>
            <p>
              <b>Distance Covered:</b> {progress.distanceCovered} km
            </p>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${distanceProgress}%` }}
              ></div>
            </div>
            <p className="progress-info">
              You've achieved {distanceProgress}% of your distance goal.
            </p>
          </div>
          <div>
            <p>
              <b>Weight Loss Goal:</b> <span>{goals.weightLoss}</span> kg
            </p>
            <p>
              <b>Weight Lost:</b> {progress.weightLost} kg
            </p>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${weightLossProgress}%` }}
              ></div>
            </div>
            <p className="progress-info">
              You've achieved {weightLossProgress}% of your weight loss goal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
