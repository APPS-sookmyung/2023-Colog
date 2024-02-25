// import "./styles.css";
import * as S from "./DailyStats.style";
import { LineChart, Line } from "recharts";

export default function DailyStats() {
  return (
    <S.DailyStats>
      <S.Title>2024.02.25</S.Title>
      <br />
      <S.Content>00h 50m 39s</S.Content>
      <S.AchievementRate>목표를 2 / 9 달성했어요! </S.AchievementRate>
    </S.DailyStats>
  );
}
