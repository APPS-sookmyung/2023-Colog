import React, { useCallback, useRef, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";

import * as S from "./Timer.style";

const TimerTest = () => {
  // 현재 시간
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);

  // db에서 시간 불러오는 변수&함수
  const [studyTime, setStudyTime] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // 시간 불러오는 함수, 시간 초기화
  useEffect(() => {
    // 시간 불러오는 함수 /
    const getTimeDB = async () => {
      try {
        const docRef = doc(db, "studyTime", "month");
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
    // setTime();
  }, []);

  useEffect(() => {
    if (studyTime !== undefined) {
      setCurrentSeconds(studyTime);
    }
  }, [studyTime]);

  return (
    <S.Timer>
      {/* <S.SelectTimerButtons onClick={setTime}> */}
      <S.SelectTimerButtons>
        <S.SelectTimerButtonStart
          onClick={() => {
            // start();
          }}
        />
        <S.SelectTimerButtonStop
          onClick={() => {
            // stop();
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

export default TimerTest;
