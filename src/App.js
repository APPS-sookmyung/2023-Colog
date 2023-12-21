import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InitialHome from "./pages/Home/InitialHome/InitialHome";
import TimerPage from "./pages/TimerPage/TimerPage";
import PomodoroPage from "./pages/PomodoroPage/PomodoroPage";
import ToDoListPage from "./pages/ToDoListPage";
import TotalStudyTime from "./components/TotalStudy/TotalStudy";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import Calendar from "./components/Calendar/Calendar";

const App = () => {
  return (
    <Router>
      <Calendar />
      {/* <Routes>
          <Route path="/" element={<InitialHome />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/todolist" element={<ToDoListPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes> */}
    </Router>
  );
};

export default App;
