import React from 'react';
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Breadcrumb =()=> {
  return (
    <div className="py-4 bg-[#F7F6F1] ">

      <p className='fgt-ff-normal text-[26.5px] sx:text-[14px]  pl-[5.2%] text-[#403C5C] flex flex-wrap items-center gap-1'><Link to="/">Home</Link>  <FaGreaterThan className='w-3 h-3' />  Practice Areas   <FaGreaterThan className='w-3 h-3'/>  <Link to="/">
      Immigration Law  </Link></p>
    </div>
  );
}

export default Breadcrumb;
 