import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "./pages/Home";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        {/* <Route element={<MainLayout />}/> */}
        <Route element={<MainLayout />}> 
          <Route path="/" element={<Home />} />
          </Route>
      </Routes>
    // </BrowserRouter>
  );
}

export default App;