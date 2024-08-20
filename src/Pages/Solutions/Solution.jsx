import React from 'react';
import img1 from '../../assets/icons/doc.svg';
import img2 from '../../assets/icons/doc2.svg';
import img3 from '../../assets/icons/people.svg';

const Solution = ({ title, description, buttonText, sections }) => {
  return (
    <div className="  bg-[#F7F6F1]  py-16">
      <div className="grid grid-cols-2 xs:flex xs:px-4 xs:flex-col gap-9 py-[120px]">
        <div className="flex  flex-wrap justify-center items-center gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={section.img} alt={section.title} className="mb-4" />
              <h1 className="text-[20px] fgt-ff-normal">{section.title}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center  md:start ">
          <span className="fgt-ff-medium text-[50px] xs:text-center lg:text-left">
            {title}
          </span>
          <p className="fgt-ff-light text-[20px] pt-8 sm:px-7 xs:text-center lg:text-left"   dangerouslySetInnerHTML={{ __html:description }}>
        
           
          </p>
          <div className="xs:text-center lg:text-start pt-8">
            <button className="bg-[#403C5C] text-white fgt-ff-medium px-[42px] py-[14px] rounded-md">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const sections = [
    { img: img1, title: 'Business Law' },
    { img: img2, title: 'BOIR Compliance' },
    { img: img3, title: 'Immigration Law' }
  ];

  return (
    <Solution
      title="We make our practice your solution."
      description="Whether you have personal or business legal needs,  our <br/> team responds quickly and acts decisively."
      buttonText="About Practice Areas"
      sections={sections}
    />
  );
};

export default App;
