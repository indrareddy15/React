// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  return (
    <div className="chart">
      <h2>Top Selling Products</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
