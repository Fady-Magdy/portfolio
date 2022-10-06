import { createContext, useRef, useState } from "react";

export const appContext = createContext();

export default function AppContextProvider(props) {
  const firstVisit = useRef(true)
  const [myNameArray] = useState([
    "F",
    "a",
    "d",
    "y",
    " ",
    "M",
    "a",
    "g",
    "d",
    "y",
  ]);
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

  const value = {
    animateMyName,
    myNameArray,
    firstVisit
  };
  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
}
