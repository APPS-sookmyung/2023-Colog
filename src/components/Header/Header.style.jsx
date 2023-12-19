import styled from "@emotion/styled";

const hover = `&:hover {
  color: #2a4365;
  cursor: pointer; /* 마우스 커서를 손가락으로 변경 */
}`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #3d5a80;
  color: white;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;

export const Home = styled.div`
  ${hover}
`;
export const Timer = styled.div`
  ${hover}
`;
export const Pomodoro = styled.div`
  ${hover}
`;
export const ToDoList = styled.div`
  ${hover}
`;
export const Calendar = styled.div`
  ${hover}
`;
export const MyPage = styled.div`
  ${hover}
`;
