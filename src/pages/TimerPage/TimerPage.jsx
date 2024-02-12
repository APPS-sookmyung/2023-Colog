import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Timer from "../../components/Timer/Timer";
import * as S from "./TimerPage.style";

const TimerPage = ({ changeModal }) => {
  const getTime = (count) => {};

  return (
    <S.TimerPage>
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <Timer getTime={getTime} modalState={changeModal} />
          <S.Explanation>
            <S.UpdateTimeExplanation>
              오전 4시 기준으로 시간을 업데이트합니다
            </S.UpdateTimeExplanation>
            <br />
            오늘의 목표 시간은 5h 5m 5s 이에요
            <br />
            목표를 2/9 완료했어요
          </S.Explanation>
        </S.NonSidebar>
      </S.Content>
    </S.TimerPage>
  );
};

export default TimerPage;
