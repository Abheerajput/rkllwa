import React ,{useEffect}from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import profile from "../../assets/icons/founder2.svg";
import icon1 from "../../assets/icons/profileicon1.svg";
import icon2 from "../../assets/icons/profileicon2.svg";
import icon3 from "../../assets/icons/profileicon3.svg";
import icon4 from "../../assets/icons/phone.svg"
import icon5 from "../../assets/icons/msg.svg"
import icon6 from "../../assets/icons/print.svg"
import SecondHeader from '../../Layout/Header/SecondHeader';
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import Footer from "../../Layout/Footer/Footer"
import qr from "../../assets/images/qr.png"
import '../../Style/style.css';
import { Link } from 'react-router-dom';
const ProfileCard2 = () => {
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    // This will scroll to the top only once when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="Sohila Rezai"
      />

<div className="text-[26px] sx:text-[14px] fgt-ff-normal pl-[5.2%] text-[#403C5C] bg-[#F7F6F1] py-4">
        <Link  to="/"className="hover:underline">Home</Link> {'>'} 
        <Link to="/founders" className="hover:underline">Founders</Link> {'>'} 
        <span className="">Sohila Rezai</span>
      </div>

      <div className="bg-gray-50 w-full  px-[5.2%]  xs:flex xs:flex-col sm:flex sm:flex-col  md:flex md:flex-col sm:p-10">
        {/* Profile Section */}
        <div className='w-full flex  xs:flex xs:flex-col sm:flex sm:flex-col '>
        <div className='w-[70%] xs:w-full md:w-full sm:w-full'> 
          <div className="flex xs:flex-col md:flex-col xs:items-start xs:gap-0  md:gap-0  mt-[24px] gap-12 items-start ">
            <img 
              src={profile} 
              alt="Sohila Rezai" 
              className=" rounded-md object-cover mb-4"
            />
            <div className="flex-1">
              <h1 className="  text-[#212138] text-[48px] xs:text-[33px] fgt-ff-medium mb-1">Sohila Rezai </h1>
              <h2 className="text-[32px] fgt-ff-medium text-[#403C5C] mb-4 xs:text-[27px]">Partner</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="mr-4"> <img src={icon4} alt="" /> </span>
                  <Link to="/" className="">(818) 990-9999</Link>

                </div>
                <div className="flex items-center">
                  <span className="mr-4"><img src={icon5} alt="" /> </span>
                  <a href="mailto:bianchi@lasher.com" className="text-blue-800 border-blue-900 border-b-2">srezai@rkllaw.com</a>
                </div>
                <div className="flex items-center">
                <span className="mr-4 flex gap-4">
                    <img src={icon6} alt="" />
                    <img src={qr} alt="" className='w-[20%]' />
                  </span>
                  {/* <Link to="" className="">Print Attorney Profile</Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#212121] sx:text-[16px] text-[20px] fgt-ff-light   mt-6">
          Sohila Rezai, Esq. has been practicing transactional and litigation law in Los Angeles for more than 20 years.  She has extensive knowledge and experience in business law including strategic corporate formations, corporate and regulatory compliance, and business contract and lease negotiations.  She has advocated cases in the Los Angeles Superior Court and Alternative Dispute Resolution (ADR) Services on behalf of her clients.

          </p>
          <p className="text-[#212121] sx:text-[16px] text-[20px] fgt-ff-light   mt-6">Sohila is also a licensed real estate broker and a member of both the California Association of Realtors (CAR) and the National Association of Realtors (NAR).</p>
          <p className="text-[#212121] sx:text-[16px] text-[20px] fgt-ff-light mb-10 my-4">
          Sohila has extensive experience in immigration law, ranging from work permits and VISA applications to all aspects of the naturalization process. She handles a range of immigration-related issues for individuals, families and businesses.
          </p>

          {/* <div className="md:w-2/3  pt-6 py-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Practice Focus</h3>
            <ul className="list-disc ml-5 sx:text-[16px]  text-[20px] fgt-ff-light text-[#212121] space-y-1">
              <li>Business Dissolution Lawyer</li>
              <li>Business Litigation Lawyer</li>
              <li>Business Torts Lawyer</li>
              <li>Contract Dispute Lawyer</li>
            </ul>
            <h3 className="text-xl  font-bold text-gray-800 mt-6 mb-4">Education</h3>
            <ul className="list-disc sx:text-[16px]  text-[20px] fgt-ff-light text-[#212121] ml-5 space-y-1">
              <li>Notre Dame Law School, 2001 (Juris Doctor)</li>
              <li>Seattle University, 1997 (Bachelor of Arts in Business Administration, Economics, and Humanities)</li>
              <li>Seattle Preparatory School, 1993</li>
            </ul>
          </div> */}
        </div>
        {/* Sidebar */}
        <div className="flex xs:w-full  sm:w-full w-[30%] justify-end  xs:mb-4  sm:px-4 md:px-4 md:justify-center xs:justify-center xs:mr-0 md:mr-0 xs:mt-0 mt-6 pr-0">
          <div className="mt-6 sm:w-full md:w-full xs:w-full md:mt-0 w-4/5">
            <div className="bg-[#FFEDD7] p-4 rounded-md xs:pl-4 pl-8 sx:items-center sm:flex sm:flex-col sm:items-center sm:pl-0">
            <h3 className="text-[35px] fgt-ff-normal text-[#02131D] sx:text-[28px] xs:justify-center xs:flex xs:pt-0 pt-[53px] xs:mb-0 mb-4">Practice Areas</h3>
            <ul className="text-[#212121]">
                <li className='text-[24px] fgt-ff-normal sx:text-[16px] flex gap-4 items-center sx:py-2 py-5'><Link to="/business" className='flex gap-4'><img src={icon1} alt="" /> Business Law</Link></li>
                <li className='text-[24px] fgt-ff-normal sx:text-[16px] flex gap-4 items-center sx:py-2 py-5'><Link to="/boir" className='flex gap-4'><img src={icon2} alt="" />BOIR Compliance</Link></li>
                <li className='text-[24px] fgt-ff-normal sx:text-[16px] flex gap-4 items-center sx:py-2 py-5'> <Link to="/Immigration-Law" className='flex gap-4'><img src={icon3} alt="" />Immigration Law</Link></li>
              </ul>
            </div>

         
          </div>
        </div>
        </div>
       

        {/* Contact Form */}
        {/* <div className="mt-10 px-4 xs:px-0 xs:w-full w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help? Contact Us</h3>
          <form className="grid grid-cols-1  gap-4">
            
            <div className='flex w-full gap-7'>
              <label className="block text-sm w-1/2 text-gray-700">First Name
              <input type="text" placeholder="Name" className="mt-1 p-2 w-full border rounded-md focus:outline-none   focus:ring-2 focus:ring-orange-500" />

              </label>
             
              <label className="block text-sm w-1/2 text-gray-700">Last Name
              <input type="text" placeholder="Last Name" className="mt-1 p-2 w-full border rounded-md focus:outline-none w focus:ring-2 focus:ring-orange-500" />
           
              </label>
       
            </div>
           
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-700">Email</label>
              <input type="email" placeholder="Email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="w-1/4 pb-8">
              <button type="submit" className="bg-[#EEB26D] text-white p-2 rounded-md w-full  transition-colors">Submit</button>
            </div>
          </form>
        </div> */}
      </div>
      <Footer/>
    </>
  );
}

export default ProfileCard2;
