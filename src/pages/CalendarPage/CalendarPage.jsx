import * as S from "./CalendarPage.style";
import Calendar from "../../components/Calendar/Calendar";
import MonthlyStats from "../../components/MonthlyStats/MonthlyStats";

const CalendarPage = () => {
  return (
    <S.CalendarPage>
      <S.Content>
        <MonthlyStats />
        <Calendar />
      </S.Content>
    </S.CalendarPage>
  );
};

export default CalendarPage;
