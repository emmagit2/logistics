import { BrowserRouter, Routes, Route } from "react-router-dom";

import Services from "@/page/services";
import AboutUs from "@/page/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  );
}
