import React, { useState } from "react";
import * as S from "./Calendar.style";

const Calendar = () => {
  // 현재 날짜를 가져오기
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  // 현재 년도 및 월 상태 설정
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  // 선택된 날짜 상태 설정
  const [selectedDate, setSelectedDate] = useState(null);

  // 날짜 클릭 핸들러
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  // 달력을 렌더링하는 함수
  const renderCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const firstDayOfWeek = firstDayOfMonth.getDay();

    // 달력의 각 날짜를 렌더링
    const calendarDays = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isCurrentDate =
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();
      const isSelectedDate = day === selectedDate;

      calendarDays.push(
        <S.CalendarDay
          key={day}
          current={isCurrentDate}
          selected={isSelectedDate}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </S.CalendarDay>
      );
    }

    return calendarDays;
  };

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setYear((prevYear) => (month === 0 ? prevYear - 1 : prevYear));
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setYear((prevYear) => (month === 11 ? prevYear + 1 : prevYear));
  };

  return (
    <S.Calendar>
      <S.CalendarHeader>
        <S.NextMonthMoveButton onClick={goToPreviousMonth}>
          &lt;
        </S.NextMonthMoveButton>
        <S.CalendarTitle>{`${year}년 ${month + 1}월`}</S.CalendarTitle>
        <S.PreviousMonthMoveButton onClick={goToNextMonth}>
          &gt;
        </S.PreviousMonthMoveButton>
      </S.CalendarHeader>
      <S.CalendarContent>{renderCalendar()} </S.CalendarContent>
    </S.Calendar>
  );
};

export default Calendar;
