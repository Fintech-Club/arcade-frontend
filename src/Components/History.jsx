import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const History = () => {
  const navigate = useNavigate();
  const [paymentHistory, setPaymentHistory] = useState([]); // Renamed state to match data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized: No token found.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:9000/api/v1/user/payment-history", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Extract payments correctly
        const payments = response.data?.data?.payments || [];
        setPaymentHistory(payments);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch payment history.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center w-full">
      {/* Header */}
      <div className="w-full bg-black text-white p-4 flex items-center relative">
        <button 
          onClick={() => navigate('/home')} 
          className="absolute left-4 text-white text-2xl bg-transparent border-none p-0"
        >
          &#x2190;
        </button>
        <h2 className="text-xl font-semibold w-full text-center">Payment History</h2>
      </div>

      {/* Payment History List */}
      <div className="w-full max-w-md mt-6 p-4">
        {loading ? (
          <p className="text-gray-600 text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : paymentHistory.length === 0 ? (
          <p className="text-gray-500 text-center">No payments made yet.</p>
        ) : (
          paymentHistory.map((payment, index) => (
            <div key={index} className="w-full p-4 mb-4 border border-gray-300 rounded-md bg-white shadow-md">
              <p className="font-semibold text-gray-700">Stall: {payment.stall}</p>
              <p className="text-gray-600">Amount: ₹{payment.paymentAmount}</p>
              <p className="text-gray-600">Date: {new Date(payment.date).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>

      {/* Go Back Button */}
      <div className="w-full max-w-md mt-6 mb-6 px-4">
        <button 
          onClick={() => navigate("/home")} 
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default History;
