import { Routes, Route } from "react-router-dom";
import ThankYou from "pages/ThankYou";
import Home from "pages/Home";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default AppRoutes;
