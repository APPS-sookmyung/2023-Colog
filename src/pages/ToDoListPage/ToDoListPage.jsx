import React from "react";
import ToDoList from "../../components/ToDoList/ToDoList";
import TotalStudy from "../../components/TotalStudy/TotalStudy";
import ToDoBar from "../../assets/img/ToDoBar.png";

import * as S from "./ToDoListPage.style";

const ToDoListPage = () => {
  return (
    <S.ToDoListPage>
      <S.ToDoList>
        <ToDoList />
      </S.ToDoList>
      <S.RightSection>
        <TotalStudy />
        <S.ToDoBar>
          <img src={ToDoBar} alt="ToDoBar" />
        </S.ToDoBar>
      </S.RightSection>
    </S.ToDoListPage>
  );
};

export default ToDoListPage;
