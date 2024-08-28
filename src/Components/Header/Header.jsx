import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import crossIcon from "../../assets/images/pngwing.png"
import NewsAndEvents from '../../Pages/NewsandEvents/NewsAndEvents';
import Section1 from '../Section/Section1';
import Solution from '../../Pages/Solutions/Solution';
import Footer from '../../Layout/Footer/Footer';
import bgimg from '../../assets/images/bgimg4.jpg';
// import bgimg from '/../../assets/images/bgimg.jpg';
import RKL from '../../assets/icons/headicon.svg';
import RKL2 from '../../assets/icons/Rkl2.svg';
// import aboutus from "../../assets/icons/aboutusicon.svg"
// import stay from "../../assets/icons/stayicon.svg"
import lkdnicon2 from "../../assets/icons/drpdwicon2.svg"
import fbicon2 from "../../assets/icons/drpdwicon3.svg"
import twittericon2 from "../../assets/icons/drpdwicon4.svg"
import icon1 from "../../assets/icons/drpdwicon1.svg"
import fbicon from '../../assets/icons/fbicon.svg';
import lkdnicon from '../../assets/icons/lkdnicon.svg';
import insta from '../../assets/icons/ins.svg';
import menuicon from '../../assets/icons/newmenu.svg';
import '../../Style/style.css';
import MenuOpen from '../MenuOpen';

const Header = ({ backgroundImg, logo, menuIcon, mainTitle, mainDescription, buttonText, icon }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    <>

      <div
        className="bg-cover  overflow-x-hidden bg-center h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className='absolute pl-[3.4%] xs:mt-4 xs:top-[11%] sx:top-[9%] sm:top-[12%] md:top-[12%] top-[9%]'>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[365px] xs:w-[250px] xs:-[250px]  h-[175px]" />
          </Link>
        </div>
        <div className="flex px-[5.2%] overflow-x-hidden justify-end   p-8 ">

          <div>
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
            <div className="flex justify-end sm:mt-20 sm:hidden xs:hidden mr-12 px-8  mt-4">
              <div className="max-w-2xl bg-[#E3E6EC] py-8 px-8 lg:px-12 rounded-md">
                <h1 className="fgt-ff-medium text-[30px] lg:text-[34.91px]">
                  {mainTitle}
                </h1>
                <p className="text-[16px] lg:text-[18.34px] fgt-ff-light py-6">
                  {Array.isArray(mainDescription) ? mainDescription.map((line, index) => (
                    <React.Fragment key={index}>{line}</React.Fragment>
                  )) : mainDescription}
                </p>
                <a href="#content">
                  <button className="bg-[#E0AF04] px-8 lg:px-12 py-3  rounded-md">
                    {buttonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {menuOpen && (
          <MenuOpen open={menuOpen} close={toggleMenu} isAnimating={isAnimating} />
        )}

      </div>
      <Section1 />
      <Solution />
      <NewsAndEvents />
      <Footer />

    </>
  );
};

const App = () => {
  const socialIcons = [lkdnicon,];
  const socialIcons2 = [lkdnicon2,];

  return (
    <Header
      backgroundImg={bgimg}
      logo={RKL}
      icon={RKL2}
      socialIcons2={socialIcons2}
      socialIcons={socialIcons}
      menuIcon={menuicon}
      mainTitle="Get ready. Move forward. Go far. "
      mainDescription={[
        " A trusted name for over 20 years, RKL LAW is here for you.", <br />, " Onward and upward together. "
      ]}
      buttonText="Learn More"
    />

  );
};

export default App;