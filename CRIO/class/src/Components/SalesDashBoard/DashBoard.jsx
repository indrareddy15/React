/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// App.js
import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import MapChart from "./MapChart";
import "./userApp.css";

const UserApp = () => {
  const [salesData, setSalesData] = useState({});
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("monthly");
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const fetchSalesData = async () => {
    try {
      const response = await fetch(
        `apiEndpoint/salesData?timePeriod=${selectedTimePeriod}`
      );
      const data = await response.json();
      setSalesData(data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, [selectedTimePeriod, selectedDateRange]);

  return (
    <div className="userApp">
      <LineChart data={salesData.revenueTrend} />
      <BarChart data={salesData.topSellingProducts} />
      <PieChart data={salesData.salesDistribution} />
      <MapChart data={salesData.salesByRegion} />
    </div>
  );
};

export default UserApp;
