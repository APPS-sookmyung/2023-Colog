import React, { useState } from "react";

import Calendar from "../../../components/Calendar/Calendar";
import MonthlyStats from "../../../components/MonthlyStats/MonthlyStats";
import Test from "../../../components/Test/Test";

import * as S from "./InitialHome.style";

const InitialHome = () => {
  const [calendarSelected, setCalendarSelected] = useState(false);

  const handleCalendarSelectedChange = (selected) => {
    setCalendarSelected(selected);
  };

  return (
    <S.InitialHome>
      {/* <Test /> */}
      <S.Calendar>
        <Calendar onCalendarSelectedChange={handleCalendarSelectedChange} />
      </S.Calendar>
      <S.RightSection>
        {calendarSelected ? <Test /> : <MonthlyStats />}
      </S.RightSection>
    </S.InitialHome>
  );
};

export default InitialHome;
