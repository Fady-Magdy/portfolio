import React from "react";
import "./openingshow.scss";
export default function Openingshow() {
  return (
    <div className="openingshow">
      <div className="doors">
        <div className="left"></div>
        <div className="right"></div>
        <div className="top-bottom">
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
}
