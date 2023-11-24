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
    </div>
  );
};

export default SidebarLog;
