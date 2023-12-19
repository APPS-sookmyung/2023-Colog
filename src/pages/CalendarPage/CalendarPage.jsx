import * as S from "./CalendarPage.style";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const CalendarPage = () => {
  return (
    <S.CalendarPage>
      <Header />
      <S.Content>
        <Sidebar />
        <S.NonSidebar></S.NonSidebar>
      </S.Content>
    </S.CalendarPage>
  );
};

export default CalendarPage;
