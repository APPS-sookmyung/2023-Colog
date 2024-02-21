// Header.jsx
import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <S.FinalDayDescription>마감까지</S.FinalDayDescription>
      <S.Dday>D-23</S.Dday>
    </S.Header>
  );
};

export default Header;
