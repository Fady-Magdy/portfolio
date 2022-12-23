import { useContext, useRef, useState, useEffect } from "react";
import { appContext } from "../../contexts/AppContext";
import axios from "axios";
import "./paper.scss";
// Images
import penImg from "./images/pen.png";
// Sound Effects
import tap from "../../audio/tap.mp3";
import hoverSound from "../../audio/paper-hover.mp3";
import drop from "../../audio/drop.mp3";
// -------------------------------------------------------
const Paper = () => {
  // States
  let msg = "Enter at least your name and message";
  const { PlayAudio } = useContext(appContext);
  const [scaleDown, setScaleDown] = useState(true);
  const [entered, setEntered] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [blockSubmit, setBlockSubmit] = useState(false);
  const [msgText, setMsgText] = useState(msg);
  const msgRef = useRef(null);
  const messageDataRef = useRef({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  // -----------------------------------------------------
  // Functions
  // when mouse enter paper
  const hoverPaper = () => {
    if (!entered) PlayAudio(hoverSound);
  };
  // when mouse leave paper
  const leavePaper = () => {
    if (entered) {
      setScaleDown(true);
      setEntered(false);
      setTimeout(() => {
        PlayAudio(drop);
      }, 220);
    }
  };
  const ScaleUpPaper = () => {
    // scale up paper when clicked
    setScaleDown(false);
    if (!entered) PlayAudio(tap);
    setTimeout(() => {
      setEntered(true);
    }, 400);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (blockSubmit) return;
    let data = messageDataRef.current;
    if (data.fullName === "" || data.message === "") {
      setShowMsg(true);
      msgRef.current.style.color = "red";
    } else {
      msgRef.current.style.color = "black";
      setShowMsg(true);
      setBlockSubmit(true);
      setMsgText("Sending Message...");
      data.date = new Date();
      axios
        .post(
          "https://fady-programmer-fady-magdy.vercel.app/portfolio/messages",
          data
        )
        .then((result) => {
          if (result.data === "failed") {
            msgRef.current.style.color = "red";
            setMsgText("Sorry failed, try again later");
          } else {
            messageDataRef.current = {
              fullName: "",
              email: "",
              phone: "",
              message: "",
              date: "",
            };
            document.querySelectorAll("input").forEach((input) => {
              input.value = "";
            });
            document.querySelector("textarea").value = "";
            msgRef.current.style.color = "green";
            setMsgText("Sent Successfully, Thank you");
          }
          setTimeout(() => {
            setShowMsg(false);
            setMsgText(msg);
          }, 4000);
          setBlockSubmit(false);
        });
    }
  };
  const updateMessageData = (e) => {
    if (
      messageDataRef.current.fullName !== "" &&
      messageDataRef.current.message !== ""
    ) {
      setShowMsg(false);
    }
    messageDataRef.current[e.target.id] = e.target.value;
  };
  useEffect(() => {
    document.getElementById("fullName").focus();
  }, [entered]);
  // -----------------------------------------------------
  // JSX
  return (
    <>
      {!scaleDown && <div onClick={leavePaper} className="bg-dark"></div>}

      <div
        onMouseEnter={hoverPaper}
        onClick={ScaleUpPaper}
        className={`paper ${scaleDown ? "scaleDown" : "noScaleDown"}`}
      >
        <div className="pen">
          <img src={penImg} alt="pen" />
        </div>
        <div className="item-title">Message</div>
        <div className="paper-inside">
          <div className="background-darkening-items"></div>
          <div className="paper-content">
            <h1 className="title">Send me a Message</h1>
            <p className="hint">This message will be sent to my database</p>
            <p className="hint">I read all messages</p>
            <hr />
            <form>
              <div className="input-group">
                <label htmlFor="fullName">
                  Your Name <span>*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={updateMessageData}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  onChange={updateMessageData}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  id="phone"
                  type="number"
                  placeholder="Enter Phone"
                  onChange={updateMessageData}
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">
                  Your Message <span>*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message here"
                  onChange={updateMessageData}
                ></textarea>
              </div>
              <p ref={msgRef} className={`msg ${showMsg ? "show" : ""}`}>
                {msgText}
              </p>
              <button
                onClick={sendMessage}
                className={`send-btn ${blockSubmit ? "block" : ""}`}
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paper;
