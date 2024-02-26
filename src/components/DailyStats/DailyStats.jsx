// import "./styles.css";
import * as S from "./DailyStats.style";
import { LineChart, Line } from "recharts";
import CustomDate from "../CustomDate/CustomDate";

export default function DailyStats({ day, month, year }) {
  return (
    <S.DailyStats>
      <S.Title>
        {/* <CustomDate /> */}
        {year}.{month}.{day}
      </S.Title>
      <br />
      <S.Content>00h 50m 39s</S.Content>
      <S.AchievementRate>목표를 2 / 9 달성했어요! </S.AchievementRate>
    </S.DailyStats>
  );
}
