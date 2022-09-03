import React from "react";
import { useState, useRef } from "react";
import "./phone.scss";
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
import project1 from "../../images/project-phone-chatting.png";
import project2 from "../../images/project-notes.png";
import project3 from "../../images/project-soon.png";
import Project from "../project/Project";
export default function Phone(props) {
  const [scale, setScale] = useState(true);
  const [hover, setHover] = useState(true);
  const [entered, setEntered] = useState(false);
  const phone = useRef(null);
  const [time, setTime] = useState();

  function changeTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let AmPm = "AM";
    AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    hours = hours === "00" ? "12" : hours
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${AmPm}`;
  }
  setInterval(() => {
    setTime(changeTime());
  }, 1000);

  return (
    <div
      onMouseEnter={() => {
        if (!entered) {
          props.PlayAudio(hoverSound);
        }
      }}
      onMouseLeave={() => {
        if (entered) {
          setScale(true);
          setHover(true);
          setEntered(false);
          setTimeout(() => {
            props.PlayAudio(drop);
          }, 220);
        }
      }}
      onClick={(e) => {
        setScale(false);
        setHover(false);
        if (!entered) {
          props.PlayAudio(tap);
        }
        setTimeout(() => {
          e.target.onMouseEnter = setEntered(true);
        }, 400);
      }}
      ref={phone}
      className={`phone ${scale ? "scale" : "noScale"} ${hover ? "hover" : ""}`}
    >
      <div className="item-title">Projects</div>
      <div className="phone-left-shine"></div>
      <div className="phone-right-shine"></div>
      <div className="phone-inside">
        <div className="background-darkening-phone"></div>
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
            <h1 className="projects">PROJECTS</h1>
            <Project
              image={project1}
              title="Phone Chatting"
              projectLink="https://fady-magdy.github.io/Phone-Chatting-v2/"
              projectCode="https://github.com/Fady-Magdy/Phone-Chatting-v2"
              description="A Phone Chatting app i created using Vanilla JavaScript ( First Published )"
            />
            <Project
              image={project2}
              title="Notes"
              projectLink="https://fady-magdy.github.io/Notes/"
              projectCode="https://github.com/Fady-Magdy/Notes"
              description="This project is not ready but i'm working on it"
            />
            <Project
              image={project3}
              title="New Project Soon"
              projectLink={false}
              projectCode={false}
              description="A new project is on the way, I'm trying to do my best"
              soon="true"
            />
          </div>
        </div>
        <div className="top-curve">
          <div className="camera"></div>
          <div className="microphone"></div>
        </div>
      </div>
    </div>
  );
}
