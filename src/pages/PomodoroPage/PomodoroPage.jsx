import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CountDown from "../../components/CountDown/CountDown";

import * as S from "./PomodoroPage.style";

const PomodoroPage = () => {
  let targetTimeMinute = 50;
  return (
    <S.PomodoroPage>
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <CountDown
            initialHours={0}
            initialMinutes={targetTimeMinute}
            initialSeconds={0}
          />
          <S.Explanation>
            <S.UpdateTimeExplanation>
              한 사이클을 달성하지 못할 시 공부 시간이 측정되지 않아요!
            </S.UpdateTimeExplanation>
            <br />
            {targetTimeMinute}분 공부 루틴이에요
            <br />
            목표를 2/9 완료했어요
          </S.Explanation>
        </S.NonSidebar>
      </S.Content>
    </S.PomodoroPage>
  );
};

export default PomodoroPage;
