import styled from "@emotion/styled";

export const DailyStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;

  font-size: 25px;
  letter-spacing: 3px;
  font-weight: bold;

  @media all and (max-width: 500px) {
    font-size: 20px;
    padding: 30px 0 30px 0;
  }
`;

export const Title = styled.div`
  font-family: Jomhuria;
  font-size: 50px;
`;

export const Content = styled.div`
  padding-bottom: 10px;
`;

export const AchievementRate = styled.div`
  font-size: 21px;
  @media all and (max-width: 500px) {
    font-size: 16px;
  }
`;
