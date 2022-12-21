import "./speakers.scss";
import speaker from "../../../images/computer/speaker.png";
const Speakers = ({ PlayMusic, musicOn }) => {
  return (
    <>
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
    </>
  );
};

export default Speakers;
