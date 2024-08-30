import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/images/img1.png';
import groupimg from '../../assets/images/groupimg.png';
import '../../Style/style.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import MenuOpen from '../MenuOpen';

const Section1 = ({ title, description, buttonText, backgroundImg, sideImg }) => {
  // Use media queries to detect screen size
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  // Remove <br> tags if on a small screen
  const processedDescription = isSmallScreen 
    ? description.replace(/<br\s*\/?>/gi, ' ') 
    : description;

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
  
    // Set focus on the menu when it opens
    useEffect(() => {
      if (menuOpen && menuRef.current) {
        menuRef.current.focus();
      }
    }, [menuOpen]);
  return (
    <>
    {menuOpen && (
        <MenuOpen 
          ref={menuRef}  // Attach ref to the MenuOpen component
          open={menuOpen} 
          close={toggleMenu} 
          isAnimating={isAnimating} 
          tabIndex="-1"  // Make it focusable
        />
      )}
      <div
      id="content"
        className="xs:px-[5.2%] "

        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundColor: '#403C5C'
        }}
      >
        <div className="flex xs:flex-col sm:flex-col md:flex-col flex-row justify-between py-16 xs:px-0 px-[3%] ">
          <div className="w-1/2 xl:pl-[2%] sm:w-full md:w-full xs:w-full">
            <h1 className="text-[40px] lg:text-[50px] xs:text-[35px] fgt-ff-medium text-white leading-tight">
              {title}
            </h1>
           
            <div >
              <h3 className='text-[25px] text-white fgt-ff-semibold mt-4 pb-4'> Strategic. Efficient. And committed to your success.</h3>
           <p className='text-[18px] text-white  pb-4 lg:text-[20px] fgt-ff-semibold'>RKL Law is poised to serve you for your  transactional business, BOIR compliance, and immigration needs. You can rely on our knowledge,   experience, and diligence to plan, grow, gain, resolve, and get you where you need to be.  </p>
            </div>
           
          </div>
          <div className="w-1/2 sm:w-full md:w-full xs:w-full flex justify-center lg:justify-end pt-8 lg:pt-0">
            <img src={sideImg} alt="Group" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const description = `Strategic. Efficient. And committed to your success. <br/> RKL Law is poised to serve you for your  transactional business, BOIR compliance, and immigration needs. You can rely on our knowledge,   experience, and diligence to plan, grow, gain, resolve, and get you where you need to be.  We’ll handle the   law so you can handle the rest. 

`;
window.scrollTo(0, 0);

  return (
    <div >
    <Section1
      // title="We make your team your ally"
      description={description}
      buttonText="Learn More"
      backgroundImg={img1}
      sideImg={groupimg}
    /></div>
  );
};

export default App;
