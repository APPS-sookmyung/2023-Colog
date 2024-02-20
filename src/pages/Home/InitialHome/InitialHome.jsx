// import React, { useState, useEffect } from 'react';

import Calendar from "../../../components/Calendar/Calendar";
import * as S from "./InitialHome.style";

const InitialHome = () => {
  return (
    <S.InitialHome>
      <S.Calendar>
        <Calendar />
      </S.Calendar>
    </S.InitialHome>
  );
};

export default InitialHome;
