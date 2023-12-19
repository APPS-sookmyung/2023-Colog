import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InitialHome from "./pages/Home/InitialHome/InitialHome";
import TimerPage from "./pages/TimerPage/TimerPage";
import PomodoroPage from "./pages/PomodoroPage/PomodoroPage";
import ToDoListPage from "./pages/ToDoListPage";
import TotalStudyTime from "./components/TotalStudy/TotalStudy";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InitialHome />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/todolist" element={<ToDoListPage />} />
          <Route path="/totalstudytime" element={<TotalStudyTime />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
