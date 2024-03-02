// import "./styles.css";
import * as S from "./DailyStats.style";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { useEffect, useState } from "react";
import CustomDate from "../CustomDate/CustomDate";

export default function DailyStats({ day, month, year }) {
  const [studyTime, setStudyTime] = useState();

  // 현재 시간
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);

  const formattedDate = ({ day, month, year }) => {
    return (
      year.toString() +
      (month.toString() < 10 ? "0" + month.toString() : month.toString()) +
      (day.toString() < 10 ? "0" + day.toString() : day.toString())
    );
  };

  const formattedDateStr = formattedDate({ day, month, year });

  useEffect(() => {
    const getTimeDB = async () => {
      try {
        const docRef = doc(db, "studyTime", formattedDateStr);
        console.log(formattedDateStr);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setStudyTime(docSnap.data().time);
        } else {
          setStudyTime(0);
        }
      } catch (error) {
        console.log("ERROR fetching study time : ", error);
      }
    };

    getTimeDB();
  }, [day]);

  useEffect(() => {
    if (studyTime) {
      const hours = Math.floor(studyTime / 3600);
      const minutes = Math.floor((studyTime % 3600) / 60);
      const seconds = (studyTime % 3600) % 60;

      setCurrentHours(hours);
      setCurrentMinutes(minutes);
      setCurrentSeconds(seconds);
    }
  }, [day]);

  return (
    <S.DailyStats>
      <S.Title>
        {year}.{month}.{day}
      </S.Title>
      <br />
      {/* <S.Content>{studyTime}</S.Content> */}
      <S.Content>{`${currentHours < 10 ? "0" : ""}${currentHours}h ${
        currentMinutes < 10 ? "0" : ""
      }${currentMinutes}m ${
        currentSeconds < 10 ? "0" : ""
      }${currentSeconds}s`}</S.Content>
      <S.AchievementRate>목표를 2 / 9 달성했어요! </S.AchievementRate>
    </S.DailyStats>
  );
}
