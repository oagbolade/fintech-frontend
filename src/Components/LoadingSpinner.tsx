import React from "react";
import "../App.css";

export default function LoadingSpinner() {
  return (
    <div id="overlay">
      <div id="text" className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
