import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FTCLogo from '../assets/FTC_logo.png';
import EventLogo from '../assets/event_logo.png';


const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Navigates to Login screen after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center">
      {/* Logos Section */}
      <div className="flex flex-col items-center space-y-4">
        <img src={FTCLogo} alt="FinTech Club Logo" className="w-2/3 max-w-xs animate-fade-in" />
        <div className="text-white text-4xl">&times;</div>
        <img src={EventLogo} alt="Finance Carnival Logo" className="w-2/3 max-w-xs animate-fade-in" />
      </div>

      {/* Loading Spinner */}
      <div className="mt-6 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
