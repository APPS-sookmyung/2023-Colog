// Header.jsx
import React from "react";
import * as S from "./Header.style";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/timer" className="nav-link">
        Timer
      </Link>
      <Link to="/pomodoro" className="nav-link">
        Pomodoro
      </Link>
      <Link to="/todolist" className="nav-link">
        ToDoList
      </Link>
      <Link to="/calendar" className="nav-link">
        Calendar
      </Link>
      <Link to="/mypage" className="nav-link">
        MyPage
      </Link>
    </S.Header>
  );
};

export default Header;
