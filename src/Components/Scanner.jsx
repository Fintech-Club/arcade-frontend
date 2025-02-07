import React from 'react';
import { useNavigate } from 'react-router-dom';

const Scanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center h-screen w-full relative">
      {/* Back Button */}
      <button onClick={() => navigate('/home')} 
        className="absolute top-4 left-4 bg-black text-white text-2xl p-2 rounded-full">
        &#x2190;
      </button>
  
      {/* Scan Button */}
      <button id="scanButton" 
        className="bg-black text-white px-6 py-3 rounded-lg text-lg fixed bottom-12" onClick={() => navigate('/payment')}>
        Scan
      </button>
    </div>
  );
};

export default Scanner;
