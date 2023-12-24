import styled from "@emotion/styled";
import startButtonImage from "../../assets/img/startButton.png";
import stopButtonImage from "../../assets/img/stopButton.png";
import resetButtonImage from "../../assets/img/resetButton.png";

export const Timer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountTime = styled.div`
  background-color: #3d5a80;
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  font-weight: bold;
  padding: 30px;
`;

export const RestTime = styled.div``;

export const SelectTimerButtons = styled.div``;

export const SelectTimerButtonStart = styled.button`
  background-image: url(${startButtonImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
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
  background-color: white;
  width: 100px;
  height: 100px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

export const SelectTimerButtonReset = styled.button`
  background-image: url(${resetButtonImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  width: 100px;
  height: 100px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
