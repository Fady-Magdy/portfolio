import React from "react";
import { useState, useRef } from "react";
import "./phone.scss";
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
import projectPhoneChatting from "../../images/projects/phone-chatting.png";
import projectSoon from "../../images/projects/soon.png";
import projectEcommerce from "../../images/projects/ecommerce-computer-shop.png";
import projectAdminDashboard from "../../images/projects/admin-dashboard.png";
import projectMoviesSearch from "../../images/projects/movies-search.png";
import projectFrontendBootcamp from "../../images/projects/frontend-bootcamp.png";
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
            <Project
              image={projectEcommerce}
              title="Ecommerce"
              projectLink="https://fady-magdy.github.io/ecommerce-Computer-Shop/"
              projectCode="https://github.com/Fady-Magdy/ecommerce-Computer-Shop/tree/master"
              description="A Computer Shop Advanced Ecommerce App i made using React - React Router - Sass  - Context API ( Still Developing )"
            />
            <Project
              image={projectPhoneChatting}
              title="Phone Chatting"
              projectLink="https://fady-magdy.github.io/Phone-Chatting-v2/"
              projectCode="https://github.com/Fady-Magdy/Phone-Chatting-v2"
              description="A Phone Chatting app i created using Vanilla JavaScript ( First Published )"
            />
            <Project
              image={projectSoon}
              title="Simple Music Production App"
              projectLink={false}
              projectCode={false}
              description="A new project is on the way, I'm trying to do my best"
              soon="true"
            />
            <h1 className="project-section-title with-mentor-title">
              Projects Made with mentor (YouTube)
            </h1>
            <Project
              image={projectAdminDashboard}
              title="Admin Dashboard"
              projectLink="https://fady-magdy.github.io/admin-dashboard/"
              projectCode="https://github.com/Fady-Magdy/admin-dashboard/tree/master"
              description="Tech Used: React - Sass - React Router"
              withMentor="true"
            />
            <Project
              image={projectMoviesSearch}
              title="Movies Search"
              projectLink="https://fady-magdy.github.io/movies-search/"
              projectCode="https://github.com/Fady-Magdy/movies-search/tree/master"
              description="Tech Used: React - API "
              withMentor="true"
            />
            <Project
              image={projectFrontendBootcamp}
              title="Frontend Bootcamp"
              projectLink="https://fady-magdy.github.io/frontend-bootcamp/"
              projectCode="https://github.com/Fady-Magdy/frontend-bootcamp"
              description="Tech Used: Bootstrap - HTML only"
              withMentor="true"
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
