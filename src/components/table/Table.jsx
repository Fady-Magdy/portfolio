import { useContext, useRef, useState, useEffect } from "react";
import { appContext } from "../../contexts/AppContext";
import "./table.scss";
//  Components
import Note from "../note/Note";
import Book from "../book/Book";
import Phone from "../phone/Phone";

import Monitor from "../computer/monitor/Monitor";
import Keyboard from "../computer/keyboard/Keyboard";
import Mouse from "../computer/mouse/Mouse";
import Speakers from "../computer/speakers/Speakers";
//  Videos
import video from "../../videos/video.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
//  Audio
import tableKnock from "../../audio/table-knock.mp3";
import MyNameShow from "../myNameShow/MyNameShow";

// ---------------------------------------------------------------------------
export default function Table() {
  // States
  const { PlayAudio, PlayMusic, musicOn, animateMyName, firstVisit } =
    useContext(appContext);
  const videoRef = useRef();
  const [itemInUse, setItemInUse] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [videoStart, setVideoStart] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoOrWindows, setVideoOrWindows] = useState(true); // to switch between video and windows image
  const videoList = [video, video2, video3];
  // Functions ----------------------------------------------------------------
  function videoPlay() {
    if (videoStart && videoOrWindows) {
      videoOn ? videoRef.current.pause() : videoRef.current.play();
      setVideoOn(!videoOn);
    } else {
      return false;
    }
  }
  const knockTable = () => {
    PlayAudio(tableKnock);
  };
  // Use Effects -------------------------------------------------------------
  useEffect(() => {
    animateMyName(document.querySelectorAll(".my-name-letter"), true);
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
  // JSX ----------------------------------------------------------------------
  return (
    <div className="table">
      <div className="bg-contrast" onClick={knockTable}></div>
      <Monitor
        videoStart={videoStart}
        setVideoStart={setVideoStart}
        firstVisit={firstVisit}
        videoOrWindows={videoOrWindows}
        videoRef={videoRef}
        videoList={videoList}
        currentVideo={currentVideo}
        videoOn={videoOn}
      />
      <Keyboard
        videoStart={videoStart}
        videoOrWindows={videoOrWindows}
        videoList={videoList}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
        videoPlay={videoPlay}
        PlayAudio={PlayAudio}
      />
      <Mouse
        PlayAudio={PlayAudio}
        setVideoOrWindows={setVideoOrWindows}
        videoOrWindows={videoOrWindows}
      />
      <Speakers PlayMusic={PlayMusic} musicOn={musicOn} />
      <Phone itemInUse={itemInUse} setItemInUse={setItemInUse} />
      <Book itemInUse={itemInUse} setItemInUse={setItemInUse} />
      <Note itemInUse={itemInUse} setItemInUse={setItemInUse} />
      <MyNameShow />
    </div>
  );
}
