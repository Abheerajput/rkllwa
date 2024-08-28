import React from 'react';
import img1 from '../../assets/images/img1.png';
import '../../Style/style.css';
import RKL from '../../assets/icons/Footerimg.svg';
import fbicon from '../../assets/icons/fbicon.svg';
import lkdnicon from '../../assets/icons/footerlkdnicon.svg';
import twittericon from '../../assets/icons/twitter.svg';
import insta from "../../assets/icons/inst.svg"

const Footer = ({ title, description, backgroundImg, fb, li, twit, insta }) => {
  return (
    <div
      className=" bg-[#042537]"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col  justify-center items-center py-24 xs:py-8 px-8 lg:px-24">
        <div className=" flex flex-col text-center items-center ">
          <img src={RKL} alt="RKL Icon" className="mb-4 xs:w-[17rem]" />
         
          <p className="text-[18px] text-center lg:text-[20px] sx:text-[16px] fgt-ff-light text-white xs:mt-0 mt-4 pb-4" dangerouslySetInnerHTML={{ __html: description }}>
          </p>
          <div className="flex justify-center gap-6 ">
            <a href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"> <img src={insta} alt="Instagram"className="" /></a>
            <a href="http://www.linkedin.com/in/rkl-law-9aa681324" target="_blank" rel="noopener noreferrer"> <img src={li} alt="LinkedIn" className="" /></a>
            <a href="https://www.facebook.com/profile.php?id=61564380045589" target="_blank" rel="noopener noreferrer">  <img src={fb} alt="Facebook" className="" /></a>
            {/* <a href="#"> <img src={twit} alt="Twitter" className="" /></a> */}
         
         
        
         
        </div>
      <p className='text-white sx:text-[16px] text-[20px] pt-20 xs:pt-6 fgt-ff-light'>
        {title}
      </p>
        </div>
       
      </div>
    </div>
  );
};

const App = () => {
  const description = "    RKL LAW <br/> 2625  Townsgate Road Suite 330 <br/> Westlake Village  CA 91361 <br/>Telephone: (818) 990-9999 <br/>Fax: (818) 990-9968 <br/>Email: info@rkllaw.com"
const title = "RKL Law, A Professional Corporation.  All Rights Reserved."
  return (
    <Footer
    title={title}
      description={description}
      backgroundImg={img1}
      fb={fbicon}
      li={lkdnicon}
      twit={twittericon}
      insta={insta}
    />
  );
};

export default App;
