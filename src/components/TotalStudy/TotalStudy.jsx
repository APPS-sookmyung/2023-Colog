import * as S from "./TotalStudy.style";

const TotalStudy = () => {
  return (
    <S.TotalStudy>
      <S.Explanation>
        <S.UpdateTimeExplanation>
          오전 4시 기준으로 시간을 업데이트합니다
        </S.UpdateTimeExplanation>
        <br />
        오늘의 목표 시간은 5h 5m 5s 이에요
        <br />
        목표를 2 / 9 완료했어요
      </S.Explanation>
    </S.TotalStudy>
  );
};

export default TotalStudy;
