import Timer from "../../../components/Timer/Timer";
import CountDown from "../../../components/CountDown/CountDown";
import * as S from "./TimerPage.style";

const TimerPage = () => {
  return (
    <S.TimerPage>
      <S.Timer>
        <Timer />
      </S.Timer>
      <S.CountDown>
        <CountDown initialHours={0} initialMinutes={0} initialSeconds={3} />
      </S.CountDown>
    </S.TimerPage>
  );
};

export default TimerPage;
