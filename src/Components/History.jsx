import React from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();

  const gamesPlayed = [
    { gameName: "Game 1", amount: "20 coins", score: "1500" },
    { gameName: "Game 2", amount: "30 coins", score: "2000" },
    { gameName: "Game 3", amount: "15 coins", score: "1200" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center w-full">
      {/* Header */}
      <div className="w-full bg-black text-white p-4 flex items-center relative">
        <button onClick={() => navigate('/home')} className="absolute left-4 text-white text-2xl bg-transparent border-none p-0">
          &#x2190;
        </button>
        <h2 className="text-xl font-semibold w-full text-center">Games Played</h2>
      </div>

      {/* Game History List */}
      <div className="w-full max-w-md mt-6 p-4">
        {gamesPlayed.map((game, index) => (
          <div key={index} className="w-full p-4 mb-4 border border-gray-300 rounded-md bg-white shadow-md">
            <p className="font-semibold text-gray-700">Game: {game.gameName}</p>
            <p className="text-gray-600">Amount: {game.amount}</p>
            <p className="text-gray-600">Score: {game.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
