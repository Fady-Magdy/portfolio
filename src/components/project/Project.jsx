import React from "react";
import "./project.scss";
// ----------------------------------------------------------------
export default function Project({ project }) {
  // JSX
  return (
    <div className={`project ${project.soon ? "soon" : ""}`}>
      <div className="top">
        <img src={project.image} alt="Project" />
      </div>
      <div className="bottom">
        <h1 className="project-name">{project.title}</h1>
        <p className="description">{project.description}</p>
        {!project.soon && (
          <div className="buttons">
            {project.projectLink && (
              <a href={project.projectLink} target="blank">
                <i className="fa-solid fa-eye"></i>
                Demo
              </a>
            )}
            {project.projectCode && (
              <a href={project.projectCode} target="blank">
                <i className="fa-solid fa-code"></i>
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
