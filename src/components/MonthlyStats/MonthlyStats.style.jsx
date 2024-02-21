// MonthlyStats.style.jsx

import styled from "@emotion/styled";

export const MonthlyStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Jomhuria;
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: bold;
`;

export const MonthTitle = styled.h2`
  text-align: center;
  font-size: 45px;
  // padding: -10%;

  @media all and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const BarChart = styled.div`
  // background-color: blue;

  display: flex;
  justify-content: center;

  @media all and (max-width: 500px) {
    font-size: 25px;

    width: 120%;
  }
`;
