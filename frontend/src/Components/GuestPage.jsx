import { useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast"
const GuestPage = () => {
  const [coupon, setCoupon] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Claim Coupon
  const claimCoupon = () => {
    setLoading(true);
    axios
      .post(
        "http://localhost:5000/api/coupons/claim",
        {}
      )
      .then((response) => {
        setCoupon({ couponCode: response.data.message.split(": ")[1] }); // Extract coupon code from message
        toast.success("Coupon claimed successfully!");
      })
      .catch((error) => {
        setMessage(error.response?.data?.message || "Error claiming coupon.");
        toast.error(error.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-2xl font-bold text-gray-800">Claim Your Coupon</h2>

      

        {coupon ? (
          <div className="mt-4">
            <p className="text-lg text-green-600">Your Coupon:</p>
            <p className="text-xl font-semibold bg-green-100 text-green-800 px-3 py-2 rounded-md">
              {coupon.couponCode}
            </p>
          </div>
        ) : (
          <p className="text-gray-600 mt-2">
            Click below to receive a discount coupon.
          </p>
        )}

        <button
          onClick={claimCoupon}
          className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-blue-600 disabled:bg-gray-300"
          disabled={coupon || loading}
        >
          {loading ? "Processing..." : "Claim Now"}
        </button>
      </div>
    </div>
  );
};

export default GuestPage;
