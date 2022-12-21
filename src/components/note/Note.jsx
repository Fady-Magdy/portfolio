import { useContext, useState } from "react";
import { appContext } from "../../contexts/AppContext";
import { fadyData } from "../../data/myData";
import "./note.scss";
// Sound Effects
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/paper-hover.mp3";
import drop from "../../audio/drop.mp3";
// -------------------------------------------------------
const Note = (props) => {
  // States
  const { PlayAudio } = useContext(appContext);
  const [scaleDown, setScaleDown] = useState(true);
  const [entered, setEntered] = useState(false);
  // -----------------------------------------------------
  // Functions
  // when mouse enter note
  const hoverNote = () => {
    if (!entered) PlayAudio(hoverSound);
  };
  // when mouse leave note
  const leaveNote = () => {
    if (entered) {
      setScaleDown(true);
      setEntered(false);
      setTimeout(() => {
        PlayAudio(drop);
      }, 220);
      // prevent other items to scale up
      props.setItemInUse(false);
    }
  };
  const ScaleUpNote = () => {
    if (!props.itemInUse) {
      // scale up Note when clicked
      setScaleDown(false);
      if (!entered) PlayAudio(tap);
      setTimeout(() => {
        setEntered(true);
      }, 400);
      // allow other items to scale up
      props.setItemInUse(true);
    }
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  // -----------------------------------------------------
  // JSX
  return (
    <div
      onMouseEnter={hoverNote}
      onMouseLeave={leaveNote}
      onClick={ScaleUpNote}
      className={`note ${scaleDown ? "scaleDown" : "noScaleDown"}`}
    >
      <div className="item-title">Contact</div>
      <div className="note-inside">
        <div className="background-darkening-items"></div>
        <div className="note-content">
          <h1 className="title">{fadyData.name}</h1>
          <div className="note-item">
            <h1>Email: </h1>
            <a href={`mailto:${fadyData.email}`}>{fadyData.email}</a>
            <span
              onClick={() => {
                copyText(fadyData.email);
              }}
              className="copy material-symbols-outlined"
            >
              content_copy
            </span>
          </div>
          <div className="note-item">
            <h1>Phone: </h1>
            <a href={`tel:${fadyData.phone}`}>{fadyData.phone}</a>
            <span
              onClick={() => {
                copyText(fadyData.phone);
              }}
              className="copy material-symbols-outlined"
            >
              content_copy
            </span>
          </div>
          <div className="note-item">
            <h1>Location: </h1>
            <p>{fadyData.location}</p>
          </div>
          {/* Resume Buttons */}
          <div className="buttons">
            <span>
              <i className="fa-solid fa-file"></i> Resume:
            </span>
            <a
              href={fadyData.resumeDownloadUrl}
              className="resume-button"
              download
            >
              <i className="fa-solid fa-download"></i>
              Download
            </a>
            <a
              className="resume-button"
              href={fadyData.resumeViewUrl}
              target="blank"
            >
              <i className="fa-solid fa-eye"></i>
              View
            </a>
          </div>
          <hr />
          {/* Social Links */}
          <div className="note-links">
            {fadyData.socialLinks.map((link, index) => {
              return (
                <a key={index} target="blank" href={link.url}>
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;
