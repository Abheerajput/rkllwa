import React, { useState } from 'react';
import axios from 'axios';
import logo from "../../assets/icons/headicon.svg"
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const RequestPasswordReset = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState(''); // User input email
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleButtonClick = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/sendForgotLink`,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      setLoading(false);
      console.log("Response:", response);
      
      if (response.status === 200) {
        // Store the email in localStorage
        
        setSuccess("A password reset link has been sent to your email.");
        setError('');
        setTimeout(() => {
          setSuccess('');
        }, 2000);
        // Clear the email input field
        setEmail('');
      } else {
        setError(response.data.message || "Failed to send reset link. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="fixed flex items-center w-full bg-white px-6 py-4 justify-between border-b-2">
        <Link to="/">
        <img  src={logo} alt="Logo" className="w-44 sx:w-28 xs:w-32" />
        </Link>
        <Link to="/">
          <RxCross1 />
        </Link>
      </div>

      <div className="flex flex-grow flex-col xs:px-4 w-full items-center justify-center pt-20">
        <div className='mt-4'>
          <h2 className='text-[20px] font-medium'>For password change, enter your email</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full my-4 px-4 py-2 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Email"
            required
          />
          <button
            onClick={handleButtonClick}
            className='bg-[#E0AF04] text-white rounded-lg px-4 py-2'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {success && <div className="text-green-500 mt-2">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default RequestPasswordReset;


