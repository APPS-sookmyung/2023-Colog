import React, { useCallback, useRef, useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import CustomDate from "../CustomDate/CustomDate";

import * as S from "./Timer.style";

const Timer = () => {
  // 현재 시간
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);

  // db에서 시간 불러오는 변수&함수
  const [studyTime, setStudyTime] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // 시간 불러오는 함수, 시간 초기화
  useEffect(() => {
    // 시간 불러오는 함수
    const getTimeDB = async () => {
      try {
        const docRef = doc(db, "studyTime", CustomDate());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudyTime(docSnap.data().time);
        }
      } catch (error) {
        console.error("Error fetching study time:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getTimeDB();
  }, []);

  // 시간 초기화 (DB에서 불러오기)
  useEffect(() => {
    if (studyTime !== undefined) {
      setCurrentSeconds(studyTime);
      setCount(studyTime);
    }
  }, [studyTime]);

  // 버튼 클릭 이벤트
  const [isTimerRunning, setIsTimeRunning] = useState(false);
  const [count, setCount] = useState(studyTime ? studyTime : 0);

  const start = () => {
    setIsTimeRunning(true);
  };

  const stop = () => {
    setIsTimeRunning(false);
    // 현재 시간 저장 로직 구현
    timeUpdate();
  };

  // db 시간 업데이트 변수
  const timeUpdate = async () => {
    try {
      const timeRef = doc(db, "studyTime", CustomDate());
      await updateDoc(timeRef, { time: count });
    } catch (error) {
      console.error("Error fetching study time:", error);
    }
  };

  // 타이머 업데이트
  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  // 시간 바꾸기 (시, 분, 초)
  useEffect(() => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = (count % 3600) % 60;

    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  }, [count]);

  return (
    <S.Timer>
      <S.SelectTimerButtons>
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
