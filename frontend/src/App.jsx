import RoleSelection from "./Components/RoleSelection.jsx";
import GuestPage from "./Components/GuestPage.jsx";
import AdminLogin from "./Components/AdminLogin.jsx"
import AdminDashboard from "./Components/AdminDashboard.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute  from "./Components/ProtectedRoute.jsx";
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
