import "./App.css";
import Header from "./components/Header/Header";
import InitialHome from "./pages/Home/InitialHome/InitialHome";
import Timer from "./components/Timer/Timer";
import CountDown from "./components/CountDown/CountDown";
import Sidebar from "./components/Sidebar/Sidebar";
import TimerPage from "./pages/TimerPage/TimerPage";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <InitialHome /> */}
      <TimerPage />
      {/* <CountDown initialHours={0} initialMinutes={0} initialSeconds={3} /> */}
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
