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

  return { count, start, stop };
};

const Timer = (props) => {
  // 타이머 기능
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const { count, start, stop } = useTimer(0, 1000);

  const setTime = () => {
    props.getTime(count);
  };

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
      <S.SelectTimerButtons onClick={setTime}>
        <S.SelectTimerButtonStart
          onClick={() => {
            start();
          }}
        />
        <S.SelectTimerButtonStop
          onClick={() => {
            stop();
          }}
        />
      </S.SelectTimerButtons>
      <S.CountTime>
        {`${currentHours < 10 ? "0" : ""}${currentHours}h ${
          currentMinutes < 10 ? "0" : ""
        }${currentMinutes}m ${
          currentSeconds < 10 ? "0" : ""
        }${currentSeconds}s`}
      </S.CountTime>
    </S.Timer>
  );
};

export default Timer;
