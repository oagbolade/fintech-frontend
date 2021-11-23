import React, { useState } from "react";
import "./App.css";
import avatar from "./images/avatar.png";
import Chart from "react-apexcharts";

function App() {
  // window.location.reload(true);
  const [options, setOptions] = useState({
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
      text: "Portfolio",
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
  });
  const [series, setSeries] = useState([
    {
      name: "Options",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ]);

  return (
    <div>
      {/* <nav className="text-white container d-flex justify-content-between px-5">
        <div className="mt-4 d-flex">
          <i className="mt-2 ml-3 fa fa-globe-asia"></i>
          <h3>FinTech</h3>
        </div>
        <div className="mt-4">
          <i className="fa fa-bell mr-4"></i>
          <img className="pl-4 avatar" src={avatar} alt="loading" />
        </div>
      </nav> */}
      {/* <div> */}
      {options !== null ? (
        <div id="chart">
          <Chart options={options} series={series} type="bar" height={350} />
        </div>
      ) : (
        "Not showing"
      )}
      <div id="chart">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
      {/* </div> */}
      <div></div>
    </div>
  );
}

export default App;
