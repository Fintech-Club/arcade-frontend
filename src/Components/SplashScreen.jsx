import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FTCLogo from '../assets/FTC_logo.png';
import EventLogo from '../assets/event_logo.png';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Navigate after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center w-full px-4">
      {/* Logos Section */}
      <div className="flex flex-col items-center space-y-4 w-full">
        <img src={FTCLogo} alt="FinTech Club Logo" className="w-2/3 max-w-[180px] md:max-w-[220px] animate-fade-in" />
        <div className="text-white text-3xl md:text-4xl">&times;</div>
        <img src={EventLogo} alt="Finance Carnival Logo" className="w-2/3 max-w-[180px] md:max-w-[220px] animate-fade-in" />
      </div>

      {/* Loading Spinner */}
      <div className="mt-4 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
