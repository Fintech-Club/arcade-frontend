import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import money from '../assets/Money.png';

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const gameDetails = "Example Game Name";
    const amount = "50 coins";
    document.getElementById("game-details").textContent = gameDetails;
    document.getElementById("amount").textContent = amount;
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <button onClick={() => navigate('/scanner')} className="absolute top-4 left-4 text-white text-2xl">
        &#x2190;
      </button>
      <div className="flex justify-center mt-12">
        <img src={money} alt="Payment" className="w-48 h-48" />
      </div>
      <div className="mx-4 border border-dashed border-purple-400 p-4 rounded-md">
        <p className="block font-semibold text-gray-700">Game Details</p>
        <p id="game-details" className="w-full p-2 border rounded mt-1 bg-gray-200">Loading...</p>
        <p className="block font-semibold text-gray-700 mt-3">Amount</p>
        <p id="amount" className="w-full p-2 border rounded mt-1 bg-gray-200">Loading...</p>
      </div>
      <div className="mx-4 mt-4 mb-6">
        <button className="w-full bg-black text-white py-2 rounded">Pay</button>
      </div>
    </div>
  );
};

export default Payment;
