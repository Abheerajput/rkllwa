import React from 'react';
import {Link} from "react-router-dom"
import icon1 from "../../assets/icons/navbaricon.svg";
import '../../Style/style.css';

const Navbar = () => {
  return (
    <>
    <Link to="/boir">
  <div className='' id='topscroll'>
 <div className="bg-[#E0AF04]  px-[5.2%] py-4  md:py-6">
      <div className="flex justify-between items-center">
        <p className="fgt-ff-medium  text-[16px] text-white md:text-[20px]">BOIR reporting made easy </p>
       
        <p className="flex  text-white gap-2 flex-col md:gap-4 fgt-ff-bold text-[16px]">
        <span className='flex items-center gap-2 text-start '>
          Learn more
          <img src={icon1} alt="Icon" className="w-4 h-4 md:w-6 md:h-6" />
        </span>
          <span className='text-start text-[17px]'>

          Call us :  818-990-9999
          </span>
        </p>
       
      </div>
    </div>
  </div>
    </Link>
    </>
   
  );
};

export default Navbar;
