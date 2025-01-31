import React, { useState } from 'react';
import FillingInformation from './FillingInformation';
import ReportingCompany from './ReportingCompany';
import CompanyApplicant from './CompanyApplicant';
import BeneficialOwner from './BeneficialOwner';
import Submit from './Submit';
import { TbSpeakerphone } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

const BoirForm = () => {
  const defaultColor = '#565C65';
  const activeColor = '#1A4480';
  const [activeIndex, setActiveIndex] = useState(0); // Track the active header index
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <FillingInformation />;
      case 1:
        return <ReportingCompany />;
      case 2:
        return <CompanyApplicant />;
      case 3:
        return <BeneficialOwner />;
      case 4:
        return <Submit />;
      default:
        return null;
    }
  };

  // Navigation handlers
  const handlePrevious = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < 4) setActiveIndex(activeIndex + 1);
  };

  return (
    <>
      <div className='mt-8 max-w-screen bg-[#162E51]'>
        <div className='flex flex-col md:flex-row py-6 px-4 md:px-[5%] items-center md:justify-between'>
          <h1 className='text-white font-bold text-xl md:text-2xl lg:text-3xl'>BOI E-FILING</h1>
        </div>
      </div>
      <div className='px-4 md:px-[5%]'>
        <h1 className='text-[24px] md:text-[30px] lg:text-[35px] font-bold pt-6'>Beneficial Ownership Information Report (BOIR)</h1>
        <p className='py-4 md:py-6 text-sm md:text-base'>OMB No. 1506-0076</p>
        <p className='pb-4 md:pb-6 text-sm md:text-base'>
          Complete the report in its entirety with all required information. Fields marked with an asterisk (*) symbol are the fields that, at a minimum, must be completed by all companies to file the report...
        </p>
        
        <header className='flex flex-wrap pt-8 pb-4 justify-center md:justify-between border-b border-[#CCCCCC]'>
          {['Filling Information', 'Reporting Company', 'Company Applicant', 'Beneficial Owner', 'Submit'].map((title, index) => (
            <h1 
              key={index}
              className={`px-4 py-2 m-1 text-white font-bold rounded-lg cursor-pointer text-sm md:text-base`}
              style={{ backgroundColor: activeIndex === index ? activeColor : defaultColor }}
              onClick={() => handleClick(index)}
            >
              {title}
            </h1>
          ))}
        </header>

        <div className="mt-4">
          {renderContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={handlePrevious} 
            disabled={activeIndex === 0}
            className={`px-4 py-2 rounded-md font-semibold ${activeIndex === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Previous
          </button>
          
          <button 
            onClick={handleNext} 
            disabled={activeIndex === 4}
            className={`px-4 py-2 rounded-md font-semibold ${activeIndex === 4 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Next
          </button>
        </div>

        <div className='flex py-2 mt-8 mb-8 rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown}>
          <span className='ml-2 flex font-semibold text-[15px] md:text-[17px] gap-2 items-center'>
            <TbSpeakerphone /> 
            PRIVACY ACT AND PAPERWORK REDUCTION ACT NOTICE
          </span>
          <span className='mr-4'>
            {isOpen ? (
              <FaChevronUp className='ml-2' />
            ) : (
              <FaChevronDown className='ml-2' />
            )}
          </span>
        </div>

        {isOpen && (
          <div className='mt-[-34px] border-t-0 border-4 p-2 bg-gray-100'>
            <div className='border-b-2 pt-2 ml-6 inline-block font-bold text-black border-black'>
              Instructions for Item 1 – Type of filing:
            </div>
            <div className='p-4 text-sm md:text-base'>
              <p>This notice is given under the Privacy Act of 1974...
                <br /><br />
                This collection of information is authorized under 31 U.S.C. 5336 and 31 C.F.R. 1010.380...
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BoirForm;
