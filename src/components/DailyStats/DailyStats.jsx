// import "./styles.css";
import * as S from "./DailyStats.style";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { useEffect, useState } from "react";

export default function DailyStats({ day, month, year }) {
  const [studyTime, setStudyTime] = useState();

  // 현재 시간
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);

  useEffect(() => {
    const getTimeDB = async () => {
      try {
        const docRef = doc(db, "studyTime", "20240224");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudyTime(docSnap.data().time);
        }
      } catch (error) {
        console.log("ERROR fetching study time : ", error);
      }
    };

    getTimeDB();
  }, []);

  // useEffect(
  //   ({ studyTime }) => {
  //     const hours = Math.floor(studyTime / 3600);
  //     const minutes = Math.floor((studyTime % 3600) / 60);
  //     const seconds = (studyTime % 3600) % 60;

  //     setCurrentHours(hours);
  //     setCurrentMinutes(minutes);
  //     setCurrentSeconds(seconds);
  //   },
  //   [day]
  // );

  return (
    <S.DailyStats>
      <S.Title>
        {year}.{month}.{day}
      </S.Title>
      <br />
      <S.Content>{studyTime}</S.Content>
      {/* <S.Content>{`${currentHours < 10 ? "0" : ""}${currentHours}h ${
        currentMinutes < 10 ? "0" : ""
      }${currentMinutes}m ${
        currentSeconds < 10 ? "0" : ""
      }${currentSeconds}s`}</S.Content> */}
      <S.AchievementRate>목표를 2 / 9 달성했어요! </S.AchievementRate>
    </S.DailyStats>
  );
}
