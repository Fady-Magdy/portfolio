import React from "react";
import "./project.scss";
export default function Project(props) {
  return (
    <div
      className={`project ${props.soon ? "soon" : ""} ${
        props.withMentor ? "with-mentor" : ""
      }`}
    >
      <div className="top">
        <img src={props.image} alt="Project" />
      </div>
      <div className="bottom">
        <h1 className="project-name">{props.title}</h1>
        <p className="description">{props.description}</p>
        {!props.soon && (
          <div className="buttons">
            {props.projectLink && (
              <a href={props.projectLink} target="blank">
                <i className="fa-solid fa-eye"></i>
                Demo
              </a>
            )}
            {props.projectCode && (
              <a href={props.projectCode} target="blank">
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
