import React from "react";
import ToDoList from "../../components/ToDoList/ToDoList";
import TotalStudy from "../../components/TotalStudy/TotalStudy";

import * as S from "./ToDoListPage.style";

const ToDoListPage = () => {
  // let targetTimeSecond = 5;
  return (
    <S.ToDoListPage>
      <S.ToDoList>
        <ToDoList />
      </S.ToDoList>
      <TotalStudy />
    </S.ToDoListPage>
  );
};

export default ToDoListPage;
