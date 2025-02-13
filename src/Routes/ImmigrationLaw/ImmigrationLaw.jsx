import React from 'react';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Content from '../../Components/Content/Content';
import Footer from "../../Layout/Footer/Footer"
import SecondHeader from '../../Layout/Header/SecondHeader';
// import Founders from '../../Pages/Founders/Founder';
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import  { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/images/img1.png';
import groupimg from '../../assets/images/groupimg.png';
import '../../Style/style.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import MenuOpen from '../../Components/MenuOpen';
import { FaGreaterThan } from "react-icons/fa6";
const  ImmigrationLaw = ()=> {
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


  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [menuOpen]);
    window.scrollTo(0, 0);

  const socialIcons = [lkdnicon2, fbicon2, twittericon2];


  return (
    <div>
      <SecondHeader
        socialIcons2={socialIcons}
        mainTitle="We make our practice your solution"
      />
        {menuOpen && (
        <MenuOpen 
          ref={menuRef}  
          open={menuOpen} 
          close={toggleMenu} 
          isAnimating={isAnimating} 
          tabIndex="-1" 
        />
      )}
    <div className="py-4 bg-[#F7F6F1] ">

      <p className='fgt-ff-normal text-[26.5px] sx:text-[14px]  pl-[5.2%] text-[#403C5C] flex flex-wrap items-center gap-1'><Link to="/">Home</Link> 
       <FaGreaterThan className='w-3 h-3' />  
       
       <span onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            Practice Areas
          </span><FaGreaterThan className='w-3 h-3'/>
        
         <Link to="/">
      Immigration Law  </Link></p>
    </div>
      
      
      <Content/>
      {/* <Founders/> */}
      <Footer/>

    </div>
  );
}

export default ImmigrationLaw
