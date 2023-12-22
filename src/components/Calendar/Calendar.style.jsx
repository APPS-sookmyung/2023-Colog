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

export const MoveButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    color: lightGray;
  }
`;

export const NextMonthMoveButton = styled(MoveButton)``;

export const PreviousMonthMoveButton = styled(MoveButton)``;

export const CalendarContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding: 20px;
  text-align: center;
  color: lightgray;
`;

export const CalendarDay = styled.div`
  cursor: pointer;
  width: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.current &&
    `
    color: black;
    font-weight: bold;
  `}

  ${(props) =>
    props.selected &&
    `
    color: white;
    background-color: #3D5A80;
  `}
`;
