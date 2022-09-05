import { useRef, useState } from "react";
import React from "react";
import Note from "../note/Note";
import Book from "../book/Book";
import Phone from "../phone/Phone";
import "./table.scss";

//  Img Import
import Monitor from "../../images/monitor.png";
import Keyboard from "../../images/keyboard.png";
import mouse from "../../images/mouse.png";
import mousePad from "../../images/mouse-pad.png";
import windowsImage from "../../images/windows.jpg";
import speaker from "../../images/speaker.png";
import video from "../../videos/video.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
//  Audio Import
import tableKnock from "../../audio/table-knock.mp3";
import keyboardClick from "../../audio/keyboard-click.mp3";
import mouseClick from "../../audio/mouse-click.mp3";
import { useEffect } from "react";

export default function Table(props) {
  const videoRef = useRef();
  const [videoOn, setVideoOn] = useState(true);
  const [videoStart, setVideoStart] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoOrWindows, setVideoOrWindows] = useState(true);
  const videoList = [video, video2, video3];
  function videoPlay() {
    videoOn ? videoRef.current.pause() : videoRef.current.play();
    setVideoOn(!videoOn);
  }
  useEffect(() => {
    setTimeout(() => {
      setVideoStart(true);
    }, 5000);
  }, []);
  return (
    <div className="table">
      <div
        className="background-darkening-table"
        onClick={() => {
          props.PlayAudio(tableKnock);
        }}
      ></div>
      <div className="monitor">
        <div className="monitor-screen">
          <h1>Welcome</h1>
          {videoOrWindows && videoStart && (
            <video
              ref={videoRef}
              src={videoList[currentVideo]}
              loop
              autoPlay={videoOn ? "autoplay" : ""}
              muted
            ></video>
          )}
          {!videoOrWindows && videoStart && (
            <img src={windowsImage} alt="Windows" />
          )}
        </div>
        <img
          className="monitorImage"
          src={Monitor}
          alt=""
          draggable="false"
          onClick={() => {
            setVideoStart(!videoStart);
          }}
        />
      </div>
      <div
        className="keyboard"
        onClick={() => {
          props.PlayAudio(keyboardClick);
        }}
      >
        <img src={Keyboard} alt="" draggable="false" />
        <div className="space" onClick={videoPlay}></div>
        <div
          className="arrow left-arrow"
          onClick={() => {
            if (videoStart && videoOrWindows) {
              if (currentVideo > 0) {
                setVideoStart(false);
                setCurrentVideo(currentVideo - 1);
                setTimeout(() => {
                  setVideoStart(true);
                }, 100);
              }
            }
          }}
        ></div>
        <div
          className="arrow right-arrow"
          onClick={() => {
            if (videoStart && videoOrWindows) {
              if (currentVideo < videoList.length - 1) {
                setVideoStart(false);
                setCurrentVideo(currentVideo + 1);
                setTimeout(() => {
                  setVideoStart(true);
                }, 100);
              }
            }
          }}
        ></div>
      </div>
      <div className="mouse-pad">
        <img src={mousePad} alt="" draggable="false" />
        <div className="mouse" onClick={() => {}}>
          <img src={mouse} alt="" draggable="false" />
          <div
            className="right-click"
            onClick={() => {
              props.PlayAudio(mouseClick);
              setVideoOrWindows(!videoOrWindows);
            }}
          ></div>
        </div>
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
      <Phone
        PlayAudio={props.PlayAudio}
        itemInUse={props.itemInUse}
        setItemInUse={props.setItemInUse}
      />
      <Book
        PlayAudio={props.PlayAudio}
        itemInUse={props.itemInUse}
        setItemInUse={props.setItemInUse}
      />
      <Note
        PlayAudio={props.PlayAudio}
        itemInUse={props.itemInUse}
        setItemInUse={props.setItemInUse}
      />
    </div>
  );
}
