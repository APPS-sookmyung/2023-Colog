// Header.style.jsx
import styled from "@emotion/styled";

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

  .nav-link {
    text-decoration: none;
    color: inherit;
    margin-right: 20px;
    &:hover {
      color: #2a4365;
      cursor: pointer;
    }
  }
`;
