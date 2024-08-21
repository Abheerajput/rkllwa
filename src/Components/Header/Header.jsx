import React, { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import crossIcon from "../../assets/images/pngwing.png"
import NewsAndEvents from '../../Pages/NewsandEvents/NewsAndEvents';
import Section1 from '../Section/Section1';
import Solution from '../../Pages/Solutions/Solution';
import Footer from '../../Layout/Footer/Footer';
import bgimg from '../../assets/images/bgimg.jpg';
import RKL from '../../assets/icons/headicon.svg';
import RKL2 from '../../assets/icons/Rkl2.svg';
import aboutus from "../../assets/icons/aboutusicon.svg"
import stay from "../../assets/icons/stayicon.svg"
import lkdnicon2 from "../../assets/icons/drpdwicon2.svg"
import fbicon2 from "../../assets/icons/drpdwicon3.svg"
import twittericon2 from "../../assets/icons/drpdwicon4.svg"
import icon1 from "../../assets/icons/drpdwicon1.svg"
import fbicon from '../../assets/icons/fbicon.svg';
import lkdnicon from '../../assets/icons/lkdnicon.svg';
import twittericon from '../../assets/icons/twitter.svg';
import menuicon from '../../assets/icons/logo2.svg';
import '../../Style/style.css';

const Header = ({ backgroundImg, logo, socialIcons, socialIcons2, menuIcon, mainTitle, mainDescription, buttonText, icon }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

  return (
    <>
   
    <div
      className="bg-cover  overflow-x-hidden bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='absolute pl-[5.2%] top-[20%]'>
          <Link to="/">
          <img src={logo} alt="Logo" className="w-[365px] h-[175px]" />
          </Link>
        </div>
      <div className="flex px-[5.2%] overflow-x-hidden justify-end   p-8 ">
        
        <div>
          <div className=" md:flex ">
            <span>
              <div className="flex space-x-4 xs:hidden">
                <button className="fgt-ff-medium text-[17.61px] text-white rounded-full border-2 px-6 py-1 border-white">
                  Login
                </button>
                <button className="fgt-ff-medium text-[17.61px] text-black rounded-full py-1 px-6 bg-[#FFDD00]">
                  Online Payment
                </button>
                <div className="flex space-x-3 pt-2">
                  {socialIcons.map((icon, index) => (
                    <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
                  ))}
                </div>
              </div>
            </span>

          </div>
          <div className="flex items-center justify-end pt-8">
            <img src={menuIcon} alt="Menu Icon" className="w-16 h-16 cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
      </div>

      {menuOpen && (

        <div ref={menuRef} className=" absolute  top-0 w-full mt-[56px]  bg-white h-full  max-h-[570px]  xs:max-h-[720px]  shadow-lg ">
          <div className="flex justify-between xs:p-2 p-8 px-[5.2%] lg:py-12">
            <div>
              <img
                src={icon}
                alt="Logo"
                className="w-48 sm:w-48 md:w-72 lg:w-72 xl:w-72"
              />
            </div>

            <div>
              <div className=" md:flex ">
                <span>
                  <div className="flex space-x-4 xs:hidden">
                    <button className="fgt-ff-medium text-[17.61px] text-[#E6A358] rounded-full border-2 px-6 py-1 border-[#E6A358]">
                      Login
                    </button>
                    <button className="fgt-ff-medium text-[17.61px] text-white rounded-full py-1 px-6 bg-[#FFDD00]">
                      Online Payment
                    </button>
                    <div className="flex space-x-3 pt-2">
                      {socialIcons2.map((icon, index) => (
                        <img key={index} src={icon} alt={`Social Icon ${index}`} className="w-6 h-6" />
                      ))}
                    </div>
                  </div>
                </span>

              </div>
              <div className="flex items-center justify-end pt-8">
              
                <img
                    src={menuOpen ? crossIcon : menuicon}
                    alt={menuOpen ? "Close Icon" : "Menu Icon"}
                    className="w-16 h-16 cursor-pointer"
                    onClick={toggleMenu}

                  />
              </div>
            </div>

           

          </div>
          <div className='w-9/12 '>
            <div className='flex justify-between xs:w-screen xs:px-6  xs:flex-col  w-full  pl-[6.9%]'>

              <span className='flex flex-col gap-2 text-black'>
                <h1 className='fgt-ff-medium text-[27px] flex gap-[10px] flex-wrap'><img src={icon1} alt="" />  Practice Areas</h1>
                <p className='text-[20px] fgt-ff-light text-[#403C5C] pt-2'><Link to="/business">Business Law</Link></p>
                <p className='text-[20px] fgt-ff-light text-[#403C5C]'><Link to="/boir">BOIR Compliance</Link> </p>
                <p className='text-[20px] fgt-ff-light text-[#403C5C]'>   <Link to="/Immigration-Law">Immigration Law</Link></p>
              </span>

              <span className='flex flex-col gap-2 text-black'>
                <h1 className='fgt-ff-medium text-[27px] flex gap-[10px] flex-wrap '><img src={aboutus} alt="" /> About Us
                </h1>
                <p className='text-[20px] fgt-ff-light text-[#403C5C] pt-2'>Contact Us</p>



                <p className='text-[20px] fgt-ff-light text-[#403C5C]'> <Link to="/founders">Founders</Link> </p>
                <p className='text-[20px] fgt-ff-light text-[#403C5C]'>Careers </p>
                <p className='text-[20px] fgt-ff-light text-[#403C5C]'>Testimonials </p>
              </span>

              <span className='flex flex-col gap-2 text-black'>
                <h1 className='fgt-ff-medium text-[27px] flex gap-[10px] flex-wrap'><img src={stay} alt="" /> Stay Informed</h1>
                <p className='text-[20px] fgt-ff-light text-[#403C5C] pt-2'>Blogs</p>



                <p className='text-[20px] fgt-ff-light text-[#403C5C]'>News & Events</p>
                <p className='text-[20px] fgt-ff-light text-[#403C5C]'>Press Releases & Publications</p>
                <p className='text-[20px] fgt-ff-light text-[#403C5C]'>Subscribe to Newsletter</p>
              </span>



            </div>
          </div>

        </div>


      )}

      <div className="flex justify-end sm:mt-12 xs:hidden px-8 pr-28 mt-4">
        <div className="max-w-2xl bg-[#E3E6EC] py-8 px-8 lg:px-12 rounded-md">
          <h1 className="fgt-ff-medium text-[30px] lg:text-[34.91px]">
            {mainTitle}
          </h1>
          <p className="text-[16px] lg:text-[18.34px] fgt-ff-light py-6">
  {Array.isArray(mainDescription) ? mainDescription.map((line, index) => (
    <React.Fragment key={index}>{line}</React.Fragment>
  )) : mainDescription}
</p>
          <button className="bg-[#FFDD00] px-8 lg:px-12 py-3  rounded-md">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
    <Section1/>
    <Solution/>
    <NewsAndEvents />
    <Footer />
    
    </>
  );
};

const App = () => {
  const socialIcons = [lkdnicon, fbicon, twittericon];
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];

  return (
    <Header
      backgroundImg={bgimg}
      logo={RKL}
      icon={RKL2}
      socialIcons2={socialIcons2}
      socialIcons={socialIcons}
      menuIcon={menuicon}
      mainTitle="We Make Law Make Sense"
      mainDescription={[
        "RKL Holzapfel Sperry & Ebberson is a full-service ",<br />,
        
        " law firm that understands legal issues can be "
      ]}
      buttonText="Learn More"
    />
    
  );
};

export default App;