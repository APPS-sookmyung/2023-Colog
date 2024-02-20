import styled from "@emotion/styled";

import homeButtonImage from "../../assets/icon/home_icon.png";
import homeButtonImageColor from "../../assets/icon/home_icon_color.png";
import timerButtonImage from "../../assets/icon/timer_icon.png";
import timerButtonImageColor from "../../assets/icon/timer_icon_color.png";
import toDoListButtonImage from "../../assets/icon/check_icon.png";
import toDoListButtonImageColor from "../../assets/icon/check_icon_color.png";

export const NavBar = styled.div``;

export const NavBarBackgroundColor = styled.div`
  // position: fixed;

  background-color: #e1eeff;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 1250px) {
    width: 100vw;
    bottom: 0;
    height: 100px;
    left: 0;

    flex-direction: row;
    justify-content: space-between;
  }

  @media all and (min-width: 1250px) {
    width: 140px;
    height: 100vh;

    top: 0px;
    left: 0px;
  }

  // 핸드폰
  @media all and (max-width: 500px) {
    margin-left: -10%;
    gap: 50px;
  }
`;

export const EmptySpace = styled.div`
  width: 66px;
  height: 11px;
`;

export const RightBar = styled.div`
  position: relative;

  // 1000px보다 크면
  @media all and (min-width: 1250px) {
    left: 70px;
    top: ${({ top }) => top};
  }

  // 1000px보다 작으면
  @media all and (max-width: 1250px) {
    left: ${({ left }) => left};
    bottom: 48px;
  }
`;

export const buttonStyle = `
  width: 64px;
  height: 64px;

  background-size: contain;
  background-color: #e1eeff;
  background-repeat: no-repeat;
  background-position: center;

  // 1000px보다 크면
  @media all and (min-width: 1250px) {
    margin: 50px 0 0 0;
  }

  // 핸드폰
  @media all and (max-width: 500px) {
    width: 44px;
    height: 44px;
  }

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

  // 핸드폰
  @media all and (max-width: 500px) {
    width: 45px;
    height: 45px;
  }
`;

export const TimerButton = styled.button`
  ${buttonStyle}
  background-image: url(${timerButtonImage});

  width: 61px;
  height: 61px;

  // 핸드폰
  @media all and (max-width: 500px) {
    width: 45px;
    height: 45px;
  }
`;

export const TimerButtonColor = styled.button`
  ${buttonStyle}
  background-image: url(${timerButtonImageColor});

  width: 61px;
  height: 61px;

  // 핸드폰
  @media all and (max-width: 500px) {
    width: 45px;
    height: 45px;
  }
`;

export const ToDoListButton = styled.button`
  ${buttonStyle}
  background-image: url(${toDoListButtonImage});

  width: 48px;
  height: 48px;

  // 핸드폰
  @media all and (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`;

export const ToDoListButtonColor = styled.button`
  ${buttonStyle}
  background-image: url(${toDoListButtonImageColor});

  width: 48px;
  height: 48px;

  // 핸드폰
  @media all and (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
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

  @media all and (max-width: 1250px) {
    width: 66px;
    height: 11px;
  }
`;
