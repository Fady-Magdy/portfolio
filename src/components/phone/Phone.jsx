import React from "react";
import { useState, useRef } from "react";
import "./phone.scss";
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
import Projects from "../../projects";

import Project from "../project/Project";
export default function Phone(props) {
  const [scale, setScale] = useState(true);
  const [hover, setHover] = useState(true);
  const [entered, setEntered] = useState(false);
  const phone = useRef(null);
  const [time, setTime] = useState();
  const [fullTime, setFullTime] = useState();

  function getTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let AmPm = "AM";
    AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    hours = hours === "00" ? "12" : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let timeResult = `${hours}:${minutes} ${AmPm}`;
    let fullTimeResult = `${hours}:${minutes}:${seconds} ${AmPm}`;
    setTime(timeResult);
    setFullTime(fullTimeResult);
  }
  setInterval(() => {
    getTime();
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
          props.setItemInUse(false);
        }
      }}
      onClick={(e) => {
        if (!props.itemInUse) {
          setScale(false);
          setHover(false);
          if (!entered) {
            props.PlayAudio(tap);
          }
          setTimeout(() => {
            e.target.onMouseEnter = setEntered(true);
          }, 400);
          props.setItemInUse(true);
        }
      }}
      ref={phone}
      className={`phone ${scale ? "scale" : "noScale"} ${hover ? "hover" : ""}`}
    >
      <div className="item-title">Projects</div>
      <div className="phone-left-shine"></div>
      <div className="phone-right-shine"></div>
      <div className="phone-inside">
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
            <p className="time">
              {time}
              <span className="full-time">{fullTime}</span>
            </p>
          </div>
          <div className="screen-content">
            <h1 className="projects">PROJECTS</h1>
            <h1 className="project-section-title">Projects From My Mind</h1>
            {Projects.map((project) => {
              if (project.switchArea) {
                return (
                  <h1
                    key={project.id}
                    className="project-section-title with-mentor-title"
                  >
                    Projects made with Bootcamp
                  </h1>
                );
              } else {
                return (
                  <Project
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    projectLink={project.projectLink}
                    projectCode={project.projectCode}
                    description={project.description}
                    withMentor={project.withMentor}
                    soon={project.soon}
                  />
                );
              }
            })}
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
