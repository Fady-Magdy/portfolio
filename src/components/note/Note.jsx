import { useState, useRef } from "react";
import "./note.scss";
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/paper-hover.mp3";
import drop from "../../audio/drop.mp3";
export default function Note(props) {
  const [scale, setScale] = useState(true);
  const [hover, setHover] = useState(true);
  const [entered, setEntered] = useState(false);
  const phone = useRef(null);

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
      className={`note ${scale ? "scale" : "noScale"} ${hover ? "hover" : ""}`}
    >
      <div className="item-title">Contact</div>
      <div className="note-inside">
        <div className="background-darkening-items"></div>
        <div className="note-content">
          <h1 className="title">Fady Magdy</h1>
          <div className="note-item">
            <h1>Email: </h1>
            <a href="mailto:fady.programmer@gmail.com">
              fady.programmer@gmail.com
            </a>
            <span
              onClick={() => {
                navigator.clipboard.writeText("fady.programmer@gmail.com");
              }}
              className="copy material-symbols-outlined"
            >
              content_copy
            </span>
          </div>
          <div className="note-item">
            <h1>Phone: </h1>
            <a href="tel:+201067530598">+20 106 753 0598</a>
            <span
              onClick={() => {
                navigator.clipboard.writeText("+201067530598");
              }}
              className="copy material-symbols-outlined"
            >
              content_copy
            </span>
          </div>
          <div className="note-item">
            <h1>Location: </h1>
            <p>Asyut, Egypt (Willing to Relocate)</p>
          </div>
          <div className="buttons">
            <span>
              <i className="fa-solid fa-file"></i> Resume:
            </span>
            <a
              href="https://drive.google.com/uc?export=download&id=1G3UMTtu6aut3updPAcNM1hR-DBZ7pCdW"
              className="resume-button"
              download
            >
              <i className="fa-solid fa-download"></i>
              Download
            </a>
            <a
              className="resume-button"
              href="https://drive.google.com/file/d/1G3UMTtu6aut3updPAcNM1hR-DBZ7pCdW/view?usp=sharing"
              target="blank"
            >
              <i className="fa-solid fa-eye"></i>
              View
            </a>
          </div>
          <hr />

          <div className="note-links">
            <a target="blank" href="https://www.linkedin.com/in/fady-magdy-dev">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target="blank" href="https://github.com/Fady-Magdy">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a target="blank" href="https://www.facebook.com/fady.magdy.dev">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
