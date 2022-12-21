import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import "./projectImageView.scss";
const ProjectImageView = () => {
  const { setShowProjectImages, currentProjectImages } = useContext(appContext);
  const [currentImage, setCurrentImage] = useState(0);
  const imgRef = useRef(null);
  const close = () => {
    setShowProjectImages(false);
  };
  let timeOut = 200;
  function nextImage() {
    if (currentProjectImages.length === 1) return;
    setTimeout(() => {
      if (currentImage < currentProjectImages.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }, timeOut);
    let imgStyle = imgRef.current.style;
    imgStyle.translate = "-1500px";
    imgStyle.opacity = "0";
    setTimeout(() => {
      imgStyle.transition = "0s";
      imgStyle.translate = "1500px";
    }, 150);
    setTimeout(() => {
      imgStyle.transition = "0.3s";
      imgStyle.translate = "0";
      imgStyle.opacity = "1";
    }, timeOut);
  }
  function previousImage() {
    if (currentProjectImages.length === 1) return;
    setTimeout(() => {
      if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(currentProjectImages.length - 1);
      }
    }, timeOut);
    let imgStyle = imgRef.current.style;
    imgStyle.translate = "1500px";
    imgStyle.opacity = "0";
    setTimeout(() => {
      imgStyle.transition = "0s";
      imgStyle.translate = "-1500px";
    }, 150);
    setTimeout(() => {
      imgStyle.transition = "0.3s";
      imgStyle.translate = "0";
      imgStyle.opacity = "1";
    }, timeOut);
  }
  return (
    <>
      <div onClick={close} className="dark-background"></div>
      <div className="project-image-view">
        <img
          ref={imgRef}
          src={currentProjectImages[currentImage]}
          alt="project"
        />
        <button onClick={close} className="close">
          x
        </button>
        <button className="arrow right" onClick={nextImage}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button className="arrow left" onClick={previousImage}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </>
  );
};

export default ProjectImageView;
