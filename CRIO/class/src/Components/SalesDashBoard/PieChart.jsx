// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  return (
    <div className="chart">
      <h2>Sales Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
