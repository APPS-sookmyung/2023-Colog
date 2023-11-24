import React from "react";
import "../../styles/sidebar/sidebarLog.css";

// 이미지
import profileImg from "../../assets/img/profile_photo.png";
import topBackground from "../../assets/background/top_background.png";
import line from "../../assets/background/line_group.png";
import topEclipse from "../../assets/background/top_eclipse.png";

const SidebarLog = () => {
  return (
    <div className="SidebarLog">
      <Study />
      <ToDo />
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
        <div className="SidebarLogStudyTitle">STUDY</div>
        <div className="SliderLogLine">
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
        <div className="SidebarLogStudyTitle">TODO</div>
        <div className="SliderLogLine">
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
