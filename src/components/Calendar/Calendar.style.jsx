// Calendar.style.jsx

import styled from "@emotion/styled";

export const Calendar = styled.div`
  font-family: Arial, sans-serif;
  width: 400px;
  height: 400px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 10px;
`;

export const CalendarTitle = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const NextMonthMoveButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const PreviousMonthMoveButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const CalendarContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  text-align: center;
`;

export const CalendarDay = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;

  &.empty {
    background-color: #f5f5f5;
  }
`;
