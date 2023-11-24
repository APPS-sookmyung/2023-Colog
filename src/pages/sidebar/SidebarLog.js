import React from "react";
import "../../styles/sidebar/sidebarLog.css";

// 이미지
import profileImg from "../../assets/img/profile_photo.png";
import topBackground from "../../assets/background/top_background.png";
import line from "../../assets/background/line_group.png";
import topEclipse from "../../assets/background/top_eclipse.png";
import start_button from "../../assets/icon/start_button.png";
import pause_button from "../../assets/icon/pause_button.png";
import stop_button from "../../assets/icon/stop_button.png";

const SidebarLog = () => {
  return (
    <div className="sidebarLog">
      <Study />
      <ToDo />
      <Timer />
    </div>
  );
};

export default SidebarLog;

// 스터디
const Study = () => {
  return (
    <div className="sidebarLogStudy">
      <img src={topEclipse} className="topEclipse" />
      <a href="/mypage" style={{ color: "black", textDecoration: "none" }}>
        <div className="sidebarLogStudyTitle">STUDY</div>
        <div>
          <img src={line} />
        </div>
        <br />
        <div className="logContent">
          <div style={{ color: "gray" }}>
            - Day 10
            <br />- 23 H 36 M
          </div>
        </div>
      </a>
    </div>
  );
};

// ToDo
const ToDo = () => {
  return (
    <div className="sidebarLogTodo">
      <img src={topEclipse} className="topEclipse" />
      <a href="/mypage" style={{ color: "black", textDecoration: "none" }}>
        <div className="sidebarLogStudyTitle">TODO</div>
        <div>
          <img src={line} />
        </div>
        <br />
        <div className="logContent">
          <div style={{ color: "gray" }}>
            - Goal : 3H 00 M
            <br />- D-10
          </div>
        </div>
      </a>
    </div>
  );
};

// Timer
const Timer = () => {
  return (
    <div className="sidebarLogTimer">
      <img src={topEclipse} className="topEclipse" />
      <a href="/mypage" style={{ color: "black", textDecoration: "none" }}>
        <div className="sidebarLogTimerTitle">TIMER</div>
        <div className="sliderLogLineTimer">
          <img src={line} alt="Line" />
        </div>
      </a>
      <div className="sidebarLogButtons">
        <button>
          <img src={start_button} alt="Start" className="sidebarLogButton" />
        </button>
        <button>
          <img src={pause_button} alt="Pause" className="sidebarLogButton" />
        </button>
        <button>
          <img src={stop_button} alt="Stop" className="sidebarLogButton" />
        </button>
      </div>
    </div>
  );
};
