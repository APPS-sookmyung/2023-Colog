import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #3d5a80;
  color: white;

  padding-top: 20px;
  padding-bottom: 20px;

  justify-content: space-around;
  font-size: 20px;
  font-weight: bold;

  width: 100%;
  transition: transform 0.3s ease; /* 애니메이션 속성 추가 */

  &.scrolled {
    transform: translateY(-100%); /* 스크롤 내려왔을 때 숨기기 */
  }

  .navLink {
    letter-spacing: 2px;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #2a4365;
      cursor: pointer;
    }
  }

  // 색 변경
  .navColorChange {
    color: #2a4365;
    letter-spacing: 2px;
    text-decoration: none;
  }
`;
