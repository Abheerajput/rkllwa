import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import crossIcon from "../../assets/images/pngwing.png"
import RKL2 from '../../assets/icons/Rkl2.svg';
import fbicon from '../../assets/icons/fbicon.svg';
import lkdnicon from '../../assets/icons/lkdnicon.svg';
import twittericon from '../../assets/icons/twitter.svg';
import img1 from '../../assets/images/img1.png';
import menuicon from '../../assets/icons/logo2.svg';
import icon1 from "../../assets/icons/drpdwicon1.svg";
import aboutus from "../../assets/icons/aboutusicon.svg";
import stay from "../../assets/icons/stayicon.svg";

import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const SecondHeader = ({ socialIcons2, mainTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const socialIcons = [lkdnicon, fbicon, twittericon];
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };


  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="bg-[#212138]   py-4 text-white" style={{ backgroundImage: `url(${img1})`,
      backgroundSize:"cover",
      backgroundPosition:"center"
     }}>
      <div className="flex justify-end pt-4">
        <div className="md:flex items-center pr-4 ">
          <div className="flex space-x-4 xs:hidden ">
            <button className="fgt-ff-medium text-[17.61px] text-white rounded-full border-2 px-6 py-1 border-white">
              Login
            </button>
            <button className="fgt-ff-medium text-[17.61px] text-black rounded-full py-1 px-6 bg-[#FFDD00]">
              Online Payment
            </button>
            <div className="flex space-x-3 pt-2">
              {socialIcons.map((icon, index) => (
                <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end pt-8">

            <img
              src={menuicon}
              alt="Menu Icon"
              className="w-16 h-16 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div ref={menuRef} className="absolute overflow-hidden px-8  top-0 w-full mt-[56px] bg-white h-full max-h-[570px] xs:max-h-[720px] shadow-lg">
          <div className="flex justify-between pt-4 xs:p-2 px-2 lg:px-24 lg:py-12">
            <div>
              <Link to="/">
                <img
                  src={RKL2}
                  alt="Logo"
                  className="w-48 sm:w-48 md:w-72 lg:w-72 xl:w-72"
                />
              </Link>
            </div>
            <div>
              <div className="md:flex">
                <span>
                  <div className="flex space-x-4 xs:hidden">
                    <button className="fgt-ff-medium text-[17.61px] text-[#E6A358] rounded-full border-2 px-6 py-1 border-[#E6A358]">
                      Login
                    </button>
                    <button className="fgt-ff-medium text-[17.61px] text-white rounded-full py-1 px-6 bg-[#FFDD00]">
                      Online Payment
                    </button>
                    <div className="flex space-x-3 pt-2">
                      {socialIcons2.map((icon, index) => (
                        <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
                      ))}
                    </div>
                  </div>
                </span>
              </div>
              <div className="flex items-center justify-end pt-8">
                <Link to="/">
                  <img
                    src={menuOpen ? crossIcon : menuicon}
                    alt={menuOpen ? "Close Icon" : "Menu Icon"}
                    className="w-16 h-16 cursor-pointer"
                    onClick={toggleMenu}

                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-9/12">
            <div className="flex justify-between xs:w-screen xs:px-6 xs:flex-col w-full ">
              <span className="flex flex-col gap-2 pl-4 xs:pl-0 text-black">
                <h1 className="fgt-ff-medium text-[27px] flex gap-[10px] flex-wrap">
                  <img src={icon1} alt="Practice Areas" /> Practice Areas
                </h1>
                <p className="text-[20px] fgt-ff-light text-[#403C5C] pt-2"> <Link to="/business">Business Law</Link> </p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]"><Link to="/boir">BOIR Compliance</Link></p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">
                  <Link to="/Immigration-Law">Immigration Law</Link>
                </p>
              </span>
              <span className="flex flex-col gap-2 text-black">
                <h1 className="fgt-ff-medium text-[27px] flex gap-[10px] flex-wrap">
                  <img src={aboutus} alt="About Us" /> About Us
                </h1>
                <p className="text-[20px] fgt-ff-light text-[#403C5C] pt-2">Contact Us</p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">
                  <Link to="/founders">Founders</Link>
                </p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">Careers</p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">Testimonials</p>
              </span>
              <span className="flex flex-col gap-2 text-black">
                <h1 className="fgt-ff-medium text-[27px] flex gap-[10px] flex-wrap">
                  <img src={stay} alt="Stay Informed" /> Stay Informed
                </h1>
                <p className="text-[20px] fgt-ff-light text-[#403C5C] pt-2">Blogs</p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">News & Events</p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">Press Releases & Publications</p>
                <p className="text-[20px] fgt-ff-light text-[#403C5C]">Subscribe to Newsletter</p>
              </span>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-[50px] xs:text-[35px] fgt-ff-medium pb-8 pl-4">{mainTitle}</h1>
    </header>
  );
};

SecondHeader.propTypes = {
  socialIcons2: PropTypes.arrayOf(PropTypes.string).isRequired,
  mainTitle: PropTypes.string
};

SecondHeader.defaultProps = {
  mainTitle: 'We make our practice your solution'
};

export default SecondHeader;
