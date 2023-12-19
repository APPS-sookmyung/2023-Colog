import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Timer from "../../components/Timer/Timer";
import * as S from "./TimerPage.style";

const TimerPage = (props) => {
  const [time, setTime] = useState(0);
  let targetTimeHour = 5;
  let targetTimeMinute = 5;
  let targetTimeSecond = 5;

  const getTime = (count) => {
    setTime(count);
  };

  // 목표까지 남은 시간 계산
  const remainingHours = Math.floor(time / 3600);
  const remainingMinutes = Math.floor((time % 3600) / 60);
  const remainingSeconds = time % 60;

  return (
    <S.TimerPage>
      <Header />
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <Timer getTime={getTime} />
          <S.remainingTime>
            목표까지 {remainingHours}h {remainingMinutes}m {remainingSeconds}s
          </S.remainingTime>
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
