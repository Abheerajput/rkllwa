import React from 'react'
import RKL from '../../assets/icons/headicon.svg';
import RKL2 from '../../assets/icons/Rkl2.svg';
import img1 from '../../assets/images/img1.png';
import lkdnicon2 from "../../assets/icons/drpdwicon2.svg"
import fbicon2 from "../../assets/icons/drpdwicon3.svg"
import SecondHeader from '../../Layout/Header/SecondHeader';
import twittericon2 from "../../assets/icons/drpdwicon4.svg"
import { FaGreaterThan } from "react-icons/fa6";
import fbicon from '../../assets/icons/fbicon.svg';
import lkdnicon from '../../assets/icons/lkdnicon.svg';
import twittericon from '../../assets/icons/twitter.svg';
import menuicon from '../../assets/icons/menicon.png';
import Footer from "../../Layout/Footer/Footer"
import founder1 from "../../assets/icons/founder4.svg"
import founder2 from "../../assets/icons/founder5.svg"
import founder3 from "../../assets/icons/founder6.svg"
// import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
// import fbicon2 from '../../assets/icons/drpdwicon3.svg';
// import twittericon2 from '../../assets/icons/drpdwicon4.svg';

import '../../Style/style.css';
import { Link } from 'react-router-dom';
const Founderscreen = () => {
  const socialIcons = [lkdnicon2, fbicon2, twittericon2];
  return (
    <>
    <div>
    <SecondHeader
        socialIcons2={socialIcons}
        mainTitle="Our Founders"
      />
   
  </div>
  <div className="py-4 bg-[#F7F6F1]">

      <p className='fgt-ff-normal px-[5.2%] sx:text-[16px] text-[26.5px] flex items-center gap-3'> 
       <Link to="/">Home</Link>  
        <FaGreaterThan className='w-3 h-3' />  Founders  </p>
    </div>
<div className='flex justify-between px-[5.2%] py-12 xs:gap-8 xs:px-[5.2%]  sm:gap-6 xs:flex-col xs:items-center md:items-center  '>
    <p className='xs:w-full '>
        <Link to="/profile/Sohila Rezai">
        <img src={founder2} alt="" className='w-full' />
        <h3 className='text-[23px] fgt-ff-semibold text-center'><span className='text-[#844C0D]'> Sohila Rezai</span> <br /> Partner</h3>
        </Link>
    </p>
    <p className='xs:w-full '>
      <Link to="/profile/Nazanin Lahijani">
        <img src={founder1} alt="" className='w-full'/>
        <h3 className='text-[23px] fgt-ff-semibold text-center'> <span className='text-[#844C0D]'> Ninaz Khorsandi  </span> <br />Partner</h3>
        </Link>
    </p>
    <p className='xs:w-full '>
      <Link to="/profile/Ninaz Khorsandi">
        <img src={founder3} alt=""  className='w-full'/>
        <h3 className='text-[23px] fgt-ff-semibold text-center'> <span className='text-[#844C0D]'>Nazanin Lahijani</span><br />Partner</h3>
        </Link>
    </p>
</div>
    <Footer/>
</>
  )
}
const App = () => {
  const socialIcons = [lkdnicon, fbicon, twittericon];
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];

  return (
    <Founderscreen
    backgroundImg={img1}
      logo={RKL}
      icon={RKL2}
      socialIcons2={socialIcons2}
      socialIcons={socialIcons}
      menuIcon={menuicon}
      mainTitle="We Make Law Make Sense"
      mainDescription="RKL Holzapfel Sperry & Ebberson is a full-service law firm that understands legal issues can be overwhelming. Our attorneys work tirelessly for individuals, families, and businesses alike."
      buttonText="Learn More"
    />
  );
};

export default App;
