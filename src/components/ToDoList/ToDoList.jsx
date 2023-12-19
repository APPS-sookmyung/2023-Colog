import * as S from "./ToDoList.style";

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
  return (
    <S.ToDoList>
      <S.ToDoListTitle>To Do List</S.ToDoListTitle>
      <S.ToDoListContent>
        {ToDoListContents.map((content, index) => (
          <S.ToDoListItem key={index}>
            {index + 1}. {content}
          </S.ToDoListItem>
        ))}
      </S.ToDoListContent>
    </S.ToDoList>
  );
};

export default ToDoList;
