import React from 'react';
import icon1 from "../../assets/icons/navbaricon.svg";
import '../../Style/style.css';

const Navbar = () => {
  return (
    <div className="bg-[#FFDDB6] px-6 py-4 md:px-12 md:py-6">
      <div className="flex justify-between items-center">
        <p className="fgt-ff-medium text-[16px] md:text-[20px]">BOIR reporting made easy</p>
        <p className="flex items-center gap-2 md:gap-4 fgt-ff-bold text-[14px] md:text-[17.61px]">
          Learn more
          <img src={icon1} alt="Icon" className="w-4 h-4 md:w-6 md:h-6" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
