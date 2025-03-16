import { useState, useEffect } from "react";
import axios from "axios";
import AddCouponForm from "./AddCouponForm";

const CouponTable = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/coupons");
      setCoupons(response.data);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    }
  };

  const toggleCoupon = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/coupons/toggle/${id}`);
      fetchCoupons(); // Refresh list after toggling
    } catch (error) {
      console.error("Error toggling coupon:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">Coupons</h3>
      <AddCouponForm onCouponAdded={fetchCoupons} />
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Coupon Code</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon._id} className="border-b">
              <td className="p-2">{coupon.couponCode}</td>
              <td className="p-2">
                {coupon.isAvailable ? "Enabled" : "Disabled"}
              </td>
              <td className="p-2">
                <button
                  onClick={() => toggleCoupon(coupon._id)}
                  className={`px-3 py-1 rounded-md ${
                    coupon.isAvailable
                      ? "bg-gray-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {coupon.isAvailable ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponTable;
