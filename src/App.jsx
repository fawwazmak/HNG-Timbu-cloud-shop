import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
