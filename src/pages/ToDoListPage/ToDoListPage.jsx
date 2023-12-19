import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ToDoList from "../../components/ToDoList/ToDoList";

import * as S from "./ToDoListPage.style";

const ToDoListPage = () => {
  // let targetTimeSecond = 5;
  return (
    <S.ToDoListPage>
      <Header />
      <S.Content>
        <Sidebar />
        <S.NonSidebar>
          <ToDoList />
          {/* TotalStudyTime 기능 */}
        </S.NonSidebar>
      </S.Content>
    </S.ToDoListPage>
  );
};

export default ToDoListPage;
