import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Styles
import "./styles/app.scss";
import "./styles/dark-mode.scss";
// Pages
import Home from "./pages/home/Home";
import Office from "./pages/office/Office";
// Components
import Openingshow from "./components/openingshow/Openingshow";
import SoundButtons from "./components/soundButtons/SoundButtons";
import Menu from "./components/menu/Menu";
import ProjectImageView from "./components/projectImageView/ProjectImageView";
import { appContext } from "./contexts/AppContext";
// -------------------------------------------------------------------
const App = () => {
  // States
  const { showProjectImages } = useContext(appContext);
  const [openingShow, setOpeningShow] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  // Use Effects --------------------------------------------------------
  useEffect(() => {
    setTimeout(() => {
      setOpeningShow(false);
    }, 2000);
  }, [openingShow]);
  // JSX ----------------------------------------------------------------
  return (
    <BrowserRouter basename="/portfolio">
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Routes>
          <Route path="/" element={<Office />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {openingShow && <Openingshow />}
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <SoundButtons />
        {showProjectImages && <ProjectImageView />}
      </div>
    </BrowserRouter>
  );
};

export default App;
