import React, { useCallback, useRef, useState, useEffect } from "react";
import * as S from "./Timer.style";

const useTimer = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);

  // 목표 시간 카운트다운 관련 useState 함수

  const [restHourTime, setRestHourTime] = useState(0);
  const [restMinuteTime, setRestMinuteTime] = useState(0);
  const [restSecondTime, setRestSecondTime] = useState(3);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      restTimeCount();
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, ms);
  }, [ms]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    stop();
  }, [stop]);

  // 목표 시간 카운트다운 관련 함수
  const restTimeCount = () => {
    const sumRestTime =
      restHourTime * 60 * 60 + restMinuteTime * 60 + restSecondTime;
    setDecreaseHourTime((decreaseHourTime) => Math.floor(sumRestTime / 3600));
    setDecreaseMinuteTime((decreaseMinuteTime) =>
      Math.floor((sumRestTime % 3600) / 60)
    );
    setDecreaseSecondTime((decreaseSecondTime) => sumRestTime % 60);
  };

  return { count, start, stop, reset };
};

const Timer = () => {
  // 타이머 기능
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const { count, start, stop, reset } = useTimer(0, 1000);

  const [decreaseHourTime, setDecreaseHourTime] = useState(0);
  const [decreaseMinuteTime, setDecreaseMinuteTime] = useState(0);
  const [decreaseSecondTime, setDecreaseSecondTime] = useState(0);

  useEffect(() => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;

    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  }, [count]);

  return (
    <S.Timer>
      <S.CountTime>
        {`${currentHours < 10 ? "0" : ""}${currentHours}h ${
          currentMinutes < 10 ? "0" : ""
        }${currentMinutes}m ${
          currentSeconds < 10 ? "0" : ""
        }${currentSeconds}s`}
      </S.CountTime>
      <S.RestTime>{`목표까지 ${
        decreaseHourTime - currentHours < 10 ? "0" : ""
      }${decreaseHourTime - currentHours < 10 ? "0" : ""}h ${
        decreaseMinuteTime - currentMinutes < 10 ? "0" : ""
      }${decreaseMinuteTime - currentMinutes < 10 ? "0" : ""}m ${
        decreaseSecondTime - currentSeconds < 10 ? "0" : ""
      }${decreaseSecondTime - currentSeconds < 10 ? "0" : ""}m !`}</S.RestTime>
      <S.SelectButtons>
        <S.SelectButton>Information</S.SelectButton>
        <S.SelectButton>Timer</S.SelectButton>
        <S.SelectButton>Poromodo</S.SelectButton>
      </S.SelectButtons>
      <S.SelectTimerButtons>
        <S.SelectTimerButton onClick={start}>START</S.SelectTimerButton>
        <S.SelectTimerButton onClick={stop}>STOP</S.SelectTimerButton>
        <S.SelectTimerButton onClick={reset}>RESET</S.SelectTimerButton>
      </S.SelectTimerButtons>
    </S.Timer>
  );
};

export default Timer;
