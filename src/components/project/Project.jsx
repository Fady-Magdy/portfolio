import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import "./project.scss";
// ----------------------------------------------------------------
export default function Project({ project }) {
  const { setCurrentProjectImages, setShowProjectImages } =
    useContext(appContext);
  const [currentImage, setCurrentImage] = useState(0);
  const showImages = () => {
    setCurrentProjectImages(project.images);
    setShowProjectImages(true);
  };
  function nextImage() {
    if (currentImage >= project.images.length - 1) return;
    setCurrentImage(currentImage + 1);
  }
  function previousImage() {
    if (currentImage <= 0) return;
    setCurrentImage(currentImage - 1);
  }
  // JSX
  return (
    <div className={`project ${project.soon ? "soon" : ""}`}>
      <div className="top">
        <img
          src={project.images[currentImage]}
          alt="Project"
          onClick={showImages}
        />
        {project.images.length > 1 && (
          <>
            <button className="arrow right" onClick={nextImage}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="arrow left" onClick={previousImage}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </>
        )}
      </div>
      <div className="bottom">
        <h1 className="project-name">{project.title}</h1>
        <p className="description">{project.description}</p>
        {!project.soon && (
          <div className="buttons">
            {project.projectLink && (
              <a href={project.projectLink} target="blank">
                <i className="fa-solid fa-eye"></i>
                Visit
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
