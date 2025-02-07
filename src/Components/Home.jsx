import React from 'react';
import { useNavigate } from 'react-router-dom';
import PROFILE from '../assets/profile_icon.png';
import home from '../assets/Home_page.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-between min-h-screen">
      <header className="w-full bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">FINANCE CARNIVAL</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/User')}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
                <img src={PROFILE} alt="User Profile" className="object-cover" />
              </div>
            </div>
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center space-y-4 mt-8">
        <button onClick={() => navigate('/Scanner')} className="w-full py-4 px-6 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300">
          <span className="flex items-center justify-center">Make Payment</span>
        </button>
        <button onClick={() => navigate('/History')} className="w-full py-4 px-6 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300">
          <span className="flex items-center justify-center">Game History</span>
        </button>
        <button onClick={() => navigate('/Money')} className="w-full py-4 px-6 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300">
          <span className="flex items-center justify-center">Add Coins to Wallet</span>
        </button>
      </main>
      <section className="w-4/5 mx-auto flex justify-center mt-8">
        <img src={home} alt="Illustration" className="rounded-lg" />
      </section>
    </div>
  );
};

export default Home;
