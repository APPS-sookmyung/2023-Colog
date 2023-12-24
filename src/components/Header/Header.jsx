// Header.jsx
import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header className={`fixed-header ${scrolled ? "scrolled" : ""}`}>
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
    </S.Header>
  );
};

export default Header;
