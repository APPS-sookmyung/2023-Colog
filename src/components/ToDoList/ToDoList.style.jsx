import styled from "@emotion/styled";

export const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const ToDoListTitle = styled.div`
  font-family: Jomhuria;
  font-size: 80px;
  font-weight: bold;
  padding: 20px;
  letter-spacing: 5px;
  color: #61a5ff;
`;
export const ToDoListContent = styled.div`
  font-family: SeoulHangang;
  font-size: 20px;
  color: #585858;
`;
export const ToDoListItem = styled.div`
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;
