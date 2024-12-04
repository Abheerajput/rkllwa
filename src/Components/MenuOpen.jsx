import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import crossIcon from "../assets/icons/crossicon.svg"
// import NewsAndEvents from '../../Pages/NewsandEvents/NewsAndEvents';
// import Section1 from '../Section/Section1';
// import Solution from '../../Pages/Solutions/Solution';
// import Footer from '../../Layout/Footer/Footer';
// import bgimg from '../../assets/images/bgimg2.svg';
// import bgimg from '../../assets/images/bgimg.jpg';
// import RKL from '../assets/icons/headicon.svg';
import RKL2 from '../assets/icons/Rkl2.svg';
import aboutus from "../assets/icons/aboutusicon.svg"
import stay from "../assets/icons/stayicon.svg"
// import lkdnicon2 from "../assets/icons/drpdwicon2.svg"
// import fbicon2 from "../assets/icons/drpdwicon3.svg"
// import twittericon2 from "../assets/icons/drpdwicon4.svg"
import icon1 from "../assets/icons/drpdwicon1.svg"
// import fbicon from '../assets/icons/fbicon.svg';
// import lkdnicon from '../assets/icons/lkdnicon.svg';
// import twittericon from '../assets/icons/twitter.svg';
import menuicon from '../assets/icons/logo2.svg';
import '../Style/style.css';
function MenuOpen({ open, close  ,isAnimating}) {
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                close()
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div>
            {open && <div
                ref={menuRef}
                className={`absolute top-0 w-full mt-[59px]   sx:mt-[79px]  bg-white h-full max-h-[450px] xl:max-h-[500px] xs:max-h-[720px] shadow-lg 
          ${isAnimating ? 'animate-slide-out' : 'animate-slide-in'}`}
            >
                <div className="flex justify-between xs:p-2 p-8 px-[5.2%] lg:py-6">
                    <div>
                        <Link to="/">
                            <img
                                src={RKL2}
                                alt="Logo"
                                className="w-48 sm:w-40 md:w-72  lg:w-72 xl:w-72"
                            />
                        </Link>
                    </div>
                    <div>
                        <div className="md:flex">
                            <span>
                                <div className="flex space-x-4">

                                    <div className="flex space-x-3 items-center pt-2">


                                        <Link to="/">
                                            <img
                                                src={open ? crossIcon : menuicon}
                                                alt={open ? "Close Icon" : "Menu Icon"}
                                                className="w-16 h-16  xs:w-10 xs:h-10 cursor-pointer"
                                                onClick={close}

                                            />
                                        </Link>
                                        <div className="flex items-center justify-end xs:pt-4 ">

                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>

                    </div>
                </div>
                <div className='w-9/12  xs:w-full'>
                    <div className='flex justify-between xs:w-screen   xs:flex-col  w-full  pl-[6.9%]'>

                        <span className="flex flex-col gap-2  xs:pl-0 text-black">
                            <h1 className="fgt-ff-medium text-[27px] sx:text-[18px] flex gap-[10px] flex-wrap">
                                <img src={icon1} alt="Practice Areas" /> Practice Areas
                            </h1>
                            <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C] pt-2"> <Link to="/business">Business Law</Link> </p>
                            <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]"><Link to="/boir">BOIR Compliance</Link></p>
                            <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">
                                <Link to="/Immigration-Law">Immigration Law</Link>
                            </p>
                        </span>
                        <span className="flex flex-col gap-2 text-black">
                            <h1 className="fgt-ff-medium text-[27px] sx:text-[18px]  flex xs:pt-4 gap-[10px] flex-wrap">
                                <img src={aboutus} alt="About Us" /> About Us
                            </h1>
                            <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C] pt-2">
                            <Link to="/contactus"> Contact Us</Link>
                                </p>
                            <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">
                                <Link to="/founders">Founders</Link>
                            </p>
                            <p className="text-[20px] fgt-ff-light sx:text-[16px] text-[#403C5C]"><Link to="/careers">Careers</Link> </p>
                            {/* <p className="text-[20px] fgt-ff-light sx:text-[16px] text-[#403C5C]">Testimonials</p> */}
                        </span>
                        <span className="flex flex-col gap-2 text-black">
                            <h1 className="fgt-ff-medium text-[27px] sx:text-[18px] xs:pt-4 flex gap-[10px] flex-wrap">
                                <img src={stay} alt="Stay Informed" /> Stay Informed
                            </h1>
                            {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C] pt-2">Blogs</p> */}
                            <p className="text-[20px]  sx:text-[16px] fgt-ff-light text-[#403C5C]"><Link to="/news&events">News & Events</Link> </p>
                            {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">Press Releases & Publications</p> */}
                            {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">Subscribe to Newsletter</p> */}
                            {/* <p className="text-[20px] sx:text-[16px] fgt-ff-light text-[#403C5C]">Unsubscribe</p> */}
                        </span>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MenuOpen
