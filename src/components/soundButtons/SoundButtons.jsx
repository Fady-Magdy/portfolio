import { useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import Music from "../../audio/music.mp3";
import "./soundButtons.scss";

const SoundButtons = () => {
  const { setSoundOn, soundOn, PlayMusic, musicOn, musicRef } =
    useContext(appContext);

  return (
    <div className="sound-buttons">
      <button className="playSound" onClick={() => setSoundOn(!soundOn)}>
        <i className={`fa-solid fa-volume-${soundOn ? "high" : "xmark"}`}></i>
      </button>
      <button className="playMusic" onClick={PlayMusic}>
        <i className={`fa-solid fa-${musicOn ? "pause" : "play"}`}></i>
      </button>
      <audio ref={musicRef} src={Music} loop></audio>
    </div>
  );
};

export default SoundButtons;
