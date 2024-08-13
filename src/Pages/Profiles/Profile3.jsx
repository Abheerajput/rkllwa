import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import profile from "../../assets/icons/jordan.svg";
import icon1 from "../../assets/icons/profileicon1.svg";
import icon2 from "../../assets/icons/profileicon2.svg";
import icon3 from "../../assets/icons/profileicon3.svg";
import icon4 from "../../assets/icons/phone.svg"
import icon6 from "../../assets/icons/print.svg"
import icon5 from "../../assets/icons/msg.svg"
import SecondHeader from '../../Layout/Header/SecondHeader';
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import Footer from "../../Layout/Footer/Footer"
import '../../Style/style.css';
import { Link } from 'react-router-dom';
const ProfileCard3 = () => {
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

  return (
    <>
      <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="Taylor Morgan"
      />

      <div className="text-sm pl-11 bg-[#F7F6F1] py-4">
        <Link  to="/"className="hover:underline">Home</Link> {'>'} 
        <Link to="/founders" className="hover:underline">Founders</Link> {'>'} 
        <span className="">Jordan Taylor </span>
      </div>

      <div className="bg-gray-50 grid grid-cols-2 xs:flex xs:flex-col md:flex md:flex-col sm:p-10">
        {/* Profile Section */}
        <div> 
          <div className="flex xs:flex-col md:flex-col xs:items-center md:items-center px-4 mt-[24px] gap-12 items-start ">
            <img 
              src={profile} 
              alt="Ava Johnson" 
              className=" rounded-md object-cover mb-4"
            />
            <div className="flex-1">
              <h1 className="  text-[#E6A358] text-[48px] fgt-ff-medium mb-1">Jordan Taylor </h1>
              <h2 className="text-[32px] fgt-ff-medium text-[#403C5C] mb-4">Attorney</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="mr-4"> <img src={icon4} alt="" /> </span>
                  <Link to="/" className="">(206)-654-2429</Link>
                </div>
                <div className="flex items-center">
                  <span className="mr-4"><img src={icon5} alt="" /> </span>
                  <a href="mailto:bianchi@lasher.com" className="">bianchi@lasher.com</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">
                    <img src={icon6} alt="" />
                  </span>
                  <Link to="" className="">Print Attorney Profile</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#212121] text-[20px] fgt-ff-light  px-4 mt-6">
          Ava Johnson is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. His primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Mario’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.
          Ava Johnson is a business lawyer who represents clients in the adversarial context of business disputes and business litigation...
          </p>
          <p className="text-[#212121] text-[20px] fgt-ff-light px-4 mt-4">
     
Mario is well-recognized in his field, having been selected for inclusion to the 2020 Washington Super Lawyers® List in Business Litigation and Real Estate, and named a “Rising Star” by Washington Law and Politics in Business Litigation seven times. He served as the Chair of Lasher’s Litigation Department from 2009-2013. He currently serves as the firm’s Managing Principal.
          </p>

          <div className="md:w-2/3 px-4 pt-6 py-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Practice Focus</h3>
            <ul className="list-disc ml-5 text-[20px] fgt-ff-light text-[#212121] space-y-1">
              <li>Business Dissolution Lawyer</li>
              <li>Business Litigation Lawyer</li>
              <li>Business Torts Lawyer</li>
              <li>Contract Dispute Lawyer</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Education</h3>
            <ul className="list-disc text-[20px] fgt-ff-light text-[#212121] ml-5 space-y-1">
              <li>Notre Dame Law School, 2001 (Juris Doctor)</li>
              <li>Seattle University, 1997 (Bachelor of Arts in Business Administration, Economics, and Humanities)</li>
              <li>Seattle Preparatory School, 1993</li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex justify-end md:justify-center xs:justify-center xs:mr-0 md:mr-0 mt-6 mr-20 pr-0">
          <div className="mt-6 md:mt-0 w-1/2">
            <div className="bg-[#FFEDD7] p-4 rounded-md pl-8">
              <h3 className="text-[35px] fgt-ff-normal text-[#02131D] pt-[53px] mb-4">Practice Areas</h3>
              <ul className="text-[#212121]">
                <li className='text-[24px] fgt-ff-normal flex gap-4 items-center py-5'><img src={icon1} alt="" /> Business Law</li>
                <li className='text-[24px] fgt-ff-normal flex gap-4 items-center py-5'><img src={icon2} alt="" />BOIR Compliance</li>
                <li className='text-[24px] fgt-ff-normal flex gap-4 items-center py-5'><img src={icon3} alt="" />Immigration Law</li>
              </ul>
            </div>

            {/* Testimonials Slider */}
            <div className="bg-[#F7F6F1] p-4 rounded-md mt-6 pb-8">
              <h3 className="text-[35px] fgt-ff-normal justify-center flex font-bold text-[#02131D] mb-4">Testimonials</h3>
              <Slider {...testimonialSettings}>
                <div className="text-[#212121] text-[20px] fgt-ff-light">
                  “Mario is the very definition of what an attorney ought to be. He is so supportive and thinks of all the details so that none are missed. I could relax knowing what an organized, consummate professional he is on every level. His communication is clear, thorough, and timely. He's super sharp and proficient at his job and does it all while being kind -- the very best combination! He's an invaluable asset to the team. And THIS (mug) is what you want to see on your lawyer's desk. He IS Superman! I actually call him "Super Mario." I highly recommend his services.
                  “
                </div>
                <div className="text-[#212121] text-[20px] fgt-ff-light">
                  “Mario is the very definition of what an attorney ought to be. He is so supportive and thinks of all the details so that none are missed. I could relax knowing what an organized, consummate professional he is on every level. His communication is clear, thorough, and timely. He's super sharp and proficient at his job and does it all while being kind -- the very best combination! He's an invaluable asset to the team. And THIS (mug) is what you want to see on your lawyer's desk. He IS Superman! I actually call him "Super Mario." I highly recommend his services.
                  “
                </div>
                <div className="text-[#212121] text-[20px] fgt-ff-light">
                  "I highly recommend his services. Mario is an invaluable asset to the team.“Mario is the very definition of what an attorney ought to be. He is so supportive and thinks of all the details so that none are missed. I could relax knowing what an organized, consummate professional he is on every level. His communication is clear, thorough, and timely. He's super sharp and proficient at his job and does it all while being kind -- . And THIS (mug) is what you want to see on your lawyer's desk. He IS Superman! I actually call him "Super Mario." I highly recommend his services.
                  “"
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10 px-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help? Contact Us</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
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
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ProfileCard3;
