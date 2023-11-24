import React from "react";
import "../../styles/sidebar/sidebarProfile.css";

// 이미지
import profileImg from "../../assets/img/profile_photo.png";
import topBackground from "../../assets/background/top_background.png";

const SidebarProfile = () => {
  return (
    <div className="SidebarProfile">
      <div className="profile">
        <a href="/mypage">
          <img
            src={topBackground}
            alt="topBackground"
            className="topBackground"
          />
          <img src={profileImg} alt="profileImg" className="profileImg" />
        </a>
        <div className="textCenter">Ajeong Joo</div>
        <div className="line"></div>
        <div>집 가고 싶어요... </div>
        <br />
        <div>
          <a
            href="https://ajeong7038.tistory.com"
            style={{ color: "gray", textDecoration: "none" }}
          >
            https://ajeong7038.tistory.com
          </a>
          <br />
          <a
            href="https://github.com/ajung7038"
            style={{ color: "gray", textDecoration: "none" }}
          >
            https://github.com/ajung7038
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
