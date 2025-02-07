import React from 'react';
import { useNavigate } from 'react-router-dom';
import PROFILE from '../assets/profile_icon.png';
import home from '../assets/Home_page.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-between min-h-screen">
      {/* Header */}
      <header className="w-full bg-black text-white p-3 flex justify-between items-center shadow-md">
      <h1 className="font-semibold tracking-wide text-center w-full" style={{ fontSize: '30px' }}>Finance Carnival</h1>
        <button onClick={() => navigate('/User')} className="focus:outline-none">
          <div className="w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
            <img src={PROFILE} alt="User Profile" className="object-cover" />
          </div>
        </button>
      </header>
      
      {/* Main Section */}
      <main className="flex flex-col items-center space-y-5 mt-8 w-4/5">
        <button onClick={() => navigate('/Scanner')} className="w-full py-4 px-6 text-lg font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300 shadow-md">
          Make Payment
        </button>
        <button onClick={() => navigate('/History')} className="w-full py-4 px-6 text-lg font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300 shadow-md">
          Game History
        </button>
        <button onClick={() => navigate('/Money')} className="w-full py-4 px-6 text-lg font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300 shadow-md">
          Add Coins to Wallet
        </button>
      </main>
      
      {/* Image Section */}
      <section className="w-4/5 mx-auto flex justify-center mt-8">
        <img src={home} alt="Illustration" className="rounded-lg w-full" />
      </section>
    </div>
  );
};

export default Home;
