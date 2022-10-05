import React, { useState, useEffect } from "react";
import "./home.scss";
import Projects from "../../projects";
import { useRef } from "react";
const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = Projects.filter(
    (project) => !project.soon && !project.switchArea
  );
  const [myNameArray] = useState([
    "F",
    "a",
    "d",
    "y",
    " ",
    "M",
    "a",
    "g",
    "d",
    "y",
  ]);
  useEffect(() => {
    animateMyName();
  }, []);
  function animateMyName() {
    let myNameLetters = document.querySelectorAll(".my-name-letter");
    let timeOut = 500;
    myNameLetters.forEach((letter) => {
      setTimeout(() => {
        letter.style.transform = "scale(1.4)";
        letter.style.opacity = "1";
      }, timeOut);
      setTimeout(() => {
        letter.style.transform = "scale(1)";
      }, timeOut + 500);
      timeOut += 150;
    });
  }
  useEffect(() => {
    scrollProjects();
  }, [currentProject]);
  function goRight() {
    if (currentProject >= projects.length - 1) {
      setCurrentProject(0);
    } else {
      setCurrentProject((prev) => prev + 1);
    }
    scrollProjects();
  }
  function goLeft() {
    if (currentProject > 0) {
      setCurrentProject((prev) => prev - 1);
    } else {
      setCurrentProject(projects.length - 1);
    }
    scrollProjects();
  }

  function scrollProjects() {
    let projectsCards = document.querySelectorAll(".project");
    projectsCards.forEach((project, index) => {
      if (index === currentProject) {
        project.style.transform = "translateX(-50%)";
        project.style.zIndex = 2;
        project.style.left = "50%";
        project.classList.remove("in-the-side");
      } else if (index === currentProject - 1) {
        project.style.transform =
          "translateX(-50%) perspective(600px) rotateY(40deg) scale(0.7)";
        project.style.left = "calc(50% - 250px)";
        project.style.zIndex = 1;
        project.classList.add("in-the-side");
      } else if (index === currentProject + 1) {
        project.style.transform =
          "translateX(-50%) perspective(600px) rotateY(-40deg) scale(0.7)";
        project.style.left = "calc(50% + 250px)";
        project.style.zIndex = 1;
        project.classList.add("in-the-side");
      } else if (index < currentProject + 2) {
        project.style.transform =
          "translateX(-50%)  perspective(600px) rotateY(0) scale(0.2)";
        project.style.left = "50%";
        project.style.zIndex = 0;
        project.classList.add("in-the-side");
      } else if (index > currentProject - 2) {
        project.style.transform =
          "translateX(-50%)  perspective(600px) rotateY(0) scale(0.2)";
        project.style.left = "50%";
        project.style.zIndex = 0;
        project.classList.add("in-the-side");
      }
    });
    if (currentProject === projects.length - 1) {
      projectsCards[0].style.transform =
        "translateX(-50%) perspective(600px) rotateY(-40deg) scale(0.7)";
      projectsCards[0].style.left = "calc(50% + 250px)";
      projectsCards[0].style.zIndex = 1;
    }
    if (currentProject === 0) {
      projectsCards[projects.length - 1].style.transform =
        "translateX(-50%) perspective(600px) rotateY(40deg) scale(0.7)";
      projectsCards[projects.length - 1].style.left = "calc(50% - 250px)";
      projectsCards[projects.length - 1].style.zIndex = 1;
    }
  }

  return (
    <div className="home">
      <section className="top">
        <div className="my-name">
          {myNameArray.map((letter, index) => {
            if (letter !== " ") {
              return (
                <div className="my-name-letter" key={index}>
                  {letter}
                </div>
              );
            } else {
              return (
                <span className="my-name-letter hidden" key={index}>
                  s
                </span>
              );
            }
          })}
        </div>
        <h4 className="job-title">Junior Front End Developer</h4>
      </section>
      <section className="projects">
        <h1 className="title">PROJECTS</h1>
        <div className="projects-container">
          {projects.map((project, index) => {
            return (
              <div className="project" key={project.id}>
                <div className="top-image">
                  <img src={project.image} alt="" />
                </div>
                <div className="bottom">
                  <div className="text">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  <div className="buttons">
                    <a
                      href={project.projectLink}
                      target="blank"
                      className="project-button"
                    >
                      Demo
                    </a>
                    <a
                      href={project.projectCode}
                      target="blank"
                      className="project-button"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="projects-circles">
          <div onClick={goLeft} className="arrow go-left">
            <i className="fa-solid fa-caret-left"></i>
          </div>
          {projects.map((project, index) => {
            return (
              <div
                onClick={(e) => setCurrentProject(index)}
                className={`circle ${currentProject === index ? "active" : ""}`}
                key={project.id}
              ></div>
            );
          })}
          <div onClick={goRight} className="arrow go-right">
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
