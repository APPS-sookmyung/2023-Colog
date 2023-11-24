// 기능 import
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 파일 import
import "./App.css";
import Home from "./pages/home/Home";
import MyPage from "./pages/myPage/MyPage.js";
import Header from "./components/Header.js";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <div className="App">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
