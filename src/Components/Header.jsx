import React, { useState } from 'react';
import bgimg from '../assets/images/bgimg.jpg';
import RKL from '../assets/icons/headicon.svg';
import fbicon from '../assets/icons/fbicon.svg';
import lkdnicon from '../assets/icons/lkdnicon.svg';
import twittericon from '../assets/icons/twitter.svg';
import menuicon from '../assets/icons/menicon.png';
import './style.css';

const Header = ({ backgroundImg, logo, socialIcons, menuIcon, mainTitle, mainDescription, buttonText }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="flex justify-between p-8 lg:px-24 lg:py-12">
        <div>
          <img src={logo} alt="Logo" className="" />
        </div>
        <div>

        <div className="hidden md:flex  space-x-4 lg:space-x-8">
          <span>

          <div className="flex space-x-4">
            <button className="fgt-ff-medium text-[17.61px] text-white rounded-full border-2 px-6 py-1 border-white">
              Login
            </button>
            <button className="fgt-ff-medium text-[17.61px] text-black rounded-full py-1 px-6 bg-[#FFDDB6]">
              Online Payment
            </button>
          </div>
          </span>
          <div className="flex space-x-3 pt-2">
            {socialIcons.map((icon, index) => (
              <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end pt-8 ">
          <img src={menuIcon} alt="Menu Icon" className="w-16 h-16 cursor-pointer" onClick={toggleMenu} />
        </div>
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-[transparent] p-4  relative mx-7 max-w-[23rem] shadow-lg rounded-lg">
          <div className="flex flex-col space-y-4">
            <button className="fgt-ff-medium text-[17.61px] text-black rounded-full py-1 px-6 bg-[#FFDDB6]">
              Online Payment
            </button>
            <button className="fgt-ff-medium text-[17.61px] text-white rounded-full border-2 px-6 py-1 border-white">
              Login
            </button>
            
            <div className="flex space-x-3 justify-center">
              {socialIcons.map((icon, index) => (
                <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
              ))}
            </div>
            
          </div>
        </div>
      )}

      <div className="flex justify-end  px-8  lg:pr-24  mt-[10rem]">
        <div className="max-w-2xl bg-white py-8 px-8 lg:px-12 rounded-md">
          <h1 className="fgt-ff-medium text-[30px] lg:text-[34.91px]">
            {mainTitle}
          </h1>
          <p className="text-[16px] lg:text-[18.34px] fgt-ff-light py-6">
            {mainDescription}
          </p>
          <button className="bg-[#EEB26D] px-8 lg:px-12 py-3 rounded-md">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const socialIcons = [lkdnicon, fbicon, twittericon];

  return (
    <Header
      backgroundImg={bgimg}
      logo={RKL}
      socialIcons={socialIcons}
      menuIcon={menuicon}
      mainTitle="We Make Law Make Sense"
      mainDescription="RKL Holzapfel Sperry & Ebberson is a full-service law firm that understands legal issues can be overwhelming. Our attorneys work tirelessly for individuals, families, and businesses alike."
      buttonText="Learn More"
    />
  );
};

export default App;
