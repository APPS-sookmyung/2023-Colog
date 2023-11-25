import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
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
