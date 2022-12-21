import { useEffect, useContext } from "react";
import { appContext } from "../../contexts/AppContext";
import "./office.scss";
//  Component
import Table from "../../components/table/Table";
import Chair from "../../components/chair/Chair";
// ------------------------------------------------------------------------
function Office() {
  // States
  const { firstVisit } = useContext(appContext);
  // Use Effects --------------------------------------------------------------
  useEffect(() => {
    setTimeout(() => {
      firstVisit.current = false;
    }, 8000);
  }, []);
  // JSX --------------------------------------------------------------------
  return (
    <div className="office">
      <div className={`office-inside ${firstVisit.current ? "zoom" : ""}`}>
        <div className="background">
          <div className="background-darkening-floor"></div>
        </div>
        <Chair />
        <Table />
      </div>
    </div>
  );
}

export default Office;
