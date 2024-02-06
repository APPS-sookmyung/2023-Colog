import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Timer from "../../components/Timer/Timer";
import * as S from "./TimerPage.style";

const TimerPage = () => {
  const getTime = (count) => {};

  return (
    <S.TimerPage>
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <Timer getTime={getTime} />
          {/* <Timer /> */}
          <S.Explanation>
            <S.TargetTime>오늘의 목표 시간은 5h 5m 5s 이에요</S.TargetTime>
            <S.TargetAttainment>목표를 2/9 완료했어요</S.TargetAttainment>
          </S.Explanation>
        </S.NonSidebar>
      </S.Content>
    </S.TimerPage>
  );
};

export default TimerPage;
