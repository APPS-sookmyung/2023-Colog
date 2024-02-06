import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InitialHome from "./pages/Home/InitialHome/InitialHome";
import TimerPage from "./pages/TimerPage/TimerPage";
import PomodoroPage from "./pages/PomodoroPage/PomodoroPage";
import ToDoListPage from "./pages/ToDoListPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

const App = () => {
  let [modal, setModal] = useState(false);

  const changeModalState = (state) => {
    setModal(state);
  };

  return (
    <Router>
      <Header />
      {modal == true ? <Footer /> : null}
      <Routes>
        <Route path="/" element={<InitialHome />} />
        <Route
          path="/timer"
          element={<TimerPage changeModal={changeModalState} />}
        />
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
};

export default App;
