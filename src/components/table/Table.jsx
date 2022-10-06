import { useContext, useRef, useState } from "react";
import "./table.scss";
//  Components Import
import Note from "../note/Note";
import Book from "../book/Book";
import Phone from "../phone/Phone";
//  Img Import
import Monitor from "../../images/computer/monitor.png";
import Keyboard from "../../images/computer/keyboard.png";
import mouse from "../../images/computer/mouse.png";
import mousePad from "../../images/computer/mouse-pad.png";
import speaker from "../../images/computer/speaker.png";
import windowsImage from "../../images/windows.jpg";
//  Videos Import
import video from "../../videos/video.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
//  Audio Import
import tableKnock from "../../audio/table-knock.mp3";
import keyboardClick from "../../audio/keyboard-click.mp3";
import mouseClick from "../../audio/mouse-click.mp3";
import { useEffect } from "react";
import { appContext } from "../../context/AppContext";

export default function Table(props) {
  const videoRef = useRef();
  const [videoOn, setVideoOn] = useState(true);
  const [videoStart, setVideoStart] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoOrWindows, setVideoOrWindows] = useState(true);
  const { animateMyName, myNameArray , firstVisit } = useContext(appContext);
  const videoList = [video, video2, video3];
  function videoPlay() {
    if (videoStart && videoOrWindows) {
      videoOn ? videoRef.current.pause() : videoRef.current.play();
      setVideoOn(!videoOn);
    } else {
      return false;
    }
  }
  useEffect(() => {
    animateMyName(document.querySelectorAll(".my-name-letter"), true);
  }, []);
  useEffect(() => {
    if (firstVisit.current) {
      setTimeout(() => {
        setVideoStart(true);
      }, 7000);
    } else {
      setTimeout(() => {
        setVideoStart(true);
      }, 100);
    }

  }, []);
  return (
    <div className="table">
      <div
        className="background-darkening-table"
        onClick={() => {
          props.PlayAudio(tableKnock);
        }}
      ></div>
      <div className={`monitor ${videoStart ? "on" : ""}`}>
        <div className="monitor-screen">
          {firstVisit.current && <h1>Welcome</h1>}
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
      <div className="my-name-out">
        {firstVisit.current && myNameArray.map((letter, index) => {
          if (letter !== " ") {
            return (
              <div className="my-name-letter" key={index}>
                {letter}
              </div>
            );
          } else {
            return (
              <span className="my-name-letter hidden" key={index}>
                s
              </span>
            );
          }
        })}
      </div>
      { firstVisit.current && <h4 className="job-title">Jr Front End Developer</h4> }
    </div>
  );
}
