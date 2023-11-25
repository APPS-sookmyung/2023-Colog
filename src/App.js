import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import CountDown from "./components/CountDown/CountDown";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Timer /> */}
      <CountDown initialHours={0} initialMinutes={0} initialSeconds={3} />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/mypage" element={<MyPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
