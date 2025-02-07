import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();
  const gamesPlayed = [
    { gameName: "Game 1", amount: "20 coins", score: "1500" },
    { gameName: "Game 2", amount: "30 coins", score: "2000" },
    { gameName: "Game 3", amount: "15 coins", score: "1200" },
  ];

  useEffect(() => {
    const gameHistoryContainer = document.getElementById("game-history");
    gamesPlayed.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.className = "mb-4 p-4 border border-gray-300 rounded-md bg-gray-50";
      gameCard.innerHTML = `
        <p class="font-semibold text-gray-700">Game Details: ${game.gameName}</p>
        <p class="text-gray-600">Amount: ${game.amount}</p>
        <p class="text-gray-600">Score: ${game.score}</p>
      `;
      gameHistoryContainer.appendChild(gameCard);
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <button onClick={() => navigate('/home')} className="absolute top-4 left-4 text-white text-2xl hover:text-gray-300 transition duration-200">
        &#x2190;
      </button>
      <div id="game-history" className="mx-4 mt-10 border border-dashed border-purple-400 p-4 rounded-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Games Played</h2>
        {/* Game history will be dynamically populated here */}
      </div>
    </div>
  );
};

export default History;
