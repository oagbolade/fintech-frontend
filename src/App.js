import React, { useState } from "react";
import "./App.css";
import ApexChart from "./Components/ApexChart";
import avatar from "./images/avatar.png";
import gold from "./images/gold.jpeg";

function App() {
  return (
    <div>
      <nav className="text-white container- d-flex justify-content-between px-5">
        <div className="mt-4 d-flex">
          <i className="mt-2 ml-3 fa fa-globe-asia"></i>
          <h3>FinTech</h3>
        </div>
        <div className="mt-4">
          <i className="fa fa-bell mr-4"></i>
          <img className="pl-4 avatar" src={avatar} alt="loading" />
        </div>
      </nav>{" "}
      <div className="chart-container mx-auto mt-5-">
        <div className="px-5 chart-title">
          <h4>Portfolio</h4>
          <button className="mt-2 px-4 py-1 fintech-button chart-button">
            Settings
          </button>
        </div>
        <ApexChart />
      </div>
      <div class="row fintech-table">
        <div className="col-md-4 col-sm-12 p-2">
          <div className="p-4 each-row d-flex justify-content-between">
            <h5 className="mt-2">Stocks</h5>
            <div className="">
              <button className="mt-2 px-4 py-1 fintech-button">Buy New</button>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
        </div>

        <div className="mx-5 col-md-3 col-sm-12 p-2">
          <div className="p-4 each-row d-flex justify-content-between">
            <h5 className="mt-2">Options</h5>
            <div className="">
              <button className="mt-2 px-4 py-1 fintech-button">Buy New</button>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
          <div className="p-4 each-row d-flex justify-content-between">
            <div className="mt-2">Jackson PLC</div>
            <div className="">
              <button className="px-2 currency-button">£103</button>
              <span className="percent-text">2.4%</span>
            </div>
          </div>
        </div>

        <div className="ml-2 col-md-4 col-sm-12 p-2">
          <h5 className="py-4">Tips</h5>
          <div className="tip-container p-5">
            <div className="d-flex justify-content-between">
              <h6>Gold is up 20%</h6>
              <img className="tip-image" src={gold} alt="loading" />
            </div>
            <div className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              dapibus sodales justo, eget blandit eros suscipit nec. Integer
              pharetra purus non aliquet convallis. Proin dui ex, facilisis nec
              interdum non, efficitur a orci. Fusce quis molestie risus, vitae
              mollis dolor. Suspendisse consequat efficitur tempus. Suspendisse
              potenti.
            </div>
          </div>
          <div className="mx-5 mt-5 d-flex broken-lines">
            <div></div>
            <div></div>
            <div></div>
            <div style={{ backgroundColor: "#7180bf" }}></div>
            <span className="mx-5">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
