// Header.jsx
import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { NavLink } from "react-router-dom";

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
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "navColorChange" : "navLink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/timer"
        className={({ isActive }) => (isActive ? "navColorChange" : "navLink")}
      >
        Timer
      </NavLink>
      <NavLink
        to="/pomodoro"
        className={({ isActive }) => (isActive ? "navColorChange" : "navLink")}
      >
        Pomodoro
      </NavLink>
      <NavLink
        to="/todolist"
        className={({ isActive }) => (isActive ? "navColorChange" : "navLink")}
      >
        ToDoList
      </NavLink>
      <NavLink
        to="/calendar"
        className={({ isActive }) => (isActive ? "navColorChange" : "navLink")}
      >
        Calendar
      </NavLink>
    </S.Header>
  );
};

export default Header;
