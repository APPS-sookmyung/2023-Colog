import React from "react";
import ToDoBar from "../../assets/img/ToDoBar.png";

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
      <S.RightSection>
        <TotalStudy />
        <S.ToDoBar>
          <img src={ToDoBar} alt="ToDoBar" />
        </S.ToDoBar>
      </S.RightSection>
    </S.TimerPage>
  );
};

export default TimerPage;
