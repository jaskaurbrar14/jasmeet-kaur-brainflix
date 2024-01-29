import Header from "./components/Header/Header.js";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./Pages/UploadPage/UploadPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <hr className="divider" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/video-upload-page" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
