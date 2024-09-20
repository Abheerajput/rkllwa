import React, { useState } from "react";
import axios from "axios"; // Import axios
import logo from "../../assets/icons/headicon.svg";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log(BASE_URL)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userName: "",
    password: "",
    acceptTerms: false,
  };
  const [formData, setFormData] = useState(initialFormData);

 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Preparing the data for the API
    const dataToSend = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      userName: formData.userName,
      password: formData.password,
    };
    console.log("dataToSend", dataToSend);

    try {
      const response = await axios.post(`${BASE_URL}/auth/register`,
        dataToSend,

        console.log("dataToSend", dataToSend)
      );

      console.log(response.data);
      // Check if the status is true or false
      if (response.data.status) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000, 
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        setFormData(initialFormData);
        setLoading(false);
        navigate("/login");
        setTimeout(()=>{
          // Redirect to home page after successful registration
          navigate('/login');
        })
       
       
       } else {
          // If status is false, show error toast notification
          toast.error(response.data.message || "Registration Failed. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
        }; // Clear any previous error
      
    } catch (error){
      // Handle error response
      console.error("Error during registration:", error.response?.data || error.message);
      setLoading(false);
      setError("Registration Failed. Please try again.");
      setSuccess(null);
      toast.error("Registration Failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <div className="fixed  border-1 flex px-[5%]  pt-12 items-center border-black w-full bg-white py-4 justify-between  border-b-2">
      <Link to="/">
        <img  src={logo} alt="Logo" className="w-44 sx:w-28 xs:w-32" />
        </Link>
        <Link to="/">
          <RxCross1 />
        </Link>
      </div>

      <div className="flex flex-grow px-[5%] w-full xs:items-start xs:mt-12 items-center xl:pt-12 justify-center pt-20">
        <div className="w-full xs:max-w-[100%] max-w-[50%] sm:max-w-[70%] bg-white rounded-lg">
          <h2 className="text-center flex-nowrap text-[27px] xs:text-[18px] sm:text-[21px] lexend-medium text-[#303030] mb-6">
            Create your RKL Portal account
          </h2>
          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}
          <form 
          onSubmit={handleSubmit}
           className="space-y-4">
            <div>
              <label className="block text-[14px] lexend-medium text-[#21272A]">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="mt-1 block text-[16px] lexend-light text-[#697077] w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] lexend-medium text-[#21272A]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 block w-full text-[16px] lexend-light text-[#697077] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] lexend-medium text-[#21272A]">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 block w-full text-[16px] lexend-light text-[#697077] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[14px] lexend-medium text-[#21272A]">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="mt-1 block text-[16px] lexend-light text-[#697077] w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-[14px] lexend-medium text-[#21272A]">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full text-[16px] lexend-light text-[#697077] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label className="ml-2 block text-[14px] lexend-normal text-gray-900">
                Accept terms and conditions. <Link to="#" className="">Read T&C</Link>
              </label>
            </div>

            <button
             disabled={loading}
              type="submit"
              className="w-full py-2 px-4 bg-[#E0AF04] text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
             {loading ? "Loading..." : "Continue"}
            </button>
          </form>

        

          <p className="mt-6 text-center text-[14px] lexend-normal text-gray-500">
            Already have an account? <Link to="/login" className=" text-[14px] lexend-bold">Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Signup;
