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
        <h1 className="project-name">
          {props.title}
          {!props.soon && (
            <div className="buttons">
              {props.projectLink && (
                <a href={props.projectLink} target="blank">
                  Project
                </a>
              )}
              {props.projectCode && (
                <a href={props.projectCode} target="blank">
                  Code
                </a>
              )}
            </div>
          )}
        </h1>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
