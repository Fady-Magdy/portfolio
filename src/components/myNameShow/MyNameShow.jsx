import { useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import { fadyData } from "../../data/myData";
import "./myNameShow.scss";

const MyNameShow = () => {
  const { myNameArray, firstVisit } = useContext(appContext);
  // Functions --------------------------------------------------------------
  const returnLetter = (letter, index) => {
    if (letter !== " ") {
      return (
        <span className="my-name-letter" key={index}>
          {letter}
        </span>
      );
    } else {
      return (
        <span className="my-name-letter hidden" key={index}>
          s
        </span>
      );
    }
  };
  // JSX -------------------------------------------------------------------
  return (
    <>
      <div className="my-name-out">
        {firstVisit.current &&
          myNameArray.map((letter, index) => {
            return returnLetter(letter, index);
          })}
      </div>
      {firstVisit.current && <h4 className="job-title">{fadyData.jobTitle}</h4>}
    </>
  );
};

export default MyNameShow;
