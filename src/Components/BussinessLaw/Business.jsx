import React from 'react'
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
const Business = () => {
    const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  return (
    <>
       <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="Business Law"
      />
       <div className="text-[26px] xs:text-[20px] fgt-ff-normal text-[#403C5C] px-[5.2%] bg-[#F7F6F1] py-4">
        <Link to="/" className="hover:underline">Home</Link> {'>'}
        <Link to="/founders" className="hover:underline">Business Law</Link> 
      </div>
      <div>
      <div className="bg-white pb-12 xs:pb-2 pt-8 grid  px-[5.2%] grid-cols-3 xs:flex xs:flex-col sm:flex sm:flex-col  md:felx md:flex-col sm:p-10">
        {/* Profile Section */}
        <div className=' col-span-2'>
<div className="flex md:text-start sm:text-start  xs:flex-col gap-16 xs:items-start items-center">
  <div className='text-[50px] xs:text-[35px] sm:text-[40px]  fgt-ff-medium xs:text-start  flex xs:flex-col gap-6 xs:items-start items-center text-[#403C5C]'><img src={boir} alt="" className="xs:w-[61px]"/> We got the law, you get to business.</div>

</div>
<div>
  <p className='text-[20px] fgt-ff-light pt-4 '>One of the most important decisions a new business owner must make is determining  the appropriate type <br /> of  business entity structure for the new venture.  The type of entity selected will have significant tax and <br /> legal liability implications. </p>
  <p className='text-[20px] fgt-ff-light pt-4 '>Since 2004, our attorneys have been assisting clients in determining the appropriate type of entity, <br /> preparing  and  filing the documents required to register the entity with the appropriate  governmental <br /> authority, and preparing any other necessary documents to get a business operation up and running.<br />  These services include:</p>
  <ul className=' pt-4'>
    <li className='text-[20px]  fgt-ff-light'>●	LLC formation, sub-chapter S and sub-chapter C corporate formations</li>
    <li className='text-[20px] fgt-ff-light '>●	Drafting joint-venture, partnership, shareholder, and other operating agreements</li>
    <li className='text-[20px] fgt-ff-light '>●	Corporate governance and business operations</li>
    <li className='text-[20px] fgt-ff-light '>●	Fictitious business filings</li>
  </ul>

  <p className='text-[20px] fgt-ff-light  pt-4'>Once a business is formed, it must be able to conduct transactions which ensure the stability and profitability <br /> of  the venture, and make acquisitions or mergers to expand profitability or market share. Our attorneys have the  <br />experience to protect our client’s interests in every transaction. RKL Law provides strategic legal solutions for <br /> clients in a myriad of circumstances at various stages of a venture’s evolution.   We know how to draft  contracts <br /> to ensure that a business is protected if any disputes arise. The firm’s experienced transactional attorneys assist clients  <br /> in a range of  business matters, including all of the following: </p>
  <ul className='py-4'>
    <li  className='text-[20px]  fgt-ff-light flex gap-4'>●	Corporate structuring</li>
    <li  className='text-[20px]  fgt-ff-light'>●	Consulting agreements
</li>
<li  className='text-[20px]  fgt-ff-light'>●	Assisting Start-Ups </li>
<li className='text-[20px] fgt-ff-light '>●	Dissolution agreements</li>
<li className='text-[20px] fgt-ff-light '>●	Leases</li>
<li  className='text-[20px] fgt-ff-light '>●	Purchase agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Security agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Shareholder agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Commercial contracts and corporate transactions</li>
<li  className='text-[20px] fgt-ff-light '>●	Licensing agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Asset sales</li>
<li  className='text-[20px] fgt-ff-light '>●	Confidentiality, non-disclosure and non-compete agreements</li>
<li className='text-[20px] fgt-ff-light  '>●	Contract negotiations, preparations, drafting, analysis and review</li>
<li  className='text-[20px] fgt-ff-light '>●	UCC 1 Filings</li>
<li  className='text-[20px] fgt-ff-light '>●	Strategic alliance counseling, negotiations and agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Disclaimer of liability agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Distribution Agreements</li>
<li  className='text-[20px] fgt-ff-light '>●	Lender/investor agreements  </li>
  </ul>
</div>



        
        </div>

        {/* Sidebar */}
        <div className="flex col-span-1 justify-end  md:justify-center xs:justify-center xs:mr-0 xs:mb-5 md:mr-0 mt-6 xs:ml-0  md:mx-0 md:ml-3  pr-0">
          <div className="mt-6 w-full  md:mt-0 md:w-[100%] xs:w-[100%] sm:w-[100%] text-start">
            <div className="bg-[#FFEDD7] p-4 rounded-md pl-8   ">
              <p className='flex justify-center xs:pt-2 pt-6'><img src={icon2} alt="" /></p>
              <h3 className="text-[35px] fgt-ff-normal text-center  text-[#02131D] xs:pt-3 pt-9 mb-4 xs:text-[30px]"> Latest Posts</h3>
              <div className="text-[#212121]">
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px]  fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                 <p className=' flex pb-4 text-[18px] fgt-ff-medium text-[#02131D]  items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
               
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px]  fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
            
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px]  fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium text-[#02131D]  items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
           
          
              
             
              </div>
            </div>

            {/* Testimonials Slider */}
          
          </div>
        </div>

    
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Business
