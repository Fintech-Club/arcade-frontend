import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [registration, setRegistration] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate(); // ✅ React Router Navigation Hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUsername = 'user';
    const validPassword = 'pass';

    if (registration === validUsername && password === validPassword) {
      navigate('/home'); // ✅ Redirect to Home Page without reloading
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="w-full text-3xl md:text-4xl font-bold mb-4 text-white text-center">
          Welcome To Finance Carnival
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-white text-center mb-6">
          Organised by FinTech Club
        </h2>
        {/* Profile Avatar with Orbiting Dots */}
        <div className="relative flex justify-center items-center mb-8">
          <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Registration No."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="text-sm text-gray-500 mt-2 block">
              <input
                type="checkbox"
                className="mr-2"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show Password
            </label>
          </div>
          <button type="submit" className="w-full py-3 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors">
            Login
          </button>
        </form>
        {errorMessage && <p className="text-red-500 text-center mt-4">Invalid credentials. Please try again.</p>}
      </div>
    </div>
  );
};

export default Login;
