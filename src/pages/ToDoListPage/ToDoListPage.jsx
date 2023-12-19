import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CountDown from "../../components/CountDown/CountDown";

import * as S from "./ToDoListPage.style";

const ToDoListPage = () => {
  // let targetTimeSecond = 5;
  return (
    <S.ToDoListPage>
      <Header />
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          {/* 투두리스트 넣을 예정(기능) */}
          {/* TotalStudyTime 기능 */}
        </S.NonSidebar>
      </S.Content>
    </S.ToDoListPage>
  );
};

export default ToDoListPage;
