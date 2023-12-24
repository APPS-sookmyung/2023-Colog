import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Timer from "../../components/Timer/Timer";
import * as S from "./TimerPage.style";

const TimerPage = () => {
  const [time, setTime] = useState(0);
  let targetTimeHour = 5;
  let targetTimeMinute = 5;
  let targetTimeSecond = 5;

  const getTime = (count) => {
    setTime(count);
  };

  return (
    <S.TimerPage>
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <Timer getTime={getTime} />
          <S.Explanation>
            <S.TargetTime>
              오늘의 목표 시간은 {targetTimeHour}h {targetTimeMinute}m{" "}
              {targetTimeSecond}s 이에요
            </S.TargetTime>
            <S.TargetAttainment>목표를 2/9 완료했어요</S.TargetAttainment>
          </S.Explanation>
        </S.NonSidebar>
      </S.Content>
    </S.TimerPage>
  );
};

export default TimerPage;
