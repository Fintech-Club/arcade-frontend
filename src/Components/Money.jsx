import React from 'react';
import { useNavigate } from 'react-router-dom';

const Money = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
      <button onClick={() => navigate('/home')} className="absolute top-4 left-4 text-white text-2xl">
        &#x2190;
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <p className="text-lg font-serif text-gray-900">
          To add Money to your wallet you need <br /> to visit Main desk.
        </p>
        <p className="text-right mt-4 text-gray-700 font-medium">~ FTC Team</p>
      </div>
    </div>
  );
};

export default Money;
