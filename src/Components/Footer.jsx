import React from 'react';
import img1 from '../assets/images/img1.png';
import './style.css';
import RKL from '../assets/icons/headicon.svg';
import fbicon from '../assets/icons/fbicon.svg';
import lkdnicon from '../assets/icons/lkdnicon.svg';
import twittericon from '../assets/icons/twitter.svg';
import insta from "../assets/icons/inst.svg"

const Footer = ({ title, description, backgroundImg, fb, li, twit, insta }) => {
  return (
    <div
      className=" bg-[#042537]"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col  justify-center items-center py-24 px-8 lg:px-24">
        <div className=" flex flex-col text-center items-center ">
          <img src={RKL} alt="RKL Icon" className="mb-4" />
         
          <p className="text-[18px] lg:text-[20px] fgt-ff-light text-white mt-4 pb-4" dangerouslySetInnerHTML={{ __html: description }}>
          </p>
          <div className="flex justify-center ">
          <img src={insta} alt="Instagram"className="mr-4" />
          <img src={li} alt="LinkedIn" className="mr-4" />
          <img src={fb} alt="Facebook" className="mr-4" />
          <img src={twit} alt="Twitter" className="mr-4" />
        </div>
      <p className='text-white text-[20px] pt-20 fgt-ff-light'>
        {title}
      </p>
        </div>
       
      </div>
    </div>
  );
};

const App = () => {
  const description = "601 Union St., Suite 2600 <br/> Seattle, WA 98101-4000 <br/> Phone: (206) 624-1230 <br/> Fax: (206) 340-2563"
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
