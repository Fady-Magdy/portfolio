import React, { useContext, useState } from "react";
import { appContext } from "../../contexts/AppContext";
import { Projects } from "../../data/myData";
import "./phone.scss";
// Sound Effects
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
// Components
import Project from "../project/Project";
// --------------------------------------------------------------
export default function Phone(props) {
  // States
  const { PlayAudio } = useContext(appContext);
  const [scaleDown, setScaleDown] = useState(true);
  const [entered, setEntered] = useState(false);
  const [time, setTime] = useState();
  // --------------------------------------------------------------
  // Functions
  function getTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let AmPm = "AM";
    AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    hours = hours === "00" ? "12" : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let timeResult = `${hours}:${minutes} ${AmPm}`;
    setTime(timeResult);
  }
  setInterval(() => {
    getTime();
  }, 1000);
  // when mouse enter Phone
  const hoverPhone = () => {
    if (!entered) PlayAudio(hoverSound);
  };
  // when mouse leave note
  const leavePhone = () => {
    if (entered) {
      setScaleDown(true);
      setEntered(false);
      setTimeout(() => {
        PlayAudio(drop);
      }, 220);
      // prevent other items to scale up
      props.setItemInUse(false);
    }
  };
  const ScaleUpPhone = () => {
    if (!props.itemInUse) {
      // scale up Phone when clicked
      setScaleDown(false);
      if (!entered) PlayAudio(tap);
      setTimeout(() => {
        setEntered(true);
      }, 400);
      // allow other items to scale up
      props.setItemInUse(true);
    }
  };
  // ------------------------------------------------------------
  // JSX
  return (
    <div
      onMouseEnter={hoverPhone}
      onMouseLeave={leavePhone}
      onClick={ScaleUpPhone}
      className={`phone ${scaleDown ? "scaleDown" : "noScaleDown"}`}
    >
      <div className="item-title">Projects</div>
      <div className="phone-left-shine"></div>
      <div className="phone-right-shine"></div>
      <div className="phone-inside">
        <div className="top-curve">
          <div className="camera"></div>
          <div className="microphone"></div>
        </div>
        <div className="background-darkening-items"></div>
        <div className="screen">
          <div className="top">
            <div className="signal-icons">
              <span className="material-symbols-outlined">
                signal_cellular_alt
              </span>
              <span className="material-symbols-outlined">
                signal_cellular_alt
              </span>
              <span className="material-symbols-outlined">wifi</span>
            </div>
            <p className="time">{time}</p>
          </div>
          <div className="screen-content">
            <h1 className="projects-title">PROJECTS</h1>
            {Projects.map((project, index) => {
              return <Project key={index} project={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
