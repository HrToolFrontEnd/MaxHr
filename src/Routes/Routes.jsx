import "../App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HrRoutes from "../modules/MaxHr/routes/Index";
import ManagerRoutes from "../modules/Manager/routes/Index";
import AccounRoutest from "../modules/Account/routes/Index";
import Login from "../modules/auth/Login";
function MaxHrRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="hr/*" element={<HrRoutes />} />
        <Route path="manager/*" element={<ManagerRoutes />} />
        <Route path="account/*" element={<AccounRoutest />} />

        <Route path="*" element={<main>NOT FOUND</main>} />
      </Routes>
    </Router>
  );
}

export default MaxHrRoutes;
