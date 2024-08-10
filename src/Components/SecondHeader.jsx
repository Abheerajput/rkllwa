import React from 'react';

import RKL from '../assets/icons/headicon.svg';
import RKL2 from '../assets/icons/Rkl2.svg';
import img1 from '../assets/images/img1.png';
import lkdnicon2 from "../assets/icons/drpdwicon2.svg"
import fbicon2 from "../assets/icons/drpdwicon3.svg"
import twittericon2 from "../assets/icons/drpdwicon4.svg"

import fbicon from '../assets/icons/fbicon.svg';
import lkdnicon from '../assets/icons/lkdnicon.svg';
import twittericon from '../assets/icons/twitter.svg';
import menuicon from '../assets/icons/menicon.png';
import './style.css';
const  SecondHeader = ({socialIcons2}) => {
  return (
    <header className="bg-gray-800  px-8  p-4 text-white" style={{
      backgroundImage: `url(${img1})`,
    }}>
        <div className='flex justify-end pt-4'>
          <div className=" md:flex ">
            <span>
              <div className="flex space-x-4 xs:hidden">
                <button className="fgt-ff-medium text-[17.61px] text-[#E6A358] rounded-full border-2 px-6 py-1 border-[#E6A358]">
                  Login
                </button>
                <button className="fgt-ff-medium text-[17.61px] text-white rounded-full py-1 px-6 bg-[#E6A358]">
                  Online Payment
                </button>
                <div className="flex space-x-3 pt-2">
              {socialIcons2.map((icon, index) => (
                <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
              ))}
            </div>
              </div>
            </span>
            <div className="flex items-center justify-end pt-8">
            <img src={menuicon} alt="Menu Icon" className="w-16 h-16 cursor-pointer" />
          </div>
          </div>
        </div>

        <h1 className="text-[50px] fgt-ff-medium pb-8">we make our practice your solution</h1>
    </header>
  );
}
const App = () => {
  const socialIcons = [lkdnicon, fbicon, twittericon];
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];

  return (
    <SecondHeader
    backgroundImg={img1}
      logo={RKL}
      icon={RKL2}
      socialIcons2={socialIcons2}
      socialIcons={socialIcons}
      menuIcon={menuicon}
      mainTitle="We Make Law Make Sense"
      mainDescription="RKL Holzapfel Sperry & Ebberson is a full-service law firm that understands legal issues can be overwhelming. Our attorneys work tirelessly for individuals, families, and businesses alike."
      buttonText="Learn More"
    />
  );
};

export default App;
