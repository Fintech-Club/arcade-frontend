import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Scanner from "./Components/Scanner";
import Payment from "./Components/Payment";
import History from "./Components/History";
import Money from "./Components/Money";
import User from "./Components/User";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/money" element={<Money />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
