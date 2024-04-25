// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  return (
    <div className="chart">
      <h2>Revenue Trend Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
