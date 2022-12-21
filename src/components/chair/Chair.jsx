import React, { useState } from "react";
import "./chair.scss";
//  images
import chairImg from "../../images/chair.png";
//  Audio
import parperSound from "../../audio/paper-hover.mp3";
import chairMove from "../../audio/chair-move.mp3";
import chairBack from "../../audio/chair-back.mp3";
import { useContext } from "react";
import { appContext } from "../../contexts/AppContext";
// --------------------------------------------------------------
const Chair = () => {
  // States
  const { PlayAudio } = useContext(appContext);
  const [secretMsg, setSecretMsg] = useState(false);
  const [secretUsed, setSecretUsed] = useState(false);
  // Fnctions -----------------------------------------------------
  const hoverChair = () => {
    PlayAudio(chairMove);
  };
  const unHoverChair = () => {
    PlayAudio(chairBack);
  };
  const openSecretMsg = () => {
    setSecretMsg(true);
    PlayAudio(parperSound);
  };
  const removeSecretMsg = () => {
    if (secretMsg) {
      setTimeout(() => {
        setSecretUsed(true);
      }, 500);
    }
  };
  // JSX ----------------------------------------------------------
  return (
    <div
      className="chair"
      onMouseEnter={hoverChair}
      onMouseLeave={unHoverChair}
    >
      <img src={chairImg} alt="Failed" draggable="false" />
      {!secretUsed && (
        <div
          className={`secret-msg ${secretMsg && "secret-on"}`}
          onClick={openSecretMsg}
          onMouseLeave={removeSecretMsg}
        >
          {secretMsg && "Life is Good"}
        </div>
      )}
    </div>
  );
};

export default Chair;
