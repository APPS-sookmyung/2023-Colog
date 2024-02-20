import React from "react";

import Timer from "../../components/Timer/Timer";
import * as S from "./TimerPage.style";

const TimerPage = () => {
  const getTime = (count) => {};

  return (
    <S.TimerPage>
      <S.Timer>
        <Timer getTime={getTime} />
      </S.Timer>
      <S.Explanation>
        <S.UpdateTimeExplanation>
          오전 4시 기준으로 시간을 업데이트합니다
        </S.UpdateTimeExplanation>
        <br />
        오늘의 목표 시간은 5h 5m 5s 이에요
        <br />
        목표를 2/9 완료했어요
      </S.Explanation>
    </S.TimerPage>
  );
};

export default TimerPage;
