import { useState, useEffect, useRef } from "react";
import "./style/app.scss";
//  Components
import Table from "./components/table/Table";
import Openingshow from "./components/openingshow/Openingshow";
//  images
import chairImg from "./images/chair.png";
//  Audio
import parperSound from "./audio/paper-hover.mp3";
import chairMove from "./audio/chair-move.mp3";
import chairBack from "./audio/chair-back.mp3";
import Music from "./audio/music.mp3";
function App() {
  const [openingShow, setOpeningShow] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const musicRef = useRef(null);
  const [secretMsg, setSecretMsg] = useState(false);
  const [secretUsed, setSecretUsed] = useState(false);
  const [itemInUse, setItemInUse] = useState(false);
  const PlayMusic = () => {
    musicRef.current.volume = 0.1;
    if (musicOn) {
      musicRef.current.pause();
      setMusicOn(false);
    } else {
      musicRef.current.play();
      setMusicOn(true);
    }
  };
  const PlayAudio = (audio) => {
    const sound = new Audio(audio);
    sound.volume = 0.3;
    sound.play();
  };
  useEffect(() => {
    setTimeout(() => {
      setOpeningShow(false);
    }, 2950);
  }, [openingShow]);

  return (
    <div className="app">
      <div className="office">
        <div className="office-inside">
          <div className="background">
            <div className="background-darkening-floor"></div>
          </div>
          <div
            className="chair"
            onMouseEnter={() => {
              PlayAudio(chairMove);
            }}
            onMouseLeave={() => {
              PlayAudio(chairBack);
            }}
          >
            <img src={chairImg} alt="Failed" draggable="false" />
            {!secretUsed && (
              <div
                className={`secret-msg ${secretMsg && "secret-on"}`}
                onClick={() => {
                  setSecretMsg(true);
                  PlayAudio(parperSound);
                }}
                onMouseLeave={() => {
                  if (secretMsg) {
                    setTimeout(() => {
                      setSecretUsed(true);
                    }, 500);
                  }
                }}
              >
                {secretMsg && "I ♥ U"}
              </div>
            )}
          </div>
          <Table
            itemInUse={itemInUse}
            setItemInUse={setItemInUse}
            PlayMusic={PlayMusic}
            musicOn={musicOn}
            PlayAudio={PlayAudio}
          />
        </div>
      </div>
      <audio ref={musicRef} src={Music} loop></audio>
      <button className="playMusic" onClick={PlayMusic}>
        {musicOn ? (
          <span className="material-symbols-outlined">pause_circle</span>
        ) : (
          <span className="material-symbols-outlined">play_circle</span>
        )}
      </button>
      {openingShow && <Openingshow />}
    </div>
  );
}

export default App;
