import "./App.css";
import Header from "./components/Header/Header";
import InitialHome from "./pages/Home/InitialHome/InitialHome";
import Timer from "./components/Timer/Timer";
import CountDown from "./components/CountDown/CountDown";
import Sidebar from "./components/Sidebar/Sidebar";
import TimerPage from "./pages/TimerPage/TimerPage";
import PomodoroPage from "./pages/PomodoroPage/PomodoroPage";
import ToDoListPage from "./pages/ToDoListPage";
import ToDoList from "./components/ToDoList/ToDoList";
import TotalStudyTime from "./components/TotalStudy/TotalStudy";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <InitialHome /> */}
      {/* <TimerPage /> */}
      {/* <PomodoroPage /> */}
      <ToDoListPage />
      {/* <TotalStudyTime /> */}
      {/* <ToDoList /> */}
      {/* <CountDown initialHours={0} initialMinutes={0} initialSeconds={3} /> */}
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
