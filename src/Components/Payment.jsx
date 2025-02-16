import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import money from '../assets/Money.png';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stallId = queryParams.get("stallId");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let gameDetails;

  switch (stallId) {
    case "1":
      gameDetails = "Fun Game One";
      break;
    case "2":
      gameDetails = "Fun Game Two";
      break;
    case "3":
      gameDetails = "Fun Game Three";
      break;
    default:
      gameDetails = "Invalid Game Stall";
      break;
  }

  const handlePayment = async () => {
    if (!stallId || gameDetails === "Invalid Game Stall") {
      setError("Invalid stall selected.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized. Please Login to continue.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:9000/api/v1/user/spendmoney",
        { stallNo: parseInt(stallId) }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setError("");
      navigate("/home");
    } catch (error) {
      setError(error.response?.status === 401 ? "Unauthorized" : "Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center w-full px-6">
      {/* Header with Transparent Back Button */}
      <div className="w-screen bg-black text-white p-4 flex items-center relative">
        <button 
          onClick={() => navigate('/scanner')} 
          className="absolute left-4 text-white text-2xl bg-transparent border-none p-0"
        >
          &#x2190;
        </button>
        <h2 className="text-xl font-semibold w-full text-center">Payment</h2>
      </div>

      {/* Payment Image */}
      <div className="flex justify-center mt-6">
        <img src={money} alt="Payment" className="w-40 h-40" />
      </div>

      {/* Game Details */}
      <div className="w-full max-w-md mt-6 p-6 border border-dashed border-purple-400 rounded-lg bg-white shadow-md">
        <p className="font-semibold text-gray-700 text-lg">Game Details</p>
        <p className="w-full p-3 border rounded-lg mt-1 bg-gray-200 text-lg font-medium text-gray-800">
          {gameDetails}
        </p>
      </div>

      {error && (
        <div className="w-full max-w-md mt-4 p-3 text-center rounded-lg bg-red-500 text-white text-lg font-medium">
          {error}
        </div>
      )}

      {/* Pay Button */}
      <div className="w-full max-w-md mt-6 mb-6 px-4">
        <button 
          onClick={handlePayment} 
          className={`w-full bg-black text-white py-3 rounded-lg transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </div>
    </div>
  );
};

export default Payment;
