import React, { useEffect, useRef, useState } from "react";
import "./style/app.scss";
import "./style/dark-mode.scss";
import Openingshow from "./components/openingshow/Openingshow";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Music from "./audio/music.mp3";
import Office from "./pages/office/Office";
import Home from "./pages/home/Home";

const App = () => {
  const [openingShow, setOpeningShow] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const musicRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function showMainMenu() {
    setShowMenu((prev) => !prev);
    let listItems = document.querySelectorAll(".list-item");
    let time = 100;
    listItems.forEach((item) => {
      setTimeout(() => {
        item.classList.toggle("show");
      }, time);
      time += 100;
    });
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
  useEffect(() => {
    setTimeout(() => {
      setOpeningShow(false);
    }, 2950);
  }, [openingShow]);
  return (
    <BrowserRouter basename="/portfolio">
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <div className={`menu-button ${showMenu ? "show" : ""}`}>
          <i onClick={() => showMainMenu()} className={`fa-solid fa-bars `}></i>
          <div className="menu">
            <h3 className={`${showMenu ? "show" : ""}`}>Menu</h3>
            <ul>
              <Link to="/" className="list-item">
                <div className="icon-holder">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                Office
              </Link>
              <Link to="/home" className="list-item">
                <div className="icon-holder">
                  <i className="fa-solid fa-home"></i>
                </div>
                Normal Page
              </Link>
              <li
                onClick={() => setDarkMode((prev) => !prev)}
                className="list-item"
              >
                <div className="icon-holder">
                  <i className="fa-solid fa-moon"></i>
                </div>
                {darkMode ? "Light" : "Dark"} Mode
              </li>
              <a
                href="https://drive.google.com/uc?export=download&id=1G3UMTtu6aut3updPAcNM1hR-DBZ7pCdW"
                className="list-item"
                download
              >
                <div className="icon-holder">
                  <i className="fa-solid fa-download"></i>
                </div>
                Download Resume
              </a>
              <a
                href="https://drive.google.com/file/d/1G3UMTtu6aut3updPAcNM1hR-DBZ7pCdW/view?usp=sharing"
                className="list-item"
                target="blank"
              >
                <div className="icon-holder">
                  <i className="fa-solid fa-eye"></i>
                </div>
                View Resume
              </a>
            </ul>
          </div>
        </div>
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
        <div className="sound-buttons">
          <button
            className="playSound"
            onClick={() => setSoundOn((prev) => !prev)}
          >
            <i
              className={`fa-solid fa-volume-${soundOn ? "high" : "xmark"}`}
            ></i>
          </button>
          <button className="playMusic" onClick={PlayMusic}>
            <i className={`fa-solid fa-${musicOn ? "pause" : "play"}`}></i>
          </button>
        </div>
      </div>
      <audio ref={musicRef} src={Music} loop></audio>
    </BrowserRouter>
  );
};

export default App;
