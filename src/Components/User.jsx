import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    score: "1200",
    balance: "50 coins",
  };

  useEffect(() => {
    document.querySelectorAll("p:nth-child(2)").forEach((p, index) => {
      p.textContent = Object.values(userData)[index];
    });
  }, []);

  return (
    <div className="bg-white h-screen flex flex-col">
      <header className="w-full bg-black text-white p-4 flex justify-center items-center relative">
        <button onClick={() => navigate('/home')} className="absolute left-4 text-white text-2xl">
          &#x2190;
        </button>
        <h1 className="text-xl font-bold">User Profile</h1>
      </header>
      <div className="flex flex-col items-center mt-8 space-y-6">
        <div className="w-4/5 sm:w-96 p-4 border-2 border-dashed border-purple-400 rounded-md">
          <p className="text-gray-700 font-semibold">User Name</p>
          <p className="text-gray-500 mt-1">Loading...</p>
        </div>
        <div className="w-4/5 sm:w-96 p-4 border-2 border-dashed border-purple-400 rounded-md">
          <p className="text-gray-700 font-semibold">Email Address</p>
          <p className="text-gray-500 mt-1">Loading...</p>
        </div>
        <div className="w-4/5 sm:w-96 p-4 border-2 border-dashed border-purple-400 rounded-md">
          <p className="text-gray-700 font-semibold">User Score</p>
          <p className="text-gray-500 mt-1">Loading...</p>
        </div>
        <div className="w-4/5 sm:w-96 p-4 border-2 border-dashed border-purple-400 rounded-md">
          <p className="text-gray-700 font-semibold">Wallet Balance</p>
          <p className="text-gray-500 mt-1">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default User;
