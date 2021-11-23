import React, { useState } from "react";
import "./App.css";
import avatar from "./images/avatar.png";
// @ts-ignore
import Chart from "react-apexcharts";

function App() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div>
      <nav className="text-white container d-flex justify-content-between px-5">
        <div className="mt-4 d-flex">
          <i className="mt-2 ml-3 fa fa-globe-asia"></i>
          <h3>FinTech</h3>
        </div>
        <div className="mt-4">
          <i className="fa fa-bell mr-4"></i>
          <img className="pl-4 avatar" src={avatar} alt="loading" />
        </div>
      </nav>
      <div>
        <div id="chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            // type="line"
            height={350}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
