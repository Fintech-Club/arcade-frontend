import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import money from '../assets/Money.png';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stallId = queryParams.get("stallId") || "Unknown Stall";

  // Game details and amount (mocked for now)
  const gameDetails = `Game at Stall ${stallId}`;
  const amount = "50 coins";

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

      {/* Game Details & Amount */}
      <div className="w-full max-w-md mt-6 p-6 border border-dashed border-purple-400 rounded-lg bg-white shadow-md">
        <p className="font-semibold text-gray-700">Game Details</p>
        <p className="w-full p-3 border rounded-lg mt-1 bg-gray-200">{gameDetails}</p>
        <p className="font-semibold text-gray-700 mt-4">Amount</p>
        <p className="w-full p-3 border rounded-lg mt-1 bg-gray-200">{amount}</p>
      </div>

      {/* Pay Button */}
      <div className="w-full max-w-md mt-6 mb-6 px-4">
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
