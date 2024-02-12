// Header.jsx
import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <S.Header>
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
    </S.Header>
  );
};

export default Header;
