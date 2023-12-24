// InitialHome.style.jsx
import styled from "@emotion/styled";

import BackgroundImage from "../../../assets/img/Colog.background.png";

export const InitialHome = styled.div``;

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
`;

// secondContainer
export const secondThridContainer = styled.div`
  background-image: url("${BackgroundImage}");
  background-size: cover;
  width: 100%;
  height: 2160px;
  box-shadow: inset -200px 0 0 0 #6e6f70, inset 200px 0 0 0 #6e6f70;
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
`;
export const secondDescription2 = styled.h3`
  color: white;
  font-size: 50px;
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
`;
export const thirdDescription1 = styled.h1`
  color: white;
  font-size: 30px;
`;
export const thirdDescription2 = styled.h1`
  color: white;
  font-size: 30px;
`;

// fourthContainer
export const fourthContainer = styled.div`
  height: 1080px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const startButton = styled.button`
  font-size: 100px;
`;
export const copyRightText = styled.h5`
  text-align: right;
`;
