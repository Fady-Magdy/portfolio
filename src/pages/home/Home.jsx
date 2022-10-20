import React, { useState, useEffect, useContext } from "react";
import "./home.scss";
import Projects from "../../projects";
import { appContext } from "../../context/AppContext";
import ReduxImg from "../../images/redux.png";
import JestImg from "../../images/jest.png";
const Home = () => {
  const { animateMyName, myNameArray, firstVisit } = useContext(appContext);
  const [currentProject, setCurrentProject] = useState(0);
  const projects = Projects.filter(
    (project) => !project.soon && !project.switchArea
  );
  useEffect(() => {
    animateMyName(document.querySelectorAll(".my-name-letter"));
    firstVisit.current = false;
  }, []);

  useEffect(() => {
    scrollProjects();
    showSkills();
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
  function showSkills() {
    let skills = document.querySelectorAll(".skill");
    let time = 4500;
    skills.forEach((skill) => {
      setTimeout(() => {
        skill.style.transform = "scale(1) translateX(0) rotateY(0)";
      }, time);
      time += 100;
    });
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
      <section className="first-section">
        <div className="top">
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
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <span className="skill">
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </span>
            <span className="skill">
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </span>
            <span className="skill">
              <i className="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </span>
            <span className="skill">
              <i className="fa-brands fa-react"></i>
              <p>React</p>
            </span>
            <span className="skill">
              <img src={ReduxImg} alt="redux" />
              <p>Redux/ToolKit</p>
            </span>
            <span className="skill">
              <img src={JestImg} alt="" />
              <p>Unit Test</p>
            </span>
            <span className="skill">
              <i className="fa-brands fa-bootstrap"></i>
              <p>Bootstrap</p>
            </span>
            <span className="skill">
              <i className="fa-brands fa-sass"></i>
              <p>Sass</p>
            </span>
            <span className="skill">
              <i className="fa-brands fa-github"></i>
              <p>GitHub</p>
            </span>
          </div>
        </div>
      </section>
      <section className="projects">
        <h1 className="title">Projects</h1>
        <div className="projects-container">
          {projects.map((project) => {
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
      <section className="contact">
        <h1 className="title">Contact</h1>
        <div className="container">
          <div className="contact-details">
            <div className="detail">
              <h3>
                <i className="fa-solid fa-phone"></i> <span>Phone:</span>
              </h3>
              <a href="tel:+201067530598">+20 106 753 0598</a>
            </div>
            <div className="detail">
              <h3>
                <i className="fa-solid fa-envelope"></i> <span>Email:</span>
              </h3>
              <a href="mailto:fady.programmer@gmail.com">
                fady.programmer@gmail.com
              </a>
            </div>
            <div className="detail">
              <h3>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <span> Location:</span>
              </h3>
              <span>Asyut, Egypt (Willing to relocate)</span>
            </div>
          </div>
          <div className="links">
            <h2 className="title">Links</h2>
            <div className="links-container">
              <div className="link">
                <a href="https://www.linkedin.com/in/fady-magdy-dev/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <h3>LinkedIn</h3>
              </div>
              <div className="link">
                <a href="https://github.com/Fady-Magdy">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <h3>Github</h3>
              </div>
              <div className="link">
                <a href="https://www.facebook.com/fady.magdy.dev/">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <h3>Facebook</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
