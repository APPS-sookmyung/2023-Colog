import * as S from "./ToDoList.style";
import { useState } from "react";

let ToDoListContents = [
  "User MicroService - 사용자 조회 ①",
  "User Microservice - Gateway 연동",
  " User Microservice - 사용자 조회 ②",
  "User Microservice - 사용자 조회 ③",
  " Catalogs Microservice - 개요",
  "Catalogs Microservice - 기능 구현 ①",
  "Catalogs Microservice - 기능 구현 ②",
  "도서관 책 반납",
  "도서관 연체료 내기",
];

const ToDoList = () => {
  const [clickedIndices, setClickedIndices] = useState([]);

  const contentClicked = (index) => {
    if (clickedIndices.includes(index)) {
      setClickedIndices(clickedIndices.filter((i) => i !== index));
    } else {
      setClickedIndices([...clickedIndices, index]);
    }
  };

  return (
    <S.ToDoList>
      <S.ToDoListTitle>TODO</S.ToDoListTitle>
      <S.ToDoListContent>
        {ToDoListContents.map((content, index) => (
          <S.ToDoListItem
            key={index}
            onClick={() => contentClicked(index)}
            style={{
              color: clickedIndices.includes(index) ? "lightGray" : "inherit",
              textDecoration: clickedIndices.includes(index)
                ? "line-through"
                : "none",
            }}
          >
            {index + 1}. {content}
          </S.ToDoListItem>
        ))}
      </S.ToDoListContent>
    </S.ToDoList>
  );
};

export default ToDoList;
