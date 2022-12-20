import { useState, useRef } from "react";
import "./book.scss";
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
import ReduxImg from "../../images/redux.png";
import JestImg from "../../images/jest.png";
export default function Book(props) {
  const [scale, setScale] = useState(true);
  const [hover, setHover] = useState(true);
  const [entered, setEntered] = useState(false);
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
      className={`book ${scale ? "scale" : "noScale"} ${hover ? "hover" : ""}`}
    >
      <div className="item-title">Skills</div>
      <div className="book-inside">
        <div className="background-darkening-items"></div>
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
            <img src={ReduxImg} alt="redux" />
            <p>Redux/ToolKit</p>
          </span>
          <span>
            <img src={JestImg} alt="" />
            <p>Unit Test</p>
          </span>
          <span>
            <i className="fa-brands fa-bootstrap"></i>
            <p>Bootstrap</p>
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
        <p className="description">I also Learned OOP - Agile/Scrum</p>
      </div>
    </div>
  );
}
