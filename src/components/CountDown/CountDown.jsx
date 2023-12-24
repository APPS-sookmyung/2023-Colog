// CountDown.jsx
import React, { useCallback, useRef, useState, useEffect } from "react";
import * as S from "./CountDown.style";

const useTimer = (initialValue, ms, onCompletion) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const completionHandledRef = useRef(false);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 0 && !completionHandledRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          if (onCompletion) {
            onCompletion();
          }
          completionHandledRef.current = true;
        }
        return Math.max(0, prevCount - 1);
      });
    }, ms);
  }, [ms, onCompletion]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
    if (completionHandledRef.current) {
      completionHandledRef.current = false;
    }
    stop();
  }, [initialValue, stop]);

  useEffect(() => {
    if (count === 0 && onCompletion && !completionHandledRef.current) {
      onCompletion();
      completionHandledRef.current = true;
      // alert 창 다음에 초기화되도록 추가
      reset();
    }
  }, [count, onCompletion, reset]);

  return { count, start, stop, reset };
};

const CountDown = ({
  initialHours = 0,
  initialMinutes = 0,
  initialSeconds = 0,
}) => {
  const [currentHours, setCurrentHours] = useState(initialHours);
  const [currentMinutes, setCurrentMinutes] = useState(initialMinutes);
  const [currentSeconds, setCurrentSeconds] = useState(initialSeconds);

  const { count, start, stop, reset } = useTimer(
    initialHours * 3600 + initialMinutes * 60 + initialSeconds,
    1000,
    () => alert("공부 시간을 달성했어요!")
  );

  useEffect(() => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  }, [count]);

  return (
    <S.CountDown>
      <S.SelectTimerButtons>
        <S.SelectTimerButtonStart onClick={start} />
        <S.SelectTimerButtonStop onClick={stop} />
        <S.SelectTimerButtonReset onClick={reset} />
      </S.SelectTimerButtons>
      <S.RestTime>{`${currentHours < 10 ? "0" : ""}${currentHours}h ${
        currentMinutes < 10 ? "0" : ""
      }${currentMinutes}m ${
        currentSeconds < 10 ? "0" : ""
      }${currentSeconds}s`}</S.RestTime>
    </S.CountDown>
  );
};

export default CountDown;
