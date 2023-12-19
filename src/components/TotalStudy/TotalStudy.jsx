import * as S from "./TotalStudy.style";

const TotalStudy = () => {
  return (
    <S.TotalStudy>
      <S.TotalStudyTape></S.TotalStudyTape>
      <S.TotalStudyPostIt>
        <S.TotalStudyContent1>
          <S.TotalStudyTitle>STUDY</S.TotalStudyTitle>
          <S.TotalStudyDay>Day 10</S.TotalStudyDay>
          <S.TotalStudyTime>23H 36M</S.TotalStudyTime>
        </S.TotalStudyContent1>
        <S.TotalStudyContent2>
          <S.TotalStudyTitle>TODO</S.TotalStudyTitle>
          <S.TotalStudyGoal>3H 00M</S.TotalStudyGoal>
          <S.TotalStudyDDay>D-10</S.TotalStudyDDay>
        </S.TotalStudyContent2>
      </S.TotalStudyPostIt>
    </S.TotalStudy>
  );
};

export default TotalStudy;
