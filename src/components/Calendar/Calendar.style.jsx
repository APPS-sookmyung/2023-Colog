import styled from "@emotion/styled";

export const Calendar = styled.div`
  font-family: "Jomhuria";
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 10px 0;
`;

export const CalendarTitle = styled.h2`
  margin: 0;
  font-size: 45px;
`;

export const MoveButton = styled.button`
  color: #e1eeff;
  font-size: 45px;
  cursor: pointer;
  background-color: #e1eeff;
  border: none;

  &:hover {
    color: black;
  }
`;

export const NextMonthMoveButton = styled(MoveButton)``;

export const PreviousMonthMoveButton = styled(MoveButton)``;

export const CalendarContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 42px;
  color: black;
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
    color: #61A5FF;
  `}

  ${(props) =>
    props.selected &&
    `
    color: white;
    background-color: #61A5FF;
  `}
`;
