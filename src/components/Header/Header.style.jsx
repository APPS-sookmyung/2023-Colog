import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #3d5a80;
  border-radius: 10px;
  color: white;

  padding-top: 20px;
  padding-bottom: 20px;

  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease; /* 애니메이션 속성 추가 */

  &.scrolled {
    transform: translateY(-100%); /* 스크롤 내려왔을 때 숨기기 */
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
    margin-left: 120px;
    margin-right: 120px;
    &:hover {
      color: #2a4365;
      cursor: pointer;
    }
  }
`;
