import React from 'react';
import {Link} from "react-router-dom"
import icon1 from "../../assets/icons/navbaricon.svg";
import '../../Style/style.css';

const Navbar = () => {
  return (
    <>
  <div className='' id='topscroll'>
 <div className="bg-[#E0AF04]  px-[5.2%] py-4 ">
      <div className="flex justify-between items-center">
    <Link to="/boir">
        <p className="fgt-ff-medium  sx:text-[12px] text-[24px] lg:text-[22px] text-white md:text-[20px]">FinCEN' beneficial owner <br className='hidden xs:block'/> compliance   <br className='hidden sm:block'/>made easy for companies <i>Nationwide</i>  </p>
     
        </Link>
        <p className="flex  text-white gap-2 flex-col md:gap-4 fgt-ff-bold text-[16px]">
        <span className='flex items-center sx:text-[13px] gap-2 text-start '>
          Learn more
          <img src={icon1} alt="Icon" className="w-4 h-4 md:w-6 md:h-6" />
        </span>
        <span className='text-start sx:text-[13px] text-[17px]'>
                  <a href="tel:8189909999" className="text-white hover:underline">
                    Call us: 818-990-9999
                  </a>
                </span>
        </p>
     
      </div>
    </div>
  </div>
  
    </>
   
  );
};

export default Navbar;
