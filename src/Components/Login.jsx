import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      console.log("Sending Login Request with:", { regNo, password });
      const response = await axios.post('http://localhost:9000/api/v1/user/login', {
        regNo: regNo,
        password: password
      });

      console.log("Full Response:", response);

      if (response.status === 200) {
        const token = response.data.data.token;
        console.log("Received Token:", token);
        localStorage.setItem('token', token);

        console.log("Stored User Data:", response.data.data.user);
        navigate('/home');
      }
    } catch (error) {
      console.error("Login Error:", error.response);
      setErrorMessage(error.response?.data?.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-200 text-center mb-3 tracking-wide">
          Welcome to <span className="text-gray-100">Finance Carnival</span>
        </h1>
        <h2 className="text-sm md:text-base font-medium text-gray-400 text-center mb-6">
          Organized by <span className="text-gray-300">FinTech Club</span>
        </h2>

        <div className="relative flex justify-center items-center mb-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Registration Number"
              className="w-full px-4 py-2.5 text-sm bg-gray-800 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-2.5 text-sm bg-gray-800 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="text-xs text-gray-400 mt-2 flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-gray-500 bg-gray-700 border-gray-600 rounded"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <span>Show Password</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-sm font-medium bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {errorMessage && <p className="text-red-500 text-center text-sm mt-3">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
