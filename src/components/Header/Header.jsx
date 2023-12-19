import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <S.Home>Home</S.Home>
      <S.Timer>Timer</S.Timer>
      <S.Pomodoro>Pomodoro</S.Pomodoro>
      <S.ToDoList>ToDoList</S.ToDoList>
      <S.Calendar>Calendar</S.Calendar>
      <S.MyPage>MyPage</S.MyPage>
    </S.Header>
  );
};

export default Header;
