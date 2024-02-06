// import React, { useState, useEffect } from 'react';

import * as S from "./InitialHome.style";
import LogoImage from "../../../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const InitialHome = () => {
  const navigate = useNavigate();

  const MoveTimerPage = () => {
    navigate("/timer");
  };
  return (
    <S.InitialHome>
      <S.firstContainer>
        <S.Logo>
          <S.LogoImage src={LogoImage} alt="logo" />
          <S.LogoText>Colog</S.LogoText>
          <S.firstDescriptionText>코딩을 기록하다</S.firstDescriptionText>
        </S.Logo>
      </S.firstContainer>
      <S.secondThridContainer>
        <S.secondContainer>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <S.secondDescription1>
              뿌듯함을 채워주고 성취감을 극대화하는
            </S.secondDescription1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
            <S.secondDescription2>
              프로그래머 전용 타이머 앱
            </S.secondDescription2>
          </AnimationOnScroll>
        </S.secondContainer>

        <S.thridContainer>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <S.thirdDescription1>
              프로그래머만의 뿌듯함을 느끼고 싶으신가요?
              <br />
              <br />
            </S.thirdDescription1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
            <S.thirdDescription2>
              나만의 코딩 기록 서비스, 코록은 타이머, 뽀모도로 등
              <br />
              집중을 위한 최적의 환경을 제공하고 월 별 통계를 통해
              <br />
              성취감을 극대화합니다. 코딩 시간, 기술 블로그 업로드 등
              <br />
              코딩 기록을 한 곳에 모아 보세요!
            </S.thirdDescription2>
          </AnimationOnScroll>
        </S.thridContainer>
      </S.secondThridContainer>
      <S.fourthContainer>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <S.startButton onClick={MoveTimerPage}>START!</S.startButton>
          <S.copyRightText>Copyrightⓒ2023 Ajeong</S.copyRightText>
        </AnimationOnScroll>
      </S.fourthContainer>
    </S.InitialHome>
  );
};

export default InitialHome;
