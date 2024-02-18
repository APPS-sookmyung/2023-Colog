import styled from "@emotion/styled";

import homeButtonImage from "../../assets/icon/home_icon.png";
import homeButtonImageColor from "../../assets/icon/home_icon_color.png";
import timerButtonImage from "../../assets/icon/timer_icon.png";
import timerButtonImageColor from "../../assets/icon/timer_icon_color.png";
import toDoListButtonImage from "../../assets/icon/check_icon.png";
import toDoListButtonImageColor from "../../assets/icon/check_icon_color.png";

export const NavBar = styled.div`
  position: fixed;

  top: 0px;
  left: 0px;
  width: 140px;
  height: 100vh;

  background-color: #e1eeff;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 1000px) {
    width: 100wh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LeftBar = styled.div``;

export const RightBar = styled.div`
  position: relative;
  left: 70px;
  top: ${({ top }) => top};

  @media all and (max-width: 1000px) {
    // left: 0px;
  }
`;

export const buttonStyle = `
width: 64px;
height: 64px;

background-size: contain;
background-color: #e1eeff;
background-repeat: no-repeat;
background-position: center;
margin: 50px 0 0 0;

border: none;
cursor: pointer;

&:active {
  transform: scale(0.9);
}`;

export const HomeButton = styled.button`
  background-image: url(${homeButtonImage});
  ${buttonStyle}
`;

export const HomeButtonColor = styled.button`
  background-image: url(${homeButtonImageColor});
  ${buttonStyle}
`;

export const TimerButton = styled.button`
  ${buttonStyle}
  background-image: url(${timerButtonImage});

  width: 61px;
  height: 61px;
`;

export const TimerButtonColor = styled.button`
  ${buttonStyle}
  background-image: url(${timerButtonImageColor});

  width: 61px;
  height: 61px;
`;

export const ToDoListButton = styled.button`
  ${buttonStyle}
  background-image: url(${toDoListButtonImage});

  width: 48px;
  height: 48px;
`;

export const ToDoListButtonColor = styled.button`
  ${buttonStyle}
  background-image: url(${toDoListButtonImageColor});

  width: 48px;
  height: 48px;
`;

export const ClickBar = styled.div`
  background-color: #61a5ff;

  width: 11px;
  height: 66px;
  border-radius: 10px;

  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
`;
