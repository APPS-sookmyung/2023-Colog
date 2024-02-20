import React from "react";
import ToDoList from "../../components/ToDoList/ToDoList";

import * as S from "./ToDoListPage.style";

const ToDoListPage = () => {
  // let targetTimeSecond = 5;
  return (
    <S.ToDoListPage>
      <S.ToDoList>
        <ToDoList />
      </S.ToDoList>
    </S.ToDoListPage>
  );
};

export default ToDoListPage;
