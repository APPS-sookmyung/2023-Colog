import React, { useState } from "react";

import Calendar from "../../../components/Calendar/Calendar";
import DailyStats from "../../../components/DailyStats/DailyStats";
import MonthlyStats from "../../../components/MonthlyStats/MonthlyStats";

import * as S from "./InitialHome.style";

const InitialHome = () => {
  const [calendarSelected, setCalendarSelected] = useState(false);
  const handleCalendarSelectedChange = (selected) => {
    setCalendarSelected(selected);
  };

  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const propDateFunction = (year, month, day) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDay(day);
  };

  return (
    <S.InitialHome>
      <S.Calendar>
        <Calendar
          onCalendarSelectedChange={handleCalendarSelectedChange}
          onPropDateFunction={propDateFunction}
        />
      </S.Calendar>
      <S.RightSection>
        {calendarSelected ? (
          <DailyStats
            day={selectedDay}
            month={selectedMonth}
            year={selectedYear}
          />
        ) : (
          <MonthlyStats />
        )}
      </S.RightSection>
    </S.InitialHome>
  );
};

export default InitialHome;
