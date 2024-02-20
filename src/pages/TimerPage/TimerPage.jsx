import React from "react";

import Timer from "../../components/Timer/Timer";
import TotalStudy from "../../components/TotalStudy/TotalStudy";
import * as S from "./TimerPage.style";

const TimerPage = () => {
  const getTime = (count) => {};

  return (
    <S.TimerPage>
      <S.Timer>
        <Timer getTime={getTime} />
      </S.Timer>
      <TotalStudy />
    </S.TimerPage>
  );
};

export default TimerPage;
