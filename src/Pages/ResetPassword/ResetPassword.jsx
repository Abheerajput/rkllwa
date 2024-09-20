import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import logo from "../../assets/icons/headicon.svg";
import { RxCross1 } from "react-icons/rx";
import { Link,} from 'react-router-dom';
const ResetPassword = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState(''); // Store email for the reset
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [tokenError, setTokenError] = useState('');
  const { token } = queryString.parse(location.search);


  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setTokenError('Invalid or missing token.');
        return; // Prevent immediate redirect to show error
      }

      console.log('Verifying token:', token); // Log for debugging

      try {
        const response = await axios.post(
          `${BASE_URL}/auth/verifyForgotLink`,
          { token },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('Token verification response:', response); // Log for debugging

        if (response.status === 200) {
          setEmail(response.data.data.email);
        } else {
          setTokenError('Invalid or expired reset link.');
        }
      } catch (err) {
        console.error('Error verifying token:', err);
        setTokenError('Invalid or expired reset link.');
      }
    };

    verifyToken();
  }, [token, navigate]);

  // Handle form submission for password reset
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/forgotPassword`,
        { email, password: newPassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setSuccess('Password has been reset successfully.');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect to login after success
      } else {
        setError(response.data.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
         <div className="fixed border-1 px-[5%] flex items-center border-black w-full bg-white py-4 justify-between border-b-2">
         <Link to="/">
        <img  src={logo} alt="Logo" className="w-44 sx:w-28 xs:w-32" />
        </Link>
        <Link to="/">
          <RxCross1 className="" />
        </Link>
      </div>
      <div className="flex flex-grow flex-col xs:px-4 w-full xs:justify-start items-center justify-center pt-20">
        <div className="mt-4">
          <h2 className="text-[20px] font-medium">Reset Your Password</h2>
          {(error || tokenError) && (
            <div className="text-red-500 mt-2">
              {error || tokenError}
              {tokenError && <p>Redirecting to the homepage in 3 seconds...</p>}
            </div>
          )}
          <form 
          onSubmit={handleSubmit}
           className="space-y-4">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="New Password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Confirm New Password"
              required
            />
            <button
              type="submit"
              className="bg-[#E0AF04] text-white rounded-lg px-4 py-2"
            >
              Reset Password
            </button>
            {success && <div className="text-green-500 mt-2">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
