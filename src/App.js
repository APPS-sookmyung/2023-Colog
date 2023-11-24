// 기능 import
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 파일 import
import "./App.css";
import Home from "./pages/home/Home";
import MyPage from "./pages/myPage/MyPage.js";
import Header from "./components/Header.js";
import Sidebar from "./pages/sidebar/Sidebar.js";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="divisionScreen">
        <section className="sidebar">
          <Sidebar />
        </section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
