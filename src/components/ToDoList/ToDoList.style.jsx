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

  @media all and (max-width: 500px) {
    font-size: 60px;
  }
`;
export const ToDoListContent = styled.div`
  font-family: SeoulHangang;
  font-size: 20px;
  color: #585858;

  @media all and (max-width: 500px) {
    font-size: 16px;
    gap: 5px;
    line-height: 25px;
  }
`;
export const ToDoListItem = styled.div`
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;
