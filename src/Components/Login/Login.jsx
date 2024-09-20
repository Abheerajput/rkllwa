import React, { useState } from 'react';
import axios from 'axios'; 

import logo from "../../assets/icons/headicon.svg";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Login = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log("base url",BASE_URL)
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState("");
  const [firstClick, setFirstClick] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 


  const handleFirstApiCall = async () => {
    if (email) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${BASE_URL}/auth/loginEmail`,
          {
            email: email,
           
          },
  
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);

        if (response.data.status === true) {
          setShowPassword(true);
          toast.success("Email found. Please enter your password."); // Success toast
        } else {
          toast.error("Email does not exist. Please try again or sign up.");
        }
      } catch (error) {
        setLoading(false);
        console.log(error)
        console.error("Error checking email:", error);

        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.warn("Please enter your email."); 
    }
  };

  const handleSubmit = async () => {
    if (email && password) {
      setLoading(true);
      try {
        const response = await axios.post(
         `${BASE_URL}/auth/login`,
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setLoading(false);
        console.log(response)
        console.log( response.data);

        if (response.data.status === true) {
          const token = response.data.token
          const userData = {email : response.data.data.email , fullName : response.data.data.fullName}
          Cookies.set("token" , token)
          Cookies.set("userData" , JSON.stringify(userData))
          navigate("/");
        } else {
          toast.error(response.data.message)
         
        }
      } catch (error) {
        setLoading(false);
        console.error("Error during login:", error);
        toast.error("An error occurred. Please try again.");
      }
    } else {
      
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (firstClick) {
      handleFirstApiCall();
      setFirstClick(false);
    } else if (email && password) {
      handleSubmit();
    } else {
     
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-white">
      <ToastContainer /> {/* Add this to display toasts */}
      <div className="fixed border-1 px-[5%] flex items-center border-black w-full bg-white py-4 justify-between border-b-2">
        <Link to="/">
        <img  src={logo} alt="Logo" className="w-44 sx:w-28 xs:w-32" />
        </Link>
        <Link to="/">
          <RxCross1 className="" />
        </Link>
      </div>

      <div className="flex flex-grow px-[5%] w-full xs:items-start xs:mt-12 items-center justify-center pt-20">
        <div className="w-full xs:max-w-[100%] max-w-[50%] sm:max-w-[70%] flex flex-grow xs:items-start xs:mt-12 items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-lg">
            <h2 className="text-[27px] text-[#303030] lexend-medium text-center mb-6">Welcome back</h2>

            <div className="mb-4">
              <label className="block text-[14px] lexend-medium text-[#21272A] mb-2" htmlFor="emailOrPhone">
                Phone or Email
              </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                id="emailOrPhone"
                className="w-full px-3 py-2 border rounded-md text-[16px] lexend-light text-[#697077] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email or Phone Number"
              />
            </div>

            {showPassword && (
              <div className="mb-4">
                <label className="block text-[14px] lexend-medium text-[#21272A] mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-[16px] lexend-light text-[#697077] focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-[14px] lexend-semibold text-[#21272A]">Remember me</span>
              </label>
              <Link to="/linkverify" className="text-[14px] lexend-semibold  hover:underline">Forgot password?</Link>
            </div>

            <button
            disabled={loading}
              onClick={handleClick}
              className="w-full bg-[#E0AF04] text-[16px] lexend-medium text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
              {loading ? "Loading..." : "Continue"}
            </button>

            <div className="text-center">
              <span className="text-[#303E49] text-[14px] lexend-normal">New to Fincen? </span>
              <Link to="/signup" className=" text-[14px] lexend-bold hover:underline">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
