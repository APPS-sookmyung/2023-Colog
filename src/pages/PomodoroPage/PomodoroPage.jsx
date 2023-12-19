import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CountDown from "../../components/CountDown/CountDown";

import * as S from "./PomodoroPage.style";

const PomodoroPage = () => {
  let targetTimeMinute = 5;
  let relaxTimeMinute = 5;

  // let targetTimeSecond = 5;
  return (
    <S.PomodoroPage>
      <Header />
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <CountDown
            initialHours={0}
            initialMinutes={targetTimeMinute}
            initialSeconds={0}
          />
          <S.Explanation>
            <S.TargetTime>
              {targetTimeMinute}분 공부 {relaxTimeMinute} 분 휴식 루틴이에요
            </S.TargetTime>
            <S.TargetAttainment>목표를 2/9 완료했어요</S.TargetAttainment>
          </S.Explanation>
        </S.NonSidebar>
      </S.Content>
    </S.PomodoroPage>
  );
};

export default PomodoroPage;
