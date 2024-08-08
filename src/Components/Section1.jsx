import React from 'react';
import img1 from '../assets/images/img1.png';
import groupimg from '../assets/images/groupimg.png';
import './style.css';

const Section1 = ({ title, description, buttonText, backgroundImg, sideImg }) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundColor: '#403C5C'
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between py-16 px-8 lg:px-24">
        <div className="lg:w-1/2">
          <h1 className="text-[40px] lg:text-[50px] fgt-ff-medium text-white leading-tight">
            {title}
          </h1>
          <p className="text-[18px] lg:text-[20px] fgt-ff-light text-white mt-4 pb-4 leading-relaxed">
            {description}
          </p>
          <button className="bg-[#EEB26D] px-[32px] lg:px-[42px] py-[12px] lg:py-[14px] rounded-md mt-4">
            {buttonText}
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end pt-8 lg:pt-0">
          <img src={sideImg} alt="Group" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const description = `Our attorneys are uniquely qualified to help you, with our wealth of real-world 
  experience and dedication to excellent client service. When you work with 
  Lasher Holzapfel Sperry & Ebberson, you are working with more than a law 
  firm. You are working with a law firm on a mission. A mission to make the legal 
  process more clear, more effective, and more efficient for our clients. Our 
  attorneys are creative, efficient, and approachable. We strive to understand 
  your goals, be a part of your team, and respond with clear and effective 
  counsel. We have attorneys and staff who can provide these services in 
  multiple languages.`;

  return (
    <Section1
      title="We make your team your ally"
      description={description}
      buttonText="Learn More"
      backgroundImg={img1}
      sideImg={groupimg}
    />
  );
};

export default App;

