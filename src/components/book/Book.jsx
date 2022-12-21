import { useState, useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import { Skills } from "../../data/myData";
import "./book.scss";
// Sound Effects
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/hoversound.mp3";
import drop from "../../audio/drop.mp3";
// ------------------------------------------------------------
export default function Book() {
  // States
  const { PlayAudio } = useContext(appContext);
  const [scaleDown, setScaleDown] = useState(true);
  const [entered, setEntered] = useState(false);
  // ---------------------------------------------------------
  // Functions
  // when mouse enter book
  const hoverBook = () => {
    if (!entered) PlayAudio(hoverSound);
  };
  // when mouse leave book
  const leaveBook = () => {
    if (entered) {
      setScaleDown(true);
      setEntered(false);
      setTimeout(() => {
        PlayAudio(drop);
      }, 220);
    }
  };
  const ScaleUpBook = () => {
    // scale up book when clicked
    setScaleDown(false);
    if (!entered) PlayAudio(tap);
    setTimeout(() => {
      setEntered(true);
    }, 400);
    // allow other items to scale up
  };
  // ----------------------------------------------------------------
  // JSX
  return (
    <>
      {!scaleDown && (
        <div onClick={leaveBook} className="bg-dark">
          asdasad
        </div>
      )}
      <div
        onMouseEnter={hoverBook}
        onClick={ScaleUpBook}
        className={`book ${scaleDown ? "scaleDown" : "noScaleDown"}`}
      >
        <div className="item-title">Skills</div>
        <div className="book-inside">
          <div className="background-darkening-items"></div>
          <h1>Skills</h1>
          <hr />
          <div className="skills-list">
            {Skills.map((skill, index) => {
              return (
                <span key={index}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
