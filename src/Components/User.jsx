import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    score: "1200",
    balance: "50 coins",
  };

  return (
    <div className="bg-gray-50 flex flex-col items-center min-h-screen w-full">
      {/* Header */}
      <header className="w-full bg-black text-white p-4 flex items-center">
        <button onClick={() => navigate('/home')} className="text-white text-2xl mr-4">
          &#x2190;
        </button>
        <h2 className="text-xl font-semibold w-full text-center">User Profile</h2>
      </header>
      
      {/* Profile Details */}
      <div className="flex flex-col items-center mt-6 space-y-4 w-full px-4">
        {Object.entries(userData).map(([key, value]) => (
          <div key={key} className="w-full max-w-md p-4 border-2 border-purple-400 rounded-lg bg-white shadow-sm">
            <p className="text-gray-700 font-semibold capitalize">{key}</p>
            <p className="text-gray-500 mt-1">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
