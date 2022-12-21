import React from "react";
import "./mouse.scss";
// Images
import mouse from "../../../images/computer/mouse.png";
import mousePad from "../../../images/computer/mouse-pad.png";
// Sound Effects
import mouseClick from "../../../audio/mouse-click.mp3";
// ------------------------------------------------------------
const Mouse = (props) => {
  return (
    <div className="mouse-pad">
      <img src={mousePad} alt="Mouse Pad" draggable="false" />
      <div className="mouse">
        <img src={mouse} alt="Mouse" draggable="false" />
        <div
          className="left-click"
          onClick={() => {
            props.PlayAudio(mouseClick);
            props.setVideoOrWindows(!props.videoOrWindows);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Mouse;
