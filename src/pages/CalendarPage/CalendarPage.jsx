import * as S from "./CalendarPage.style";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Calendar from "../../components/Calendar/Calendar";
import MonthlyStats from "../../components/MonthlyStats/MonthlyStats";

const CalendarPage = () => {
  return (
    <S.CalendarPage>
      <Header />
      <S.Content>
        <MonthlyStats />
        <Calendar />
      </S.Content>
    </S.CalendarPage>
  );
};

export default CalendarPage;
