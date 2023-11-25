import React, { useState } from "react";
import * as S from "./Header.style";

const Header = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const handleNavClick = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <S.Header>
      <S.Logo href="/">Colog</S.Logo>
      <S.Nav>
        <S.NavBox onClick={handleNavClick}>
          <span>Menu</span>
          {showNavItems && (
            <div>
              <a href="/">Home</a>
              <a href="/calendar">Calendar</a>
              <a href="/mypage">MyPage</a>
            </div>
          )}
        </S.NavBox>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
