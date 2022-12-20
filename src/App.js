import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import "./style/app.scss";
import "./style/dark-mode.scss";
// Music
import Music from "./audio/music.mp3";
// Pages
import Home from "./pages/home/Home";
import Office from "./pages/office/Office";
// Components
import Openingshow from "./components/openingshow/Openingshow";
import SoundButtons from "./components/soundButtons/SoundButtons";
import Menu from "./components/menu/Menu";
// -------------------------------------------------------------------
const App = () => {
  // States
  const [openingShow, setOpeningShow] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const musicRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  // -----------------------------------------------------------------
  // Functions
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
  // -----------------------------------------------------------------
  // Use Effects
  useEffect(() => {
    setTimeout(() => {
      setOpeningShow(false);
    }, 2950);
  }, [openingShow]);
  // -------------------------------------------------------------------
  // JSX
  return (
    <BrowserRouter basename="/portfolio">
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <Office
                PlayMusic={PlayMusic}
                musicOn={musicOn}
                soundOn={soundOn}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
        {openingShow && <Openingshow />}
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <SoundButtons
          setSoundOn={setSoundOn}
          soundOn={soundOn}
          PlayMusic={PlayMusic}
          musicOn={musicOn}
        />
      </div>
      <audio ref={musicRef} src={Music} loop></audio>
    </BrowserRouter>
  );
};

export default App;
