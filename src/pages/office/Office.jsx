import { useState, useEffect, useContext } from "react";
import { appContext } from "../../context/AppContext";
import "./office.scss";
//  Component
import Table from "../../components/table/Table";
//  images
import chairImg from "../../images/chair.png";
//  Audio
import parperSound from "../../audio/paper-hover.mp3";
import chairMove from "../../audio/chair-move.mp3";
import chairBack from "../../audio/chair-back.mp3";
// ------------------------------------------------------------------------
function Office(props) {
  // States
  const [secretMsg, setSecretMsg] = useState(false);
  const [secretUsed, setSecretUsed] = useState(false);
  const [itemInUse, setItemInUse] = useState(false);
  const { firstVisit } = useContext(appContext);
  const PlayAudio = (audio) => {
    if (props.soundOn) {
      const sound = new Audio(audio);
      sound.volume = 0.3;
      sound.play();
    }
  };
  // ------------------------------------------------------------------------
  // Use States
  useEffect(() => {
    setTimeout(() => {
      firstVisit.current = false;
    }, 8000);
  }, []);
  // ------------------------------------------------------------------------
  // JSX
  return (
    <div className="office">
      <div className={`office-inside ${firstVisit.current ? "zoom" : ""}`}>
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
              {secretMsg && "Life is Good"}
            </div>
          )}
        </div>
        <Table
          itemInUse={itemInUse}
          setItemInUse={setItemInUse}
          PlayMusic={props.PlayMusic}
          musicOn={props.musicOn}
          PlayAudio={PlayAudio}
        />
      </div>
    </div>
  );
}

export default Office;
