// InitialHome.style.jsx
import styled from "@emotion/styled";

import BackgroundImage from "../../../assets/img/Colog.background.png";

export const InitialHome = styled.div`
  position: relative;
  height: 1080px; /* 전체 높이 설정 */

  &:before {
    content: "";
    position: absolute;
    top: 480px;
    left: 0;
    width: 100%;
    height: 600px;
    background: linear-gradient(to top, #081116, #ffffff);
    z-index: -1;
  }
`;

// firstContainer
export const firstContainer = styled.div`
  width: 100%-100px;
  height: 1080px;
  margin-left: 100px;
`;
export const Logo = styled.div`
  display: flex;
  margin-top: 300px;
  justify-content: center;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 199.882px;
  height: 135.101px;
  flex-shrink: 0;
`;
export const LogoText = styled.h1`
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 4px;
  margin: 30px;
`;
export const firstDescriptionText = styled.h3`
  margin-bottom: 100px;
  font-weight: bold;
`;

// secondContainer
export const secondThridContainer = styled.div`
  background-image: url("${BackgroundImage}");
  background-size: cover;
  width: 100%;
  height: 2160px;
  box-shadow: inset -200px 0 0 0 #172727, inset 200px 0 0 0 #172727;
  text-align: center;
`;
// secondContainer
export const secondContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const secondDescription1 = styled.div`
  color: white;
  font-size: 25px;
  margin-bottom: -20px;
  letter-spacing: 2px;
`;
export const secondDescription2 = styled.h3`
  color: white;
  font-size: 60px;
  letter-spacing: 10px;
`;

// thridContainer
export const thridContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  letter-spacing: 5px;
  font-size: 20px;
  color: white;
`;
export const thirdDescription1 = styled.h1``;
export const thirdDescription2 = styled.h1``;

// fourthContainer
export const fourthContainer = styled.div`
  height: 1080px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #7a8789;
`;
export const startButton = styled.button`
  font-size: 90px;
  font-family: "SeoulHangang";
  font-weight: bold;
  letter-spacing: 20px;

  border-radius: 10px;
  border: none;

  padding: 20px;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
export const copyRightText = styled.h5`
  text-align: right;
  color: lightGray;
  letter-spacing: 2px;
`;
