import React from "react";
import { BarChart, Bar, XAxis } from "recharts";
import * as S from "./MonthlyStats.style";

const data = [
  {
    month: 2308,
    totalTime: 4000,
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

const CustomXAxisTick = ({ x, y, payload }) => {
  const isBold = payload.value === 2312; // 2312일 때만 볼드체 적용

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        fontSize={isBold ? 14 : 12}
        fontWeight={isBold ? "bold" : "normal"}
        textAnchor="middle"
        fill="#666"
      >
        {formatMonth(payload.value)}
      </text>
    </g>
  );
};

export default function MonthlyStats() {
  return (
    <S.MonthlyStats>
      <S.MonthTitle>December</S.MonthTitle>
      <BarChart width={400} height={300} data={data}>
        <XAxis
          dataKey="month"
          tick={<CustomXAxisTick />}
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="totalTime" fill="#2B2D42" />
      </BarChart>
    </S.MonthlyStats>
  );
}
