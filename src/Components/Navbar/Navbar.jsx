import React from 'react';
import {Link} from "react-router-dom"
import icon1 from "../../assets/icons/navbaricon.svg";
import '../../Style/style.css';

const Navbar = () => {
  return (
  <div className=''>
 <div className="bg-[#FFDD00]  px-[5.2%] py-4  md:py-6">
      <div className="flex justify-between items-center">
        <p className="fgt-ff-medium  text-[16px] md:text-[20px]">BOIR reporting made easy</p>
        <Link to="/boir">
        <p className="flex items-center gap-2 md:gap-4 fgt-ff-bold text-[14px] md:text-[17.61px]">
          Learn more
          <img src={icon1} alt="Icon" className="w-4 h-4 md:w-6 md:h-6" />
        </p>
        </Link>
      </div>
    </div>
  </div>
   
  );
};

export default Navbar;
