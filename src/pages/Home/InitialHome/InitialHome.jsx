// import React, { useState, useEffect } from 'react';

import Calendar from "../../../components/Calendar/Calendar";
import MonthlyStats from "../../../components/MonthlyStats/MonthlyStats";
import Test from "../../../components/Test/Test";

import * as S from "./InitialHome.style";

const InitialHome = () => {
  return (
    <S.InitialHome>
      <Test />
      <S.Calendar>
        <Calendar />
      </S.Calendar>
      <S.MonthlyStats>
        <MonthlyStats />
      </S.MonthlyStats>
    </S.InitialHome>
  );
};

export default InitialHome;
