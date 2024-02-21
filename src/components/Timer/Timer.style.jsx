import styled from "@emotion/styled";
import startButtonImage from "../../assets/img/startButton.png";
import stopButtonImage from "../../assets/img/stopButton.png";

export const Timer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 4px;
`;

export const CountTime = styled.div`
  background-color: #61a5ff;
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  font-weight: bold;
  padding: 30px;

  @media all and (max-width: 500px) {
    // width: 70%;
    font-size: 35px;
    padding: 15px;
  }
`;

export const SelectTimerButtons = styled.div`
  @media all and (max-width: 500px) {
    width: 70%;
    background-color: red;
    display: flex;
    flex-direction: row;
  }
`;

export const SelectTimerButtonStart = styled.button`
  background-image: url(${startButtonImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e1eeff;
  width: 100px;
  height: 100px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
export const SelectTimerButtonStop = styled.button`
  background-image: url(${stopButtonImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e1eeff;
  width: 100px;
  height: 100px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
