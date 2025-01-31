import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown

const FillingInformation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className='border-b-2 mb-2'>
      <h2 className='text-[30px] font-bold'>Filing Information</h2>
      <div className='flex py-2  rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown}>
      
        <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
        <span className='mr-4'>{isOpen ? (
          <FaChevronUp className='ml-2' /> // Show up icon when open
        ) : (
          <FaChevronDown className='ml-2' /> // Show down icon when closed
        )}</span>
        
        
      </div>
      {isOpen && ( // Render dropdown content only when isOpen is true
        <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
            <div className='border-b-2 pt-2 ml-6 inline-block font-bold   text-black border-black'>Instructions for Item 1 – Type of filing:</div>
            <div className='p-6'>
                <ul className=' flex flex-col  ml-6 list-disc gap-2'>
                    <li>Check box 1a “Initial report” if this is the first BOIR filed for the reporting company.</li>
                    <li>Check box 1b “Correct prior report” if the report corrects inaccurate information from a previously filed BOIR.</li>
                    <li>Check box 1c “Update prior report” if the report updates a previously filed BOIR, for example, to include one or more new beneficial owners.</li>
                    <li>Check box 1d “Newly exempt entity” if, after having filed a BOIR, the reporting company is now exempt from BOI reporting requirements. If this checkbox is selected, then filer must fill out fields 1e–1h (reporting company information associated with most recent report) and no other fields in the BOIR.</li>
                    <li>If type of filing 1b, 1c, or 1d is selected, enter values for 1e “Legal name”, 1f “Tax identification type”, and 1g “Tax identification number” for the reporting company that match the most recently filed BOIR. For example, if the reporting company previously filed an initial report and then an updated report, the reporting company information in the next updated report should match the reporting company information provided on the most recently filed updated report rather than the initial report</li>
                    <li>For 1f, select the tax identification type (i.e., a U.S. Employer Identification Number (EIN), a U.S. Social Security Number or Individual Taxpayer Identification Number (SSN-ITIN), or foreign taxpayer identification number (Foreign)) the reporting company reported in the most recently filed BOIR. If tax identification type entered in 1f is “Foreign”, select the corresponding foreign country/jurisdiction in 1h “Country/Jurisdiction (if foreign tax ID only)” associated with the foreign tax identification number.</li>
                    </ul>
                    <p className='border-b-2 pt-6 ml-2 inline-block font-bold   text-black border-black'>Instructions for Item 2 – Date prepared:</p>
                    <p className='text-[15px]  ml-2 py-2 '>This item is automatically populated with the current date.</p>

            </div>
           
        </div>
      )}
    <div className="mt-4">
  <h3 className="font-bold">1. Type of filing:</h3>
  <ul className="list-none pl-0">
    <li className="flex items-center mt-2">
      <input 
        
        type="radio"  
         name="filingType"
        className="mr-2 w-7 h-7 rounded-full border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
     a. Initial report
    </li>
    <li className="flex items-center mt-2">
      <input 
       type="radio" 
        name="filingType"
        className="mr-2 w-7 h-7 rounded-full border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
      b.Correct prior report
    </li>
    <li className="flex items-center mt-2">
      <input 
         type="radio" 
          name="filingType"
        className="mr-2 w-7 h-7 rounded-full border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
     c. Update prior report
    </li>
    <li className="flex items-center  mt-2">
      <input 
        type="radio" 
         name="filingType"
        className="mr-2 w-7 h-7 rounded-full border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none  cursor-pointer"
      /> 
     d. Newly exempt entity
    </li>
  </ul>
  <p className='mt-6 '>2. Date prepared (auto-filled)</p>
<input 
  type="date" 
  className="mt-2 px-3 mb-4  py-2 w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

</div>
    </div>
  );
};

export default FillingInformation;
