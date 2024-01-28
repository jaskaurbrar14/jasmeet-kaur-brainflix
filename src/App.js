import Header from "./components/Header/Header.js";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./Pages/UploadPage/UploadPage.js";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="video" element={</>} /> */}
          {/* <HomePage path="video/:id" element="" /> */}
          <Route path="/video-upload-page" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
