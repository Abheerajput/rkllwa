import React, { useEffect, useState } from "react";
import SecondHeader from "../../Layout/Header/SecondHeader";
import lkdnicon2 from "../../assets/icons/drpdwicon2.svg";
import fbicon2 from "../../assets/icons/drpdwicon3.svg";
import twittericon2 from "../../assets/icons/drpdwicon4.svg";
import icon from "../../assets/icons/contacticon.svg";
import phone from "../../assets/icons/phoneicon.svg";
import message from "../../assets/icons/messageicon.svg";
import facebook from "../../assets/icons/facebookicon.svg";
import instagram from "../../assets/icons/instagramicon.svg";
import { RxCross2 } from "react-icons/rx";
import lkdn from "../../assets/icons/linkdinicon.svg";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import "../../Style/style.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  const [submitted, setSubmitted] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    areaOfInterest: "",
    messageToSend: "",
  });
  const { firstName, lastName, email, company, areaOfInterest, messageToSend } =
    details;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    
    const requiredFields = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      company: "Company Name",
      areaOfInterest: "Area of Interest",
      messageToSend: "Message",
    };
  
    for (let field in requiredFields) {
      if (!details[field]) {
        toast.warn(`Please enter your ${requiredFields[field]}.`);
        return;
      }
    }
  
    setSubmitted(true);
    try {
      const response = await axios.post(
        "https://rklapi.testenvapp.com/user/formSubmit",
        { ...details, message: messageToSend }
      );
      if (response.data.status) {
        setSubmitted(false)
        setDetails({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          areaOfInterest: "",
          messageToSend: "",
        })
        toast.success("Thank you for your submission!");
        
        setSuccessPopup(true);
      }
    } catch (error) {
      setSubmitted(false)
      toast.error("Something went wrong!");
      console.error("Error submitting form:", error);
     
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <SecondHeader socialIcons2={socialIcons2} mainTitle="Contact" />
        <div className="text-[26px] sx:text-[14px] fgt-ff-normal pl-[5.2%] text-[#403C5C] bg-[#F7F6F1] py-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          {">"}
          <Link to="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <div
          className="px-[5.2%] mt-20 mb-12 flex md:flex-col  sm:flex-col xs:flex-col
        "
        >
          <div className="  p-12 xs:p-4 xs:py-8 xs:w-full rounded-lg w-[45%] sm:w-full md:w-full  bg-[#F7F6F1]">
            <div className="flex gap-4 items-center">
              <p>
                <img src={icon} alt="" className="w-16" />
              </p>
              <h3 className="text-[40px] sm:text-[38px] xs:text-[25px] fgt-ff-medium text-[#403C5C]">
                Contact our team
              </h3>
            </div>
            <h3 className="text-[18px] xs:text-[15px] fgt-ff-normal text-gray-800 my-6">
              Please get in touch with us by completing the form below.
            </h3>
            <form className="grid grid-cols-1  gap-4" onSubmit={handleSubmit}>
              <div className="flex w-full gap-7">
                <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  First Name
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent  text-[16px] fgt-ff-light  focus:ring-2 focus:ring-orange-500"
                    name="firstName"
                    onChange={handleChange}
                    value={firstName}
                  />
                </label>

                <label className="block  text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                    name="lastName"
                    onChange={handleChange}
                    value={lastName}
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                <label className="block  text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block  text-[14px] lexend-medium w-1/2 xs:text-[12px] text-[#21272A]">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company"
                  className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                  name="company"
                  onChange={handleChange}
                  value={company}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block  text-[14px] lexend-medium w-1/2 xs:text-[12px] text-[#21272A]">Subject</label>
                <input type="text" placeholder="subject" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" name="areaOfInterest" value={areaOfInterest} onChange={handleChange} />
              </div>
              <div className="sm:col-span-2 h-full">
                <label className="block  text-[14px]  lexend-medium w-1/2 xs:text-[12px] text-[#21272A]">
                  Message
                </label>
                <textarea
                  name="messageToSend"
                  id=""
                  placeholder="type here...."
                  className="bg-transparent max-h-[286px] border-[#919191] h-screen border  w-full mt-1 p-2  rounded-md focus:outline-none text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                  onChange={handleChange}
                  value={messageToSend}
                ></textarea>
              </div>

              <div className="w-1/4 xs:w-1/2 ">
              <button
                  type="submit"
                  className={`fgt-ff-light mt-6 py-3 px-6 text-lg sm:text-lg text-white rounded-md w-full bg-[#E0AF04]  transition-colors duration-300 ease-in-out ${
                    submitted ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={submitted}
                >
                  {submitted ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-[55%] sm:mb-8 xs:mb-8 md:mb-8 md:justify-start sm:w-full xs:w-full sm:justify-start xs:justify-start xs:mt-12 sm:mt-12 md:mt-12 flex justify-center">
            <div>
              <h1 className="text-[40px] text-[#403C5C] sm:text-[38px]  xs:text-[25px]   fgt-ff-medium">
                Call us
              </h1>
              <p className="text-[20px] xs:text-[15px] fgt-ff-normal text-[#212121]">
                Call our team Mon-Fri from 9am to 5pm.
              </p>
              <span className="flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] ">
                {" "}
                <img
                  src={phone}
                  alt=""
                  className="xs:w-[1.2rem] sm:w-[1.6rem]"
                />{" "}
                <h3 className="border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]">
                <a href="tel:8189909999" className="text-[#212121] hover:underline">
                  818-990-9999
                  </a>
                </h3>{" "}
              </span>
              <div className="mt-12">
                <h3 className="text-[40px] sm:text-[38px] text-[#403C5C]  xs:text-[25px]  fgt-ff-medium">
                  Chat with us
                </h3>
                <p className="text-[18px] sm:text-[17px] xs:text-[15px] fgt-ff-normal text-[#212121] py-4">
                  Connect with our friendly team!
                </p>

                <span className="flex items-center gap-4 my-4   fgt-ff-medium text-[#212121] ">
                  {" "}
                  <img
                    src={message}
                    alt=""
                    className="xs:w-[1.2rem] sm:w-[1.4rem] w-6"
                  />{" "}
                  <h3 className="border-0 border-b-2 border-[#212121]  text-[22px]  sm:text-[20px] xs:text-[15px]">
                    {" "}
                    <a className="text-[22px]  sm:text-[20px] xs:text-[15px]" href="mailto:info@rkllaw.com?subject={subject}">
                     Email Us
                    </a>{" "}
                  </h3>{" "}
                </span>
                <a
                  href="https://www.facebook.com/profile.php?id=61564380045589"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4 my-4  fgt-ff-medium text-[#212121] ">
                    {" "}
                    <img
                      src={facebook}
                      alt=""
                      className="xs:w-[1.2rem] sm:w-[1.4rem]  w-6"
                    />{" "}
                    <h5 className="border-0 border-b-2 border-[#212121] text-[22px] sm:text-[20px] xs:text-[15px]">
                      Connect on Facebook
                    </h5>{" "}
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4 my-4  fgt-ff-medium text-[#212121] ">
                    {" "}
                    <img
                      src={instagram}
                      alt=""
                      className="xs:w-[1.2rem] sm:w-[1.4rem] w-6"
                    />{" "}
                    <h3 className="border-0 border-b-2 border-[#212121] text-[22px] sm:text-[20px] xs:text-[15px]">
                      Connect on Instagram
                    </h3>{" "}
                  </span>
                </a>
                <a href="http://www.linkedin.com/in/rkl-law-9aa681324" target="_blank" rel="noopener noreferrer" >
                <span className='flex items-center gap-4 my-4  fgt-ff-medium text-[#212121] '> <img src={lkdn} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem] w-6' /> <h5 className='border-0 border-b-2 text-[22px] border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on LinkedIn</h5> </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {successPopup && (
  <div
    className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center"
    style={{ zIndex: 1000 }}
  >
    <div
      className="bg-white p-8 rounded-md   xs:w-[80%]"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '400px', // adjust the max width as needed
        width: '100%',
        maxHeight: '180px', // adjust the max height as needed
        height: '100%',
        overflowY: 'hidden', // add this to enable vertical scrolling if needed
        overflowX: 'hidden', // add this to enable vertical scrolling if needed
      }}
    >
      <div className="absolute top-[-9%] left-[90%]"><button
     
     onClick={() => setSuccessPopup(false)}
     className="mt-4 px-4 py-2  rounded-md hover:bg-orange-600 transition-colors duration-300 ease-in-out"
   >
      <RxCross2  />
   </button></div>
      <h2 className="text-2xl text-center text-green-700 xs:font-semibold">Submission Successful!</h2>
      <p className="text-lg text-center">Your application has been submitted successfully.</p>
     
    </div>
  </div>
)}
{/* <ToastContainer position=""/> */}
<ToastContainer
        className="toast-position"
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Contact;
