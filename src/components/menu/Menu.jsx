import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fadyData } from "../../data/myData";
import "./menu.scss";
// -----------------------------------------------------------
const Menu = ({ darkMode, setDarkMode }) => {
  // States
  const [showMenu, setShowMenu] = useState(false);
  // -------------------------------------------------------
  // Functions
  function showMainMenu() {
    setShowMenu((prev) => !prev);
    let listItems = document.querySelectorAll(".list-item");
    let time = 50;
    listItems.forEach((item) => {
      setTimeout(() => {
        item.classList.toggle("show");
      }, time);
      time += 50;
    });
  }
  // -------------------------------------------------------
  // JSX
  return (
    <>
      {showMenu && <div onClick={showMainMenu} className="bg-dark"></div>}
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
            <a href={fadyData.resumeDownloadUrl} className="list-item" download>
              <div className="icon-holder">
                <i className="fa-solid fa-download"></i>
              </div>
              Download Resume
            </a>
            <a
              href={fadyData.resumeViewUrl}
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
    </>
  );
};

export default Menu;
