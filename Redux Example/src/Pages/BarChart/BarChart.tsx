import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = (clicked: any) => {
  const orders = useSelector((state: any) => state.allOrders);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Orders Bar Chart",
      },
    },
  };

  const [prev,setPrev]=useState<string>('')
  const [next,setNext]=useState<string>('')

  useEffect(() => { //component did update
    let d = new Date(clicked.clicked);
    d.setDate(d.getDate() - 1);
    setPrev(d.toISOString().split("T")[0]);
    let s = new Date(clicked.clicked);
    s.setDate(s.getDate() + 1);
    setNext(s.toISOString().split("T")[0]);
  }, [clicked]);

  const labels = [prev, clicked.clicked, next];
  const data = {
    labels,
    datasets: [
      {
        label: "Orders Count Per Day",
        data: labels.map((each:string) =>
          orders && orders.itemsMap.size > 0 && orders.itemsMap.get(each)!==undefined ? orders.itemsMap.get(each).length : 0
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
