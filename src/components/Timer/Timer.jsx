import React, { useCallback, useRef, useState, useEffect } from "react";
import * as S from "./Timer.style";

const useTimer = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
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

  return { count, start, stop, reset };
};

const Timer = () => {
  // 타이머 기능
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const { count, start, stop, reset } = useTimer(0, 1000);

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
      <S.SelectTimerButtons>
        <S.SelectTimerButton onClick={start}>START</S.SelectTimerButton>
        <S.SelectTimerButton onClick={stop}>STOP</S.SelectTimerButton>
        <S.SelectTimerButton onClick={reset}>RESET</S.SelectTimerButton>
      </S.SelectTimerButtons>
    </S.Timer>
  );
};

export default Timer;
