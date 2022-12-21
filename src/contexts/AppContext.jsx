import { createContext, useRef, useState } from "react";
import { spliceMyName } from "../data/myData";
export const appContext = createContext();

export default function AppContextProvider(props) {
  const firstVisit = useRef(true);
  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const musicRef = useRef(null);
  const [showProjectImages, setShowProjectImages] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [myNameArray] = useState(spliceMyName);
  function animateMyName(list, remove) {
    let myNameLetters = list;
    let timeOut = 1700;
    myNameLetters.forEach((letter) => {
      setTimeout(() => {
        letter.style.transform = "scale(1.4)";
        letter.style.opacity = "1";
      }, timeOut);
      setTimeout(() => {
        letter.style.transform = "scale(1)";
      }, timeOut + 500);
      timeOut += 150;
    });
    if (remove) {
      myNameLetters.forEach((letter) => {
        setTimeout(() => {
          letter.style.opacity = "0";
        }, 3000 + timeOut);
        setTimeout(() => {
          letter.style.display = "none";
        }, 4000 + timeOut);
        timeOut += 50;
      });
    }
  }
  const PlayMusic = () => {
    musicRef.current.volume = 0.3;
    if (musicOn) {
      musicRef.current.pause();
      setMusicOn(false);
    } else {
      musicRef.current.play();
      setMusicOn(true);
    }
  };
  const PlayAudio = (audio) => {
    if (soundOn) {
      const sound = new Audio(audio);
      sound.volume = 0.3;
      sound.play();
    }
  };
  const value = {
    animateMyName,
    myNameArray,
    firstVisit,
    musicOn,
    setMusicOn,
    soundOn,
    setSoundOn,
    musicRef,
    PlayMusic,
    PlayAudio,
    showProjectImages,
    setShowProjectImages,
    currentProjectImages,
    setCurrentProjectImages,
  };
  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
}
