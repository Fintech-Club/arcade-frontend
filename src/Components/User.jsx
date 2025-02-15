import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized. Please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:9000/api/v1/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data.data);
      } catch (err) {
        setError("Failed to load user profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center min-h-screen w-full">
      {/* Header */}
      <header className="w-full bg-black text-white p-4 flex items-center">
        <button onClick={() => navigate("/home")} className="text-white text-2xl mr-4">
          &#x2190;
        </button>
        <h2 className="text-xl font-semibold w-full text-center">User Profile</h2>
      </header>

      {/* Profile Card */}
      <div className="flex flex-col items-center mt-6 space-y-6 w-full px-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="max-w-lg w-full bg-white shadow-xl rounded-3xl p-8 space-y-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            {/* Full Name */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Full Name</h3>
              <p className="text-lg mt-2 text-gray-600">{userData.fullname}</p>
            </div>

            {/* Registration Number */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Registration Number</h3>
              <p className="text-lg mt-2 text-gray-600">{userData.regNo}</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
              <p className="text-lg mt-2 text-gray-600">{userData.email}</p>
            </div>

            {/* Balance */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Balance</h3>
              <p className="text-lg mt-2 text-gray-600">${userData.balance}</p>
            </div>
          </div>
        )}

        {/* User ID (Dimmed and Smaller Text Below Card) */}
        {userData && (
          <p className="text-xs text-gray-500" style={{ textAlign: "center" }}>
            User ID: <span className="text-gray-400">{userData._id}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default User;
