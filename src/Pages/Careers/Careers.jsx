import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import SecondHeader from "../../Layout/Header/SecondHeader";
import lkdnicon2 from "../../assets/icons/drpdwicon2.svg";
import fbicon2 from "../../assets/icons/drpdwicon3.svg";
import twittericon2 from "../../assets/icons/drpdwicon4.svg";
import phone1 from "../../assets/icons/phoneicon.svg";
import message2 from "../../assets/icons/messageicon.svg";
import { AiOutlineClose } from "react-icons/ai"; 
import { RxCross2 } from "react-icons/rx";
import facebook from "../../assets/icons/facebookicon.svg";
import instagram from "../../assets/icons/instagramicon.svg";
import lkdn from "../../assets/icons/linkdinicon.svg";
import Footer from "../../Layout/Footer/Footer";
import { Link } from "react-router-dom";
import "../../Style/style.css";
import axios from "axios";

const Careers = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [successPopup, setSuccessPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState([]);
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    brief: "",
    position: "",
    phone: "",
  });
  const { firstName, lastName, email, position, brief, phone } = details;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/*": [] },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFile((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileRemove = (fileToRemove) => {
    setFile((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const isFormFilled = 
    firstName || 
    lastName || 
    phone || 
    email || 
    position || 
    brief

  if (!isFormFilled) {
    toast.error("Please fill at least one field before submitting.");
    return;
  }
    // // Validation checks
    // const { firstName, lastName, email, position, phone, brief } = details;
    // if (!firstName) {
    //   toast.warn("Please enter your First Name.");
    //   return;
    // }
    // if (!lastName) {
    //   toast.warn("Please enter your Last Name.");
    //   return;
    // }
    // if (!email) {
    //   toast.warn("Please enter your Email Address.");
    //   return;
    // }
    // if (!position) {
    //   toast.warn("Please enter your Position.");
    //   return;
    // }
    // if (!phone) {
    //   toast.warn("Please enter your Phone Number.");
    //   return;
    // }
    // if (!brief) {
    //   toast.warn("Please enter your Message.");
    //   return;
    // }

    // if (!file || file.length === 0) {
    //   toast.warn("Please choose at least one file.");
    //   return;
    // }
    setSubmitted(true);

    // Create a new FormData object
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("position", position);
    formData.append("phone", phone);
    formData.append("brief", brief);

    // Append all files to the FormData object
    // file.forEach((file) => {
    //   formData.append("attachments", file);
    // });

    try {
      const response = await axios.post(
       `${BASE_URL}/user/formSubmit2`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.status) {
        setDetails({
          firstName: "",
          lastName: "",
          email: "",
          position: "",
          phone: "",
          brief: "",
        });
        setFile("");
        toast.success("Thank you for your submission!");

        setSubmitted(false);

        setSuccessPopup(true);
      }
    } catch (error) {
      setSubmitted(false);
      toast.error("Something went wrong!");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div>
        <SecondHeader socialIcons2={socialIcons2} mainTitle="Careers" />
        <div className="text-[26px] sx:text-[14px] fgt-ff-normal pl-[5.2%] text-[#403C5C]  bg-[#F7F6F1] py-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          {">"}
          <Link to="/contactus" className="hover:underline">
            Careers
          </Link>
        </div>
        <div className="px-[5.2%] mt-20 mb-12 flex md:flex-col sm:flex-col xs:flex-col">
          <div className="p-12 xs:p-4 xs:py-8 xs:w-full rounded-lg w-[45%] sm:w-full md:w-full bg-[#F7F6F1]">
            <div className="flex gap-4 items-center">
              <h3 className="text-[40px] flex justify-center w-full sm:text-[38px] xs:text-[25px] fgt-ff-medium text-[#403C5C]">
                Your Information
              </h3>
            </div>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <div className="flex w-full gap-7">
                <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  First Name
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                    value={firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </label>
                <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                    value={lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex w-full gap-7">
                <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  Phone
                  <input
                    type="number"
                    value={phone}
                    name="phone"
                    onChange={handleChange}
                    placeholder="(000) 0000-0000"
                    className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                  />
                </label>
                <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                  Email
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
              <label className="block text-[14px] xs:text-[12px] lexend-medium text-[#21272A]">
                Position
                <input
                  type="text"
                  value={position}
                  name="position"
                  onChange={handleChange}
                  placeholder="Position"
                  className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                />
              </label>
              <div className="sm:col-span-2 mt-6 h-full">
                <label className="block text-[14px] lexend-medium xs:text-[12px] text-[#21272A]">
                  Briefly tell us a little about yourself why are you interested
                  in the role that you are applying for and why you want you
                  want to apply to us.
                </label>
                <textarea
                  name="brief"
                  value={brief}
                  onChange={handleChange}
                  placeholder="type here...."
                  className="bg-transparent max-h-[286px] border-[#919191] h-screen border w-full mt-1 p-2 rounded-md focus:outline-none text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <div className="sm:col-span-2 mt-4">
                <label className="block text-[14px] lexend-medium xs:text-[12px] text-[#21272A]">
                  Resume and/or Cover Letter
                </label>
                <div
 {...getRootProps()}
 className={`mt-1 p-6 w-full border ${
   file.length > 0
     ? "border-blue-800 text-blue-500"
     : "border-[#919191]"
 } rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:blue-900 flex flex-col items-center`}
>
<input {...getInputProps()} />
{file.length > 0 ? (
  file.map((file, index) => (
    <div key={index} className="flex items-center gap-4">
      <p className="text-[16px] fgt-ff-light">{file.name}</p>
      <button
        type="button"
        className="text-[16px] text-red-900 fgt-ff-light "
        onClick={() => handleFileRemove(file)}
      >
       <AiOutlineClose />

      </button>

    </div>

  ))

) : (

  <p className="text-[16px] fgt-ff-light">

    Drag & drop or Upload your files here

  </p>

)}

</div>

</div>
              <div className="w-1/4 xs:w-1/2 mt-4">
             
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
              <p className="text-[18px] xs:text-[15px] fgt-ff-normal text-[#212121]">
                Call our team Mon-Fri from 9am to 6pm.
              </p>
              <span className="flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] ">
                {" "}
                <img
                  src={phone1}
                  alt=""
                  className="xs:w-[1.2rem] sm:w-[1.6rem] w-6"
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
                    src={message2}
                    alt=""
                    className="xs:w-[1.2rem] sm:w-[1.4rem] w-6"
                  />{" "}
                  <h3 className="border-0 border-b-2 border-[#212121] sm:text-[20px] text-[22px] xs:text-[15px]">
                    {" "}
                    <a href="mailto:info@rkllaw.com?subject={subject}">
                      Email Us
                    </a>{" "}
                  </h3>{" "}
                </span>
                <a
                  href="https://www.facebook.com/profile.php?id=61564380045589"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4 my-4 text-[22px] fgt-ff-medium text-[#212121] ">
                    {" "}
                    <img
                      src={facebook}
                      alt=""
                      className="xs:w-[1.2rem] sm:w-[1.4rem] w-6"
                    />{" "}
                    <h3 className="border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]">
                      Connect on Facebook
                    </h3>{" "}
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4 my-4 text-[22px] fgt-ff-medium text-[#212121] ">
                    {" "}
                    <img
                      src={instagram}
                      alt=""
                      className="xs:w-[1.2rem] sm:w-[1.4rem] w-6"
                    />{" "}
                    <h3 className="border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]">
                      Connect on Instagram
                    </h3>{" "}
                  </span>
                </a>
                <a
                  href="http://www.linkedin.com/in/rkl-law-9aa681324"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4 my-4 text-[22px] fgt-ff-medium text-[#212121] ">
                    {" "}
                    <img
                      src={lkdn}
                      alt=""
                      className="xs:w-[1.2rem] sm:w-[1.4rem] w-6"
                    />{" "}
                    <h3 className="border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]">
                      Connect on LinkedIn
                    </h3>{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {successPopup && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    style={{ zIndex: 1000 }}
  >
    <div
      className="bg-white p-8 rounded-md xs:w-[90%]"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '400px', // adjust the max width as needed
        width: '100%',
        maxHeight: '180px', // adjust the max height as needed
        height: '100%',
          overflowX: 'hidden',
        overflowY: 'hidden', // add this to enable vertical scrolling if needed
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
    </>
  );
};

export default Careers;
