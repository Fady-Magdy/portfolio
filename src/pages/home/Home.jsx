import React, { useState, useEffect, useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import { Projects, Skills, fadyData } from "../../data/myData";
import "./home.scss";
// -------------------------------------------------------------------------
const Home = () => {
  // States
  const { animateMyName, myNameArray, firstVisit } = useContext(appContext);
  const [currentProject, setCurrentProject] = useState(0);
  // -------------------------------------------------------------------------
  // Functions
  function goRight() {
    setCurrentProject((prev) => {
      if (currentProject >= Projects.length - 1) return 0;
      else return prev + 1;
    });
    scrollProjects();
  }
  function goLeft() {
    setCurrentProject((prev) => {
      if (currentProject > 0) return prev - 1;
      else return Projects.length - 1;
    });
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
  // to update project style depending on it's index
  function updateProject(project, rotate, scale, zIndex, left) {
    project.style.transform = `perspective(600px) rotateY(${rotate}) scale(${scale})`;
    project.style.zIndex = zIndex;
    project.style.left = left;
  }
  function scrollProjects() {
    let projectsCards = document.querySelectorAll(".project");
    projectsCards.forEach((project, index) => {
      // if this is current project
      if (index === currentProject) {
        updateProject(project, "0deg", 1, 2, "50%");
        project.classList.remove("in-the-side");
        // if this is project before current one
      } else if (index === currentProject - 1) {
        updateProject(project, "40deg", 0.7, 1, "calc(50% - 250px)");
        project.classList.add("in-the-side");
        // if this is project after current one
      } else if (index === currentProject + 1) {
        updateProject(project, "-40deg", 0.7, 1, "calc(50% + 250px)");
        project.classList.add("in-the-side");
      } else {
        updateProject(project, "0", 0.2, 0, "50%");
        project.classList.add("in-the-side");
      }
    });
    // if this is last project (show first project after it)
    if (currentProject === Projects.length - 1) {
      updateProject(projectsCards[0], "-40deg", 0.7, 1, "calc(50% + 250px)");
    }
    // if this is first project (show last project before it)
    if (currentProject === 0) {
      updateProject(
        projectsCards[Projects.length - 1],
        "40deg",
        0.7,
        1,
        "calc(50% - 250px)"
      );
    }
  }
  // -------------------------------------------------------------------------
  // Use Effects
  useEffect(() => {
    animateMyName(document.querySelectorAll(".my-name-letter"));
    firstVisit.current = false;
  }, []);

  useEffect(() => {
    scrollProjects();
    showSkills();
  }, [currentProject]);
  // -------------------------------------------------------------------------
  // JSX
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
          <h4 className="job-title-home">{fadyData.jobTitle}</h4>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {Skills.map((skill, index) => {
              return (
                <span key={index} className="skill">
                  {skill.icon}
                  <p>{skill.name}</p>
                </span>
              );
            })}
          </div>
        </div>
      </section>
      <section className="projects">
        <h1 className="title">Projects</h1>
        <div className="projects-container">
          {Projects.map((project, index) => {
            return (
              <div className="project" key={index}>
                <div className="top-image">
                  <img src={project.images[0]} alt="Project" />
                </div>
                <div className="bottom">
                  <div className="text">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  {!project.soon && (
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
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="projects-circles">
          <div onClick={goLeft} className="arrow go-left">
            <i className="fa-solid fa-caret-left"></i>
          </div>
          {Projects.map((project, index) => {
            return (
              <div
                onClick={() => setCurrentProject(index)}
                className={`circle ${currentProject === index ? "active" : ""}`}
                key={index}
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
              <a href={`tel:${fadyData.phone}`}>{fadyData.phone}</a>
            </div>
            <div className="detail">
              <h3>
                <i className="fa-solid fa-envelope"></i> <span>Email:</span>
              </h3>
              <a href={`mailto:${fadyData.email}`}>{fadyData.email}</a>
            </div>
            <div className="detail">
              <h3>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <span> Location:</span>
              </h3>
              <span>{fadyData.location}</span>
            </div>
          </div>
          <div className="links">
            <h2 className="title">Links</h2>
            <div className="links-container">
              {fadyData.socialLinks.map((link, index) => {
                return (
                  <div className="link" key={index}>
                    <a href={link.url}>{link.icon}</a>
                    <h3>{link.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
