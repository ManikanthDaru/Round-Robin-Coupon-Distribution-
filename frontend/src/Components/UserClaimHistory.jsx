import { useState, useEffect } from "react";
import axios from "axios";

const UserClaimHistory = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/claims")
      .then((response) => setClaims(response.data))
      .catch((error) => console.error("Error fetching claims:", error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">User Claim History</h3>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">IP Address</th>
            <th className="p-2">Session ID</th>
            <th className="p-2">Claimed Coupon</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim,index) => (
            <tr key={claim._id|| index} className="border-b">
              <td className="p-2">{claim.ip}</td>
              <td className="p-2">{claim.sessionId}</td>
              <td className="p-2">{claim.couponCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserClaimHistory;
