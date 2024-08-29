import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import crossIcon from "../../assets/icons/crossicon.svg"
import RKL2 from '../../assets/icons/Rkl2.svg';
import fbicon from '../../assets/icons/fbicon.svg';
import lkdnicon from '../../assets/icons/lkdnicon.svg';
import twittericon from '../../assets/icons/twitter.svg';
import img1 from '../../assets/images/img1.png';
import lkdnicon2 from "../../assets/icons/drpdwicon2.svg"
import menuIcon from '../../assets/icons/logo2.svg';
import icon1 from "../../assets/icons/drpdwicon1.svg";
import aboutus from "../../assets/icons/aboutusicon.svg";
import stay from "../../assets/icons/stayicon.svg";
import fbicon2 from "../../assets/icons/drpdwicon3.svg"
import twittericon2 from "../../assets/icons/drpdwicon4.svg"
import insta from '../../assets/icons/ins.svg';
import menuicon from '../../assets/icons/newmenu.svg';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const SecondHeader = ({ socialIcons2, mainTitle }) => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const socialIcons = [lkdnicon, fbicon, twittericon];


  const [isAnimating, setIsAnimating] = useState(false);
  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match the duration of your slide-out animation
    } else {
      setMenuOpen(true);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="bg-[#212138]   py-4 text-white" style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="flex justify-end px-[5.2%] pt-4">
        <div className=" items-center sm:items-end md:items-end md:flex  md:flex-col sm:flex sm:flex-col ">
          <div className="flex space-x-4  ">
            {/* <button className="fgt-ff-medium text-[17.61px] text-white rounded-full border-2 px-6 py-1 border-white">
              Login
            </button>
            <button className="fgt-ff-medium text-[17.61px] text-black rounded-full py-1 px-6 bg-[#FFDD00]">
              Online Payment
            </button> */}
            <div className="flex space-x-3 pt-2">
            
            <div className=" flex  justify-end mb-12 ">
            <span>
                <div className="flex items-center justify-center gap-6 xs:pt-0 ">
                  <a href="https://www.facebook.com/profile.php?id=61564380045589" target="_blank" rel="noopener noreferrer">
                    <img src={fbicon2} alt="Facebook" className='xs:hidden' />
                  </a>
                  <a href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className='xs:hidden ' />
                  </a>
                  <a href="http://www.linkedin.com/in/rkl-law-9aa681324" target="_blank" rel="noopener noreferrer" className='flex'>
                    <img src={lkdnicon} alt="LinkedIn" className='xs:hidden' />
                  </a>
                  <img src={menuIcon} alt="Menu Icon" className="w-16 h-16 xs:w-12 xs:h-12 cursor-pointer" onClick={toggleMenu} />
                </div>
              </span>
            </div>
          
            </div>
          </div>
          
        </div>
      </div>
      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute top-0 w-full mt-[82px] bg-white h-full max-h-[570px] xs:max-h-[720px] shadow-lg 
          ${isAnimating ? 'animate-slide-out' : 'animate-slide-in'}`}
        >
          <div className="flex justify-between xs:p-2 p-8 px-[5.2%] lg:py-12">
            <div>
              <Link to="/">
                <img
                  src={RKL2}
                  alt="Logo"
                  className="w-48 sm:w-40 md:w-72  lg:w-72 xl:w-72"
                />
              </Link>
            </div>
            <div>
              <div className="md:flex">
                <span>
                  <div className="flex space-x-4 ">
                    {/* <button className="fgt-ff-medium text-[17.61px] text-[#E6A358] rounded-full border-2 px-6 py-1 border-[#E6A358]">
                      Login
                    </button>
                    <button className="fgt-ff-medium text-[17.61px] text-white rounded-full py-1 px-6 bg-[#FFDD00]">
                      Online Payment
                    </button> */}
                    <div className="flex space-x-3 items-center pt-2">

                      {/* <a href="https://www.linkedin.com/in/rkl-law-9aa681324/" target="_blank" rel="noopener noreferrer" className='flex'>
                        <img src={lkdnicon2} alt="LinkedIn" className='w-16 xs:w-12' />
                      </a> */}
                      <Link to="/">
                        <img
                          src={menuOpen ? crossIcon : menuIcon}
                          alt={menuOpen ? "Close Icon" : "Menu Icon"}
                          className="w-16 h-16 xs:w-10  cursor-pointer"
                          onClick={toggleMenu}

                        />
                      </Link>
                      <div className="flex items-center justify-end xs:pt-4 ">

                      </div>
                    </div>
                  </div>
                </span>
              </div>

            </div>
          </div>
          <div className='w-9/12  xs:w-full'>
            <div className='flex justify-between xs:w-screen   xs:flex-col  w-full  pl-[6.9%]'>

              <span className="flex flex-col gap-2  xs:pl-0 text-black">
                <h1 className="fgt-ff-medium text-[27px] sx:text-[18px] flex gap-[10px] flex-wrap">
                  <img src={icon1} alt="Practice Areas" /> Practice Areas
                </h1>
                <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C] pt-2"> <Link to="/business">Business Law</Link> </p>
                <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]"><Link to="/boir">BOIR Compliance</Link></p>
                <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">
                  <Link to="/Immigration-Law">Immigration Law</Link>
                </p>
              </span>
              <span className="flex flex-col gap-2 text-black">
                <h1 className="fgt-ff-medium text-[27px] sx:text-[18px]  flex xs:pt-4 gap-[10px] flex-wrap">
                  <img src={aboutus} alt="About Us" /> About Us
                </h1>
                <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C] pt-2">
                  <Link to="/contactus"> Contact Us</Link>
                 
                  </p>
                <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">
                  <Link to="/founders">Founders</Link>
                </p>
                <p className="text-[20px] fgt-ff-light sx:text-[16px] text-[#403C5C]"><Link to="/careers">Careers</Link></p>
                {/* <p className="text-[20px] fgt-ff-light sx:text-[16px] text-[#403C5C]">Testimonials</p> */}
              </span>
              <span className="flex flex-col gap-2 text-black">
                <h1 className="fgt-ff-medium text-[27px] sx:text-[18px] xs:pt-4 flex gap-[10px] flex-wrap">
                  <img src={stay} alt="Stay Informed" /> Stay Informed
                </h1>
                {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C] pt-2">Blogs</p> */}
                <p className="text-[20px]  sx:text-[16px] fgt-ff-light text-[#403C5C]"><Link to="/news&events">News & Events</Link></p>
                {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">Press Releases & Publications</p> */}
                {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">Subscribe to Newsletter</p> */}
                {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">Unsubscribe</p> */}
              </span>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-[50px] xs:text-[35px] pl-[5.2%] fgt-ff-medium pb-8  ">{mainTitle}</h1>
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
