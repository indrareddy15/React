import React, { useState } from "react";

const WorkoutFilter = () => {
  const [selectedType, setSelectedType] = useState("All");
  const filterTypes = ["All", "Running", "Cycling", "Swimming", "Yoga"]; // Single source of truth for filter types

  const handleFilterChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h3>Filter Workouts</h3>
      <div className="filter-list">
        {filterTypes.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "selected" : ""}
            onClick={() => handleFilterChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkoutFilter;
