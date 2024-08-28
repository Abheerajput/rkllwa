import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import SecondHeader from '../../Layout/Header/SecondHeader';
import { FaPlus, FaMinus } from 'react-icons/fa'; 
import "slick-carousel/slick/slick.css";
import icon2 from '../../assets/icons/Posts.svg';
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import boir from "../../assets/icons/Boir.svg"
import img1 from "../../assets/icons/boirimg1.svg"
import Footer from "../../Layout/Footer/Footer"
import '../../Style/style.css';
import MenuOpen from '../MenuOpen';
const Business = () => {
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
    const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
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
       <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="Business Law"
      />
       <div className="text-[26px] sx:text-[14px] fgt-ff-normal text-[#403C5C] px-[5.2%] bg-[#F7F6F1] py-4">
        <Link to="/" className="hover:underline">Home</Link> {'>'}
        <span onClick={toggleMenu} style={{ cursor: 'pointer' }}> Practice Area </span> {'>'}
        <Link to="/" className="hover:underline">Business Law</Link> 
      </div>
      <div>
      <div className="bg-white w-full pb-12 xs:pb-2 xs:pt-4 pt-8  px-[5.2%]  flex xs:flex-col sm:flex sm:flex-col   sm:p-10">
        {/* Profile Section */}
        <div className=' w-[65%] sm:w-full xs:w-full'>
<div className="flex md:text-start sm:text-start  xs:flex-col gap-16 xs:items-start items-center">
  <div className='text-[50px] xs:text-[35px] sm:text-[40px]  fgt-ff-medium xs:text-start  flex xs:flex-col xs:gap-2 gap-6 xs:items-start items-center text-[#403C5C]'><img src={boir} alt="" className="xs:w-[70px]"/> We got the law, you get to business.</div>

</div>
<div>
  <p className='text-[20px] fgt-ff-light pt-4 xs:pt-2 sx:text-[16px] '>One of the most important decisions a new business owner must make is determining  the appropriate type  of  business entity structure for the new venture.  The type of entity selected will have significant tax and  legal liability implications. </p>
  <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Since 2004, our attorneys have been assisting clients in determining the appropriate type of entity,preparing  and  filing the documents required to register the entity with the appropriate  governmental   authority, and preparing any other necessary documents to get a business operation up and running.  These services include:</p>
  <ul className=' pt-4 xS:pt-8 flex flex-col gap-2 sx:text-[16px]'>
    <li className='text-[20px]  fgt-ff-light sx:text-[16px]'>●	LLC formation, sub-chapter S and sub-chapter C corporate formations</li>
    <li className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Drafting joint-venture, partnership, shareholder, and other operating agreements</li>
    <li className='text-[20px] fgt-ff-light sx:text-[16px] '>●	Corporate governance and business operations</li>
    <li className='text-[20px] fgt-ff-light  sx:text-[16px]'>●	Fictitious business filings</li>
  </ul>

  <p className='text-[20px] fgt-ff-light  pt-4 sx:text-[16px]'>Once a business is formed, it must be able to conduct transactions which ensure the stability and profitability    of  the venture, and make acquisitions or mergers to expand profitability or market share. Our attorneys have the experience to protect our client’s interests in every transaction. RKL Law provides strategic legal solutions for  clients in a myriad of circumstances at various stages of a venture’s evolution. We know how to draft contracts  to ensure that a business is protected if any disputes arise. The firm’s experienced transactional attorneys assist clients in a range of business matters, including all of the following: </p>
  <ul className=' pt-4 flex flex-col gap-2 sx:text-[16px]'>
    <li  className='text-[20px]  fgt-ff-light flex gap-4 sx:text-[16px]'>●	Corporate structuring</li>
    <li  className='text-[20px]  fgt-ff-light sx:text-[16px]'>●	Consulting agreements
</li>
<li  className='text-[20px]  fgt-ff-light sx:text-[16px]'>●	Assisting Start-Ups </li>
<li className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Dissolution agreements</li>
<li className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Leases</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Purchase agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Security agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Shareholder agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Commercial contracts and corporate transactions</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Licensing agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Asset sales</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Confidentiality, non-disclosure and non-compete agreements</li>
<li className='text-[20px] fgt-ff-light  sx:text-[16px]'>●	Contract negotiations, preparations, drafting, analysis and review</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	UCC 1 Filings</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Strategic alliance counseling, negotiations and agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Disclaimer of liability agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Distribution Agreements</li>
<li  className='text-[20px] fgt-ff-light sx:text-[16px]'>●	Lender/investor agreements  </li>
  </ul>
 <p className='text-[20px] py-4 fgt-ff-light sx:text-[16px]'>Please  <span className='border-[#4861eb] border-b-2'><Link to="/contactus"><a href="#topscroll">contact us</a></Link> </span>  for a free consultation to discuss your business transactional law issues.</p> 
</div>

        </div>

        {/* <div className='w-[35%] xs:w-full sm:w-full xs:mt-4 sm:mt-4 h-full lg:flex lg:justify-end flex justify-end'>
        <div className="bg-[#FFEDD7] h-[50%] sm:w-full xs:w-full md:w-[80%] lg:w-[80%] xl:w-[80%] p-4 rounded-md pl-8 xs:pl-4  xs:my-4 ">
              <p className='flex justify-center xs:pt-0 pt-6'><img src={icon2} alt="" /></p>
              <h3 className="text-[35px] fgt-ff-normal text-center sx:text-[28px]  text-[#02131D] xs:pt-2 pt-9 mb-4"> Latest Posts</h3>
              <div className="text-[#212121]">
                <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden '/> Celebrating 50 Years
                 <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
               
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
            
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
           
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px] sx:text-[16px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                <p className=' flex  text-[18px] fgt-ff-medium text-[#02131D] sx:text-[16px] items-center gap-3 pb-5'>Read More <FaArrowRightLong /> </p>
                </p>
          
              
             
              </div>
            </div>
        </div>
         */}
    
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Business
