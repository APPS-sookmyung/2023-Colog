import React from "react";
import { BarChart, Bar, XAxis } from "recharts";
import * as S from "./MonthlyStats.style";

const data = [
  {
    month: 2308,
    totalTime: 4000, // uv가 값
  },
  {
    month: 2309,
    totalTime: 3000,
  },
  {
    month: 2310,
    totalTime: 2000,
  },
  {
    month: 2311,
    totalTime: 2780,
  },
  {
    month: 2312,
    totalTime: 1890,
  },
];

const formatMonth = (value) => {
  const lastTwoDigits = value % 100;
  const thirdDigit = Math.floor((value % 1000) / 100);
  return `${thirdDigit === 0 ? lastTwoDigits % 10 : lastTwoDigits}`;
};

export default function MonthlyStats() {
  return (
    <S.MonthlyStats>
      <BarChart width={400} height={300} data={data}>
        <XAxis
          dataKey="month"
          tickFormatter={formatMonth}
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="totalTime" fill="#2B2D42" />
      </BarChart>
    </S.MonthlyStats>
  );
}
