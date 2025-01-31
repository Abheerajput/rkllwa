
import React from 'react';
import { Link } from "react-router-dom";
import icon1 from "../../assets/icons/navbaricon.svg";
import '../../Style/style.css';

const Navbar = () => {


  
  const handlePhoneClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <Link to="/boir">
        <div id='topscroll'>
          <div className="bg-[#E0AF04] px-[5.2%] py-4">
            <div className="flex justify-between items-center">
              <p className="fgt-ff-medium sx:text-[12px] text-[24px] lg:text-[22px] text-white md:text-[20px]">
                FinCEN beneficial owner compliance <br className='hidden xs:block sm:block' />made easy for companies <i>Nationwide</i>
              </p>
              <p className="flex text-white gap-2 flex-col md:gap-4 fgt-ff-bold text-[16px]">
                <span className='flex items-center sx:text-[13px] gap-2 text-start '>
                  Learn more
                  <img src={icon1} alt="Icon" className="w-4 h-4 md:w-6 md:h-6" />
                </span>
                <div className='text-start flex flex-col justify-end fgt-ff-bold sx:text-[13px] text-[17px]'>
                  <div>
                    <a href="tel:8189909999" className="text-white hover:underline contents" onClick={handlePhoneClick}>
                      Call us: 818-990-9999
                    </a>
                  </div>
                </div>
              </p>
            </div>
          </div>
      <marquee className="bg-red-700 text-white py-1 fgt-ff-bold text-[16px]">
       BOIR UPDATE:In light! of the pending lawsuits BOIR reporting is currently voluntary pending on March 25,2025. Stay tuned...    
       <span>
         <Link to="/boir" className="text-white hover:underline pl-1">    Learn more</Link>
       </span>
      </marquee>
        </div>
      </Link>
    </>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import icon1 from "../../assets/icons/navbaricon.svg";
// import '../../Style/style.css';

// const Navbar = () => {

//   const handlePhoneClick = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     <>
//       <Link to="/boir">
//         <div id="topscroll">
//           <div className="bg-[#E0AF04] px-[5.2%] py-4">
//             <div className="flex justify-between items-center">
//               <p className="fgt-ff-medium sx:text-[12px] text-[24px] lg:text-[22px] text-white md:text-[20px]">
//                 FinCen beneficial owner compliance <br className="hidden xs:block sm:block" /> made easy for companies <i>Nationwide</i>
//               </p>
//               <p className="flex text-white gap-2 flex-col md:gap-4 fgt-ff-bold text-[16px]">
//                 <span
//                   className="cursor-pointer underline sx:text-[13px] gap-2 text-start"
//                   onClick={handleModalOpen}
//                 >
//                   Click Here For New Developments in BOIR Reporting
//                 </span>
//                 <div className="text-start flex flex-col justify-end fgt-ff-bold sx:text-[13px] text-[17px]">
//                   <div>
//                     <a
//                       href="tel:8189909999"
//                       className="text-white hover:underline contents"
//                       onClick={handlePhoneClick}
//                     >
//                       Call us: 818-990-9999
//                     </a>
//                   </div>
//                 </div>
//               </p>
//             </div>
//           </div>
//         </div>
//       </Link>

     
//     </>
//   );
// };

// export default Navbar;

