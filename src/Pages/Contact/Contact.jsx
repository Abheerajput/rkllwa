import React from 'react'
import SecondHeader from '../../Layout/Header/SecondHeader'
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import icon from "../../assets/icons/contacticon.svg"
import phone from "../../assets/icons/phoneicon.svg"
import message from "../../assets/icons/messageicon.svg"
import facebook from "../../assets/icons/facebookicon.svg"
import instagram from "../../assets/icons/instagramicon.svg"
import lkdn from "../../assets/icons/linkdinicon.svg"
import Footer from "../../Layout/Footer/Footer"
import { Link } from 'react-router-dom';
import '../../Style/style.css';
const Contact = () => {
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  window.scrollTo(0, 0);
  return (
    <>
      <div>
        <SecondHeader
          socialIcons2={socialIcons2}
          mainTitle="Contact"
        />
        <div className="text-[26px] sx:text-[14px] fgt-ff-normal pl-[5.2%] text-[#403C5C] bg-[#F7F6F1] py-4">
          <Link to="/" className="hover:underline">Home</Link> {'>'}
          <Link to="/contactus" className="hover:underline">Contact Us</Link>

        </div>
        <div className='px-[5.2%] mt-20 mb-12 flex md:flex-col  sm:flex-col xs:flex-col
        '>
          <div className="  p-12 xs:p-4 xs:py-8 xs:w-full rounded-lg w-[45%] sm:w-full md:w-full  bg-[#F7F6F1]">
            <div className='flex gap-4 items-center'>
              <p>
                <img src={icon} alt="" className='w-16' />
              </p>
              <h3 className='text-[50px] sm:text-[38px] xs:text-[25px] fgt-ff-medium text-[#403C5C]'>Contact our team</h3>
            </div>
            
            <form className="grid grid-cols-1  gap-4">

              <div className='flex w-full gap-7'>
                <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">First Name
                  <input type="text" placeholder="Name" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent  text-[16px] fgt-ff-light  focus:ring-2 focus:ring-orange-500" />

                </label>

                <label className="block  text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">Last Name
                  <input type="text" placeholder="Last Name" className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />

                </label>

              </div>

              <div className="sm:col-span-2">
                <label className="block  text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">Email</label>
                <input type="email" placeholder="Email" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block  text-[14px] lexend-medium w-1/2 xs:text-[12px] text-[#21272A]">Company</label>
                <input type="email" placeholder="Company" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block  text-[14px] lexend-medium w-1/2 xs:text-[12px] text-[#21272A]">Area Of Interest</label>
                <input type="email" placeholder="Interest" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="sm:col-span-2 h-full">
                <label className="block  text-[14px]  lexend-medium w-1/2 xs:text-[12px] text-[#21272A]">Message</label>
                <textarea name="message" id="" placeholder='type here....' className='bg-transparent max-h-[286px] border-[#919191] h-screen border  w-full mt-1 p-2  rounded-md focus:outline-none text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500'></textarea>
              </div>



              <div className="w-1/4 ">
                <button type="submit" className="bg-[#EEB26D] text-white p-2 rounded-md w-full  xs:text-[12px] transition-colors">Submit</button>
              </div>
            </form>
          </div>
          <div className='w-[55%] sm:mb-8 xs:mb-8 md:mb-8 md:justify-start sm:w-full xs:w-full sm:justify-start xs:justify-start xs:mt-12 sm:mt-12 md:mt-12 flex justify-center'>
            <div>
              <h1 className='text-[50px] text-[#403C5C] sm:text-[38px]  xs:text-[25px]   fgt-ff-medium'>Call us</h1>
              <p className='text-[20px] xs:text-[15px] fgt-ff-normal text-[#212121]'>Call our team Mon-Fri from 9am to 5pm.</p>
              <span className='flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] '> <img src={phone} alt="" className='xs:w-[1.2rem] sm:w-[1.6rem]' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>818-990-9999</h3> </span>
              <div className='mt-12'>
                <h3 className='text-[50px] sm:text-[38px] text-[#403C5C]  xs:text-[25px]  fgt-ff-medium'>Chat with us</h3>
                <p className='text-[20px] sm:text-[17px] xs:text-[15px] fgt-ff-normal text-[#212121] py-4'>Speak to our friendly team via live chat.</p>

                <span className='flex items-center gap-4 my-4  text-[27px] fgt-ff-medium text-[#212121] '> <img src={message} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem]' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>      <a href="mailto:info@rkllaw.com?subject={subject}">Email Us</a>  </h3> </span>
                <a href="https://www.facebook.com/profile.php?id=61564380045589" target="_blank" rel="noopener noreferrer">
                  <span className='flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] '> <img src={facebook} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem]' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on facebook</h3> </span>
                </a>
                <a href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                  <span className='flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] '> <img src={instagram} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem]' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on Instagram</h3> </span>
                </a>
                <a href="http://www.linkedin.com/in/rkl-law-9aa681324" target="_blank" rel="noopener noreferrer" >
                <span className='flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] '> <img src={lkdn} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem]' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on Linkdln</h3> </span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact
