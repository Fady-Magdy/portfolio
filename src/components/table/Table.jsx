import { useContext, useRef, useState, useEffect } from "react";
import { appContext } from "../../context/AppContext";
import "./table.scss";
//  Components
import Note from "../note/Note";
import Book from "../book/Book";
import Phone from "../phone/Phone";
//  Images
import Monitor from "../../images/computer/monitor.png";
import Keyboard from "../../images/computer/keyboard.png";
import mouse from "../../images/computer/mouse.png";
import mousePad from "../../images/computer/mouse-pad.png";
import speaker from "../../images/computer/speaker.png";
import windowsImage from "../../images/windows.jpg";
//  Videos
import video from "../../videos/video.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
//  Audio
import tableKnock from "../../audio/table-knock.mp3";
import keyboardClick from "../../audio/keyboard-click.mp3";
import mouseClick from "../../audio/mouse-click.mp3";
// ---------------------------------------------------------------------------
export default function Table({
  PlayAudio,
  PlayMusic,
  musicOn,
  itemInUse,
  setItemInUse,
}) {
  // States
  const videoRef = useRef();
  const [videoOn, setVideoOn] = useState(true);
  const [videoStart, setVideoStart] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoOrWindows, setVideoOrWindows] = useState(true); // to switch between video and windows image
  const { animateMyName, myNameArray, firstVisit } = useContext(appContext);
  const videoList = [video, video2, video3];
  // -------------------------------------------------------------------------
  // Functions
  function videoPlay() {
    if (videoStart && videoOrWindows) {
      videoOn ? videoRef.current.pause() : videoRef.current.play();
      setVideoOn(!videoOn);
    } else {
      return false;
    }
  }
  // -------------------------------------------------------------------------
  // Use Effects
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
  // --------------------------------------------------------------------------
  // JSX
  return (
    <div className="table">
      <div
        className="background-darkening-table"
        onClick={() => {
          PlayAudio(tableKnock);
        }}
      ></div>
      {/* Monitor -------------------------------------------------------- */}
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
          alt="Monitor"
          draggable="false"
          onClick={() => {
            setVideoStart(!videoStart);
          }}
        />
      </div>
      {/* Keyboard -------------------------------------------------------- */}
      <div
        className="keyboard"
        onClick={() => {
          PlayAudio(keyboardClick);
        }}
      >
        <img src={Keyboard} alt="Keyboard" draggable="false" />
        <div className="space" onClick={videoPlay}></div>
        <div
          className="arrow left"
          onClick={() => {
            if (videoStart && videoOrWindows) {
              if (currentVideo > 0) {
                setCurrentVideo(currentVideo - 1);
              }
            }
          }}
        ></div>
        <div
          className="arrow right"
          onClick={() => {
            if (videoStart && videoOrWindows) {
              if (currentVideo < videoList.length - 1) {
                setCurrentVideo(currentVideo + 1);
              }
            }
          }}
        ></div>
      </div>
      {/* Mouse -------------------------------------------------------- */}
      <div className="mouse-pad">
        <img src={mousePad} alt="Mouse Pad" draggable="false" />
        <div className="mouse">
          <img src={mouse} alt="Mouse" draggable="false" />
          <div
            className="left-click"
            onClick={() => {
              PlayAudio(mouseClick);
              setVideoOrWindows(!videoOrWindows);
            }}
          ></div>
        </div>
      </div>
      {/* Speakers -------------------------------------------------------- */}
      <div className="speaker speaker-right" onClick={PlayMusic}>
        <img src={speaker} alt="Speaker Right" draggable="false" />
        <div className={` ${musicOn && "sound-wave"}`}>
          <div className="circle"></div>
          <div className="circle circle2 "></div>
        </div>
      </div>
      <div className="speaker speaker-left" onClick={PlayMusic}>
        <img src={speaker} alt="Speaker Left" draggable="false" />
        <div className={` ${musicOn && "sound-wave"}`}>
          <div className="circle"></div>
          <div className="circle circle2 "></div>
        </div>
      </div>
      {/* Items -------------------------------------------------------- */}
      <Phone
        PlayAudio={PlayAudio}
        itemInUse={itemInUse}
        setItemInUse={setItemInUse}
      />
      <Book
        PlayAudio={PlayAudio}
        itemInUse={itemInUse}
        setItemInUse={setItemInUse}
      />
      <Note
        PlayAudio={PlayAudio}
        itemInUse={itemInUse}
        setItemInUse={setItemInUse}
      />
      {/* My Name Show -------------------------------------------------- */}
      <div className="my-name-out">
        {firstVisit.current &&
          myNameArray.map((letter, index) => {
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
      {firstVisit.current && (
        <h4 className="job-title">Jr Front End Developer</h4>
      )}
    </div>
  );
}
