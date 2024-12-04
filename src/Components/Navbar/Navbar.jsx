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
          {/* Breaking News Marquee */}
          <div className="bg-red-700 text-white overflow-hidden">
  <div className="breaking-news-wrapper">
    <div className="breaking-news marquee">
      <p>
        Breaking BOIR News - BOIR Compliance reporting and enforcement paused nationwide due to preliminary injunction ruling!
        In a nutshell, on December 3, 2024, a Texas Court issued a preliminary injunction in favor of the plaintiffs in the case of Texas Top Cop Shop, Inc. et al. vs. Garland (U.S. Attorney General). 
        As part of the ruling, “the Court has determined that the CTA and Reporting Rule are likely unconstitutional for purposes of a preliminary injunction. It has not made an affirmative finding that the CTA and Reporting Rule are contrary to law or that they amount to a violation of the Constitution.” 
        Click on the link to view a copy of the order. (https://polsinelli.gjassets.com/content/uploads/2024/12/cta-v-garland-district-court-opinion-preliminary-injunction.pdf) 
        We have yet to see how far this gets and when, since it’s a preliminary injunction. Stay tuned business owners for more updates!!!
      </p>
    </div>
  </div>
</div>

          {/* Main Navbar Content */}
          <div className="bg-[#E0AF04] px-[5.2%] py-4">
            <div className="flex justify-between items-center">
              <p className="fgt-ff-medium sx:text-[12px] text-[24px] lg:text-[22px] text-white md:text-[20px]">
                FinCen beneficial owner compliance <br className='hidden xs:block sm:block' />made easy for companies <i>Nationwide</i>
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
        </div>
      </Link>
    </>
  );
};

export default Navbar;
