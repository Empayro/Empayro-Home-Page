import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        {/* <Route element={<MainLayout />}/> */}
        <Route element={<MainLayout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          </Route>
      </Routes>
    // </BrowserRouter>
  );
}

export default App;