import "./App.css";
import Header from "./components/Header/Header";
import InitialHome from "./pages/Home/InitialHome/InitialHome";
import Timer from "./components/Timer/Timer";
import CountDown from "./components/CountDown/CountDown";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <InitialHome /> */}
      <Timer />
      <CountDown initialHours={0} initialMinutes={0} initialSeconds={3} />
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
