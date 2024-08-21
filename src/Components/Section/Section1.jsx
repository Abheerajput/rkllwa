import React from 'react';
import img1 from '../../assets/images/img1.png';
import groupimg from '../../assets/images/groupimg.png';
import '../../Style/style.css';
const Section1 = ({ title, description, buttonText, backgroundImg, sideImg }) => {
  return (
    <>
      <div
        className=" xs:px-[5.2%]"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundColor: '#403C5C'
        }}
      >
        <div className="flex xs:flex-col sm:flex-col md:flex-col  flex-row justify-between py-16  xs:px-0 px-[3%] ">
          <div className="w-1/2  xl:pl-[2%] sm:w-full md:w-full xs:w-full">
            <h1 className="text-[40px] lg:text-[50px] xs:text-[35px] fgt-ff-medium text-white leading-tight">
              {title}
            </h1>
            <p
              className="text-[18px] lg:text-[20px] fgt-ff-light text-white mt-4 pb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <button className="bg-[#EEB26D] px-[32px] lg:px-[42px] py-[12px] lg:py-[14px] rounded-md mt-4">
              {buttonText}
            </button>
          </div>
          <div className="w-1/2 sm:w-full md:w-full  xs:w-full flex justify-center lg:justify-end pt-8 lg:pt-0">
            <img src={sideImg} alt="Group" className="max-w-full  h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const description = `Our attorneys are uniquely qualified to help you, with our wealth of real-world <br> experience and dedication to excellent client service. When you work with <br> Lasher Holzapfel Sperry & Ebberson, you are working with more than a law <br> firm. You are working with a law firm on a mission. A mission to make the legal <br> process more clear, more effective, and more efficient for our clients. Our <br> attorneys are creative, efficient, and approachable. We strive to understand <br> your goals, be a part of your team, and respond with clear and effective <br> counsel. We have attorneys and staff who can provide these services in <br> multiple languages.`;

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