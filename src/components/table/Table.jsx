import React from "react";
import Note from "../note/Note";
import Phone from "../phone/Phone";
import "./table.scss";

//  Img Import
import Monitor from "../../images/monitor.png";
import Keyboard from "../../images/keyboard.png";
import mouse from "../../images/mouse.png";
import speaker from "../../images/speaker.png";
//  Audio Import
import tableKnock from "../../audio/table-knock.mp3";
import keyboardClick from "../../audio/keyboard-click.mp3";
import mouseClick from "../../audio/mouse-click.mp3";

export default function Table(props) {
  return (
    <div className="table">
      <div
        className="background-darkening-table"
        onClick={() => {
          props.PlayAudio(tableKnock);
        }}
      ></div>
      <div className="monitor">
        <img src={Monitor} alt="" draggable="false" />
        <div className="monitor-screen">Fady</div>
      </div>
      <div
        className="keyboard"
        onClick={() => {
          props.PlayAudio(keyboardClick);
        }}
      >
        <img src={Keyboard} alt="" draggable="false" />
      </div>
      <div
        className="mouse"
        onClick={() => {
          props.PlayAudio(mouseClick);
        }}
      >
        <img src={mouse} alt="" draggable="false" />
      </div>
      <div className="speaker speaker-right" onClick={props.PlayMusic}>
        <img src={speaker} alt="" draggable="false" />
        <div className={` ${props.musicOn && "sound-wave"}`}>
          <div className="circle"></div>
          <div className="circle circle2 "></div>
        </div>
      </div>
      <div className="speaker speaker-left" onClick={props.PlayMusic}>
        <img src={speaker} alt="" draggable="false" />
        <div className={` ${props.musicOn && "sound-wave"}`}>
          <div className="circle"></div>
          <div className="circle circle2 "></div>
        </div>
      </div>
      <Phone PlayAudio={props.PlayAudio} />
      <Note PlayAudio={props.PlayAudio} />
    </div>
  );
}
