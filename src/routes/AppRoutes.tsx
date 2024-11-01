import { Routes, Route } from "react-router-dom";
import ThankYou from "pages/ThankYou";
import Home from "pages/Home";
import Welcome from "pages/Welcome";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default AppRoutes;
