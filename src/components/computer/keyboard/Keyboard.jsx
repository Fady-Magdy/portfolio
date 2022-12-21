import React from "react";
import "./keyboard.scss";
// Images
import KeyboardImage from "../../../images/computer/keyboard.png";
// Sound Effects
import keyboardClick from "../../../audio/keyboard-click.mp3";
// -----------------------------------------------------------------
const Keyboard = (props) => {
  return (
    <div
      className="keyboard"
      onClick={() => {
        props.PlayAudio(keyboardClick);
      }}
    >
      <img src={KeyboardImage} alt="Keyboard" draggable="false" />
      <div className="space" onClick={props.videoPlay}></div>
      <div
        className="arrow left"
        onClick={() => {
          if (props.videoStart && props.videoOrWindows) {
            if (props.currentVideo > 0) {
              props.setCurrentVideo(props.currentVideo - 1);
            }
          }
        }}
      ></div>
      <div
        className="arrow right"
        onClick={() => {
          if (props.videoStart && props.videoOrWindows) {
            if (props.currentVideo < props.videoList.length - 1) {
              props.setCurrentVideo(props.currentVideo + 1);
            }
          }
        }}
      ></div>
    </div>
  );
};

export default Keyboard;
