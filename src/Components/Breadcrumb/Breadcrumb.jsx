
import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/images/img1.png';
import groupimg from '../../assets/images/groupimg.png';
import '../../Style/style.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import MenuOpen from '../MenuOpen';
import { FaGreaterThan } from "react-icons/fa6";

const Breadcrumb =()=> {
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
    <div className="py-4 bg-[#F7F6F1] ">

      <p className='fgt-ff-normal text-[26.5px] sx:text-[14px]  pl-[5.2%] text-[#403C5C] flex flex-wrap items-center gap-1'><Link to="/">Home</Link> 
       <FaGreaterThan className='w-3 h-3' />  
       
       <span onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            Practice Areas
          </span><FaGreaterThan className='w-3 h-3'/>
        
         <Link to="/">
      Immigration Law  </Link></p>
    </div>
    </>
  );
}

export default Breadcrumb;
 