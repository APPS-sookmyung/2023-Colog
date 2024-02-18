// NavBar.jsx
import React from "react";
import * as S from "./NavBar.style";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <S.NavBar>
      <S.NavBarBackgroundColor>
        <S.RightBar
          top={
            location.pathname === "/"
              ? "115px"
              : location.pathname === "/timer"
              ? "230px"
              : location.pathname === "/todolist"
              ? "340px"
              : "0px"
          }
          left={
            location.pathname === "/"
              ? "23%"
              : location.pathname === "/timer"
              ? "46%"
              : location.pathname === "/todolist"
              ? "68%"
              : "0px"
          }
        >
          <S.ClickBar />
        </S.RightBar>
        <NavLink to="/">
          {window.location.pathname === "/" ? (
            <S.HomeButtonColor />
          ) : (
            <S.HomeButton />
          )}
        </NavLink>

        <NavLink to="/timer">
          {window.location.pathname === "/timer" ? (
            <S.TimerButtonColor />
          ) : (
            <S.TimerButton />
          )}
        </NavLink>

        <NavLink to="/todolist">
          {window.location.pathname === "/todolist" ? (
            <S.ToDoListButtonColor />
          ) : (
            <S.ToDoListButton />
          )}
        </NavLink>
        <S.EmptySpace> </S.EmptySpace>
      </S.NavBarBackgroundColor>
    </S.NavBar>
  );
};

export default NavBar;
