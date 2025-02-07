import React from 'react';
import { useNavigate } from 'react-router-dom';

const Scanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col items-center justify-end h-screen pb-12">
      <button onClick={() => navigate('/home')} className="absolute top-4 left-4 text-white bg-white text-2xl p-2 rounded-full">
        &#x2190;
      </button>
  
      <button id="scanButton" className="bg-black text-white px-6 py-3 rounded-lg text-lg" onClick={() => navigate('/payment')}>
        Scan
      </button>
    </div>
  );
};

export default Scanner;
