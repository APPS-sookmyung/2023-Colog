import React from "react";
import { BarChart, Bar, LabelList } from "recharts";
import * as S from "./MonthlyStats.style";

const data = [
  {
    month: "11",
    totalTime: 210,
  },
  {
    month: "12",
    totalTime: 300,
  },
  {
    month: "01",
    totalTime: 200,
  },
  {
    month: "02",
    totalTime: 278,
  },
  {
    month: "03",
    totalTime: 183,
    fill: "#61A5FF",
  },
];

export default function MonthlyStats() {
  return (
    <S.MonthlyStats>
      <S.MonthTitle>STUDY TIME</S.MonthTitle>
      <S.BarChart>
        <BarChart width={350} height={250} data={data}>
          <Bar dataKey="totalTime" fill="#C2DDFF">
            <LabelList dataKey="month" position="top" />
          </Bar>
        </BarChart>
      </S.BarChart>
    </S.MonthlyStats>
  );
}
