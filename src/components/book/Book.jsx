import { useState, useRef } from "react";
import "./book.scss";
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
export default function Book(props) {
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
      className={`book ${scale ? "scale" : "noScale"} ${hover ? "hover" : ""}`}
    >
      <div className="item-title">Skills</div>
      <h1>Skills</h1>
      <hr />
      <div className="skills-icons">
        <span>
          <i className="fa-brands fa-html5"></i>
          <p>HTML</p>
        </span>
        <span>
          <i className="fa-brands fa-css3-alt"></i>
          <p>CSS</p>
        </span>
        <span>
          <i className="fa-brands fa-square-js"></i>
          <p>JavaScript</p>
        </span>
        <span>
          <i className="fa-brands fa-react"></i>
          <p>React</p>
        </span>
        <span>
          <i className="fa-brands fa-sass"></i>
          <p>Sass</p>
        </span>
        <span>
          <i className="fa-brands fa-github"></i>
          <p>GitHub</p>
        </span>
      </div>
    </div>
  );
}
