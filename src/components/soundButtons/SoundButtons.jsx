import "./soundButtons.scss";
const SoundButtons = ({ setSoundOn, soundOn, PlayMusic, musicOn }) => {
  return (
    <div className="sound-buttons">
      <button className="playSound" onClick={() => setSoundOn(!soundOn)}>
        <i className={`fa-solid fa-volume-${soundOn ? "high" : "xmark"}`}></i>
      </button>
      <button className="playMusic" onClick={PlayMusic}>
        <i className={`fa-solid fa-${musicOn ? "pause" : "play"}`}></i>
      </button>
    </div>
  );
};

export default SoundButtons;
