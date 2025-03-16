import { useState } from "react";
import CouponTable from "./CouponTable";
import UserClaimHistory from "./UserClaimHistory";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("coupons");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-4 shadow-md rounded-md flex justify-between">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "coupons" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("coupons")}
        >
          Coupons
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "history" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("history")}
        >
          User Claim History
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "coupons" ? <CouponTable /> : <UserClaimHistory />}
      </div>
    </div>
  );
};

export default AdminDashboard;
