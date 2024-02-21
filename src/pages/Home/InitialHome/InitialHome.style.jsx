// InitialHome.style.jsx
import styled from "@emotion/styled";

export const InitialHome = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 30px;

  gap: 10%;

  @media all and (max-width: 1100px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Calendar = styled.div`
  padding: 0 30px 0 30px;

  background-color: #e1eeff;
  border-radius: 10px;

  @media all and (max-width: 500px) {
    width: 70%;
  }
`;

export const MonthlyStats = styled.div`
  padding: 0 30px 0 30px;

  background-color: #e1eeff;
  border-radius: 10px;

  @media all and (max-width: 500px) {
    width: 70%;
  }
`;
