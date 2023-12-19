import styled from "@emotion/styled";

export const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToDoListTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  padding: 20px;
`;
export const ToDoListContent = styled.div`
  font-size: 20px;
`;
export const ToDoListItem = styled.div`
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;
