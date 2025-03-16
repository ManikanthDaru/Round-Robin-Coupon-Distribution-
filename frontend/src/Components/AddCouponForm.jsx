import { useState } from "react";
import axios from "axios";

const AddCouponForm = ({ onCouponAdded }) => {
  const [couponCode, setCouponCode] = useState("");
  const [description, setDescription] = useState("");

  const addCoupon = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/coupons/add", {
        couponCode,
        description,
      });
      onCouponAdded();
      setCouponCode("");
      setDescription("");
    } catch (error) {
      console.error("Error adding coupon:", error);
    }
  };

  return (
    <form onSubmit={addCoupon} className="mt-4">
      <input
        type="text"
        placeholder="Coupon Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="border p-2 mr-2 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2 rounded-md"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add Coupon
      </button>
    </form>
  );
};

export default AddCouponForm;
