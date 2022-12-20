import React from "react";
import "./project.scss";
export default function Project(props) {
  return (
    <div className={`project ${props.project.soon ? "soon" : ""}`}>
      <div className="top">
        <img src={props.project.image} alt="Project" />
      </div>
      <div className="bottom">
        <h1 className="project-name">{props.project.title}</h1>
        <p className="description">{props.project.description}</p>
        {!props.project.soon && (
          <div className="buttons">
            {props.project.projectLink && (
              <a href={props.project.projectLink} target="blank">
                <i className="fa-solid fa-eye"></i>
                Demo
              </a>
            )}
            {props.project.projectCode && (
              <a href={props.project.projectCode} target="blank">
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
