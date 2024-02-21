import styled from "@emotion/styled";

export const Header = styled.div`
  // position: relative;

  margin-left: 120%;
  margin-top: 40%;

  @media all and (max-width: 1250px) {
    margin-left: 100px;
    margin-top: 50px;
  }

  @media all and (max-width: 500px) {
    margin-left: 60px;
    margin-top: 60px;
  }
`;

export const FinalDayDescription = styled.div`
  width: 102px;
  height: 31px;

  font-size: 20px;
  font-family: "SeoulHangang";

  @media all and (max-width: 1250px) {
    width: 82px;
    height: 11px;

    font-size: 20px;
  }
`;

export const Dday = styled.div`
  width: 203px;
  height: 96px;

  font-size: 100px;
  font-family: "Jomhuria";

  @media all and (max-width: 1250px) {
    width: 183px;
    height: 76px;

    font-size: 100px;
  }
`;
