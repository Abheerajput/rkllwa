import React from 'react';
import img1 from '../../assets/images/img1.png';
import groupimg from '../../assets/images/groupimg.png';
import '../../Style/style.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Section1 = ({ title, description, buttonText, backgroundImg, sideImg }) => {
  // Use media queries to detect screen size
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  // Remove <br> tags if on a small screen
  const processedDescription = isSmallScreen 
    ? description.replace(/<br\s*\/?>/gi, ' ') 
    : description;

  return (
    <>
      <div
      id="content"
        className="xs:px-[5.2%] "

        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundColor: '#403C5C'
        }}
      >
        <div className="flex xs:flex-col sm:flex-col md:flex-col flex-row justify-between py-16 xs:px-0 px-[3%] ">
          <div className="w-1/2 xl:pl-[2%] sm:w-full md:w-full xs:w-full">
            <h1 className="text-[40px] lg:text-[50px] xs:text-[35px] fgt-ff-medium text-white leading-tight">
              {title}
            </h1>
            <p
              className="text-[18px] lg:text-[20px] fgt-ff-semibold text-white mt-4 pb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: processedDescription }}
            />
            <button
             className="bg-[#E0AF04] px-[32px] lg:px-[42px] py-[12px] lg:py-[14px] rounded-md mt-4">
             
              {buttonText}
              
             
            </button>
          </div>
          <div className="w-1/2 sm:w-full md:w-full xs:w-full flex justify-center lg:justify-end pt-8 lg:pt-0">
            <img src={sideImg} alt="Group" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const description = `Strategic. Efficient. And committed to your success. RKL Law is poised to serve you for your <br /> transactional business, BOIR compliance, and immigration needs. You can rely on our knowledge, <br />  experience, and diligence to plan, grow, gain, resolve, and get you where you need to be.  We’ll handle the <br />  law so you can handle the rest. 
Learn More
`;

  return (
    <Section1
      // title="We make your team your ally"
      description={description}
      buttonText="Learn More"
      backgroundImg={img1}
      sideImg={groupimg}
    />
  );
};

export default App;
