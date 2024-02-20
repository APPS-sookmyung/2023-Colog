import styled from "@emotion/styled";

export const ToDoListPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10%;
  padding-top: 30px;

  color: #4e7ab2;
  letter-spacing: 1px;
`;

export const ToDoList = styled.div`
  background-color: #e1eeff;
  padding: 0 40px 40px 40px;
  border-radius: 10px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ToDoBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1%;

  img {
    width: 63%;
  }
`;
