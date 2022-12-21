import React from "react";
import "./monitor.scss";
// Images
import windowsImage from "../../../images/windows.jpg";
import MonitorImg from "../../../images/computer/monitor.png";
// -------------------------------------------------------------
const Monitor = (props) => {
  return (
    <div className={`monitor ${props.videoStart ? "on" : ""}`}>
      <div className="monitor-screen">
        {props.firstVisit.current && <h1>Welcome</h1>}
        {props.videoOrWindows && props.videoStart && (
          <video
            ref={props.videoRef}
            src={props.videoList[props.currentVideo]}
            loop
            autoPlay={props.videoOn ? "autoplay" : ""}
            muted
          ></video>
        )}
        {!props.videoOrWindows && props.videoStart && (
          <img src={windowsImage} alt="Windows" />
        )}
      </div>
      <img
        className="monitorImage"
        src={MonitorImg}
        alt="Monitor"
        draggable="false"
        onClick={() => {
          props.setVideoStart(!props.videoStart);
        }}
      />
    </div>
  );
};

export default Monitor;
