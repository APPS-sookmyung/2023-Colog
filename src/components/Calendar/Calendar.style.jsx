import styled from "@emotion/styled";

export const Calendar = styled.div`
  font-family: Arial, sans-serif;
  width: 500px;
  height: 300px;
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
  &:hover {
    color: lightGray;
    cursor: pointer;
  }
`;

export const PreviousMonthMoveButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  &:hover {
    color: lightGray;
    cursor: pointer;
  }
`;

export const CalendarContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding: 10px;
  text-align: center;
  color: lightgray;
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
