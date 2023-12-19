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
      <Link to="/Timer" className="nav-link">
        Timer
      </Link>
      <Link to="/Pomodoro" className="nav-link">
        Pomodoro
      </Link>
      <Link to="/ToDoList" className="nav-link">
        ToDoList
      </Link>
      <Link to="/Calendar" className="nav-link">
        Calendar
      </Link>
      <Link to="/MyPage" className="nav-link">
        MyPage
      </Link>
    </S.Header>
  );
};

export default Header;
