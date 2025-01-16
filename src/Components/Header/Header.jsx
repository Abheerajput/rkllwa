import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import crossIcon from "../../assets/images/pngwing.png"
// import NewsAndEvents from '../../Pages/NewsandEvents/NewsAndEvents';
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
  const [showCard, setShowCard] = useState(false); // Track visibility of the card

  // Toggle the card visibility
  const handleCardToggle = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    setShowCard(true); // Automatically show the card when component is mounted
  }, []);
  // Close the card
  const handleCardClose = () => {
    setShowCard(false);
  };

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
{showCard && (
  <div
    className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50"
    onClick={handleCardClose} // Close card when clicking outside
  >
    <div
      className="bg-white max-h-[90%] overflow-scroll scrollbar-hide  p-8 rounded-lg shadow-xl w-[50%] max-w-full"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
    >
      <div className="flex justify-end">
        <button onClick={handleCardClose}>
          <img src={crossIcon} alt="Close" className="w-6" />
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">IF YOU ARE A CALIFORNIA WILDFIRE VICTIM CLICK HERE FOR INFORMATION ON WAYS TO RECOVER</h2>
      <p className="mb-4">At present, our firm is providing complimentary advice regarding the following:</p>

      <ul className="list-disc pl-6 mb-4">
        <li><strong>FIRST-PARTY CLAIMS / LAWSUITS</strong>
          <ul className="list-inside">
            <li>For those who have property insurance. The loss is reported to your insurance company. We will give you advice so you do it correctly, from the start.</li>
            <li>It applies whether your home or business experienced total loss, partial loss, or just smoke and soot damage to its structure and/or contents.</li>
            <li>If the insurance company wrongly underpays or denies your claim, we can help you bring a lawsuit against them.</li>
            <li>We’ll help maximize your recovery at every step.</li>
          </ul>
        </li>
        <li><strong>THIRD-PARTY LAWSUITS</strong>
          <ul className="list-inside">
            <li>For those who do and do not have insurance. We will pursue those responsible for your loss, such as government leaders, utility companies, etc.</li>
            <li>No out-of-pocket costs for those joining mass tort lawsuits against responsible parties.</li>
            <li>We’ve been successful in past cases, recovering over $100,000,000 for plaintiffs in the Woolsey Fires lawsuit.</li>
          </ul>
        </li>
        <li><strong>GRANTS</strong>
          <ul className="list-inside">
            <li>Available for temporary housing, repairs, and other needs. These generally do not need to be repaid.</li>
            <li>Low-cost loans are also available for uninsured property losses, usually requiring repayment.</li>
          </ul>
        </li>
        <li><strong>FEMA (Federal Emergency Management Agency)</strong>
          <ul className="list-inside">
            <li>Financial assistance may be available if your insurance doesn’t cover your loss after a presidential disaster declaration.</li>
          </ul>
        </li>
      </ul>

      <p className="mb-4">It is best to consult with an attorney from the onset if you’ve experienced any kind of loss due to the fires. Insurance companies are not your advocate and may underpay or deny claims. A public adjuster cannot act as powerfully as an attorney when dealing with these matters.</p>
<div className='flex flex-wrap gap-3'>
<p className="font-semibold">Contact us for a free consultation or for more information:</p>
      <p className="font-semibold">Email: <a href="mailto:INFO@RKLLAW.COM" className="text-blue-500">INFO@RKLLAW.COM</a></p>
      <p className="font-semibold">Phone: <a href="tel:8189909999" className="text-blue-500">(818) 990-9999</a></p>
      <p className="font-semibold">Ninaz Khorsandi, Esq.</p>
      <p className="font-semibold">RKL LAW</p>
      <p className="font-semibold">2625 Townsgate Rd., Suite 330</p>
      <p className="font-semibold">Westlake Village, CA 91361</p>
      <p className="font-semibold">Tel: <a href="tel:8189909999" className="text-blue-500">(818) 990-9999</a></p>
      <p className="font-semibold">Fax: (818) 990-9968</p>
      <p className="font-semibold">Website: <a href="https://www.rkllaw.com" className="text-blue-500">www.rkllaw.com</a></p>

</div>
     
      <div className=" overflow-y-auto scrollbar-hide">
        {/* Content inside the scrollable area */}
        <p className="mb-4">Detailed Content goes here...</p>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleCardClose}>Close</button>
    </div>
  </div>
)}


      <div
        className="bg-cover  overflow-x-hidden bg-center h-screen"
        style={{
          backgroundImage: `url(https://rkl-public-assets.s3.us-west-1.amazonaws.com/hero.jpg)`,
        }}
      >
        <div className='absolute pl-[3.4%] xs:mt-4 xs:top-[11%] sx:top-[9%] sm:top-[12%] md:top-[12%] top-[20%]'>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[365px]  lg:w-[300px] xs:w-[250px] xs:-[250px]  h-[175px]" />
          </Link>
        </div>
        <div className="flex px-[5.2%] overflow-x-hidden justify-end   p-8 ">

          <div>
            <div className=" flex  justify-end mb-12 ">
            <span>
                <div className="flex items-center justify-center gap-6 xs:pt-0 ">
                  <a href="https://www.facebook.com/profile.php?id=61564380045589" target="_blank" rel="noopener noreferrer">
                    <img src={fbicon2} alt="Facebook" className='xs:hidden lg:w-7' />
                  </a>
                  <a href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className='xs:hidden  lg:w-7' />
                  </a>
                  <a href="http://www.linkedin.com/in/rkl-law-9aa681324" target="_blank" rel="noopener noreferrer" className='flex'>
                    <img src={lkdnicon} alt="LinkedIn" className='xs:hidden lg:w-7' />
                  </a>
                  <img src={menuIcon} alt="Menu Icon" className="w-16 h-16 xs:w-12 xs:h-12 lg:w-12 cursor-pointer" onClick={toggleMenu} />
                </div>
              </span>
            </div>
            <div className="flex justify-end sm:mt-20 sm:hidden xs:hidden mr-12 px-8  mt-4">
              <div className="max-w-2xl bg-[#E3E6EC] py-2 px-8 lg:px-8 rounded-md">
                <h1 className="fgt-ff-medium text-[30px] lg:text-[28px]">
                  {mainTitle}
                </h1>
                <p className="text-[16px] lg:text-[16px] fgt-ff-light py-2 xl:py-2 lg:py-2">
                  {Array.isArray(mainDescription) ? mainDescription.map((line, index) => (
                    <React.Fragment key={index}>{line}</React.Fragment>
                  )) : mainDescription}
                </p>
                
                  <button className="bg-[#E0AF04] px-8 lg:px-8 lg:py-2 xl:py-3  xl:px-12  rounded-md"  onClick={toggleMenu}>
                    {buttonText}
                  </button>
                
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
      {/* <NewsAndEvents /> */}
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