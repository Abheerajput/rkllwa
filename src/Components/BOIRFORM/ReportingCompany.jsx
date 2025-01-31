import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown
import { MdArrowDropDown } from 'react-icons/md'
const ReportingCompany = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [alternateNames, setAlternateNames] = useState([]);// State to manage dropdown visibility
const [isOpenn, setIsOpenn] = useState(false); 
    const [dropdown3, setḌropdown3] = useState(false);
    const [dropdown4, setḌropdown4] = useState(false);
    const [dropdown5, setḌropdown5] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(prevState => !prevState);
    };
    const toggleDropdown2 = () => {
        setIsOpenn(prevState => !prevState);
      };
      const toggleDropdown3 = () => {
        setḌropdown3(prevState => !prevState);
      };

      const toggleDropdown4 = () => {
        setḌropdown4(prevState => !prevState);
      };
      const toggleDropdown5 = () => {
        setḌropdown5(prevState => !prevState);
      };
      const addAlternateName = () => {
        setAlternateNames([...alternateNames, '']);
      };
    
      const removeAlternateName = (index) => {
        const updatedNames = alternateNames.filter((_, i) => i !== index);
        setAlternateNames(updatedNames);
      };
    
      const handleAlternateNameChange = (index, value) => {
        const updatedNames = [...alternateNames];
        updatedNames[index] = value;
        setAlternateNames(updatedNames);
      };
    return(
<div className='border-b-2'>
    <h2 className='text-[30px]  mt-8 font-bold'>Part I. Reporting Company Information</h2>
    <div className='flex py-2  rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown}>
      
      <span className='ml-2 flex gap-2 items-center font-bold'>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{isOpen ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
      
      
    </div>
    {isOpen && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='p-6'>
              <p>Reporting company information is entered in fields 3 through 16 of the BOIR.</p>
              <p className='border-b-2 font-bold pt-6 border-black inline-block'>Instructions for Item 3 – Request to receive FinCEN Identifier (FinCEN ID):</p> <br />
              <p>Check this box to receive a unique FinCEN Identifier for the reporting company. The FinCEN Identifier will be provided in the submission confirmation details provided to the filer after the BOIR is accepted.</p>
              <p  className='border-b-2 font-bold pt-6 border-black inline-block'>Instructions for Item 4 – Foreign pooled investment vehicle:</p>
<p>Check this box if the reporting company is a foreign pooled investment vehicle required to report information pursuant to 31 CFR 1010.380(b)(2)(iii).</p> <br />
<p>If the reporting company is a foreign pooled investment vehicle, the company need only report one beneficial owner who exercises substantial control over the entity. If more than one individual exercise substantial control over the entity, the entity shall report information with respect to the individual who has the greatest authority over the strategic management of the entity. The report should not include any information about company applicants.</p>
          </div>
      
      </div>
    )}
        <div className="mt-6 mb-6 border-b-2 border-gray-600">

  <ul className="list-none pl-0">
    <li className="flex items-center mt-2">
      <input 
        type="checkbox" 
        className="mr-2 w-7 h-7 rounded  border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
    3. Request to receive FinCEN ID
    </li>
    <li className="flex items-center mb-6 mt-2">
      <input 
        type="checkbox" 
        className="mr-2 w-7 h-7  rounded border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
4. Foreign pooled investment vehicle

    </li>
   
  
  </ul>
 

</div>
<div className='mb-4'>
    <p className='text-[20px] font-bold'>Legal name and alternate name(s)</p>
    <div className='flex py-2 mt-4 rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown2}>
      
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{isOpen ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
      
      
    </div>
    {isOpenn && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-4] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='p-6'>
              <p className='border-b-2 font-bold pt-2 border-black inline-block'>Instructions for Item 5 – Reporting company legal name:</p> <br />
              <p>Enter the reporting company’s full legal name as recorded on the articles of incorporation or other documents creating or registering the entity.</p>
              <p  className='border-b-2 font-bold pt-6 border-black inline-block'>Instructions for Item 6 – Alternate name:
              </p>
<p>Enter any of the reporting company’s trade names, “doing business as” or DBA names, or “trading as” or T/A names. If the reporting company has multiple alternate names, use the “+” or “-“ buttons in the BOIR to add additional alternate name fields (one field for each alternate name). Do not include the acronyms DBA or AKA with the alternate name.</p> <br />

          </div>
      
      </div>
    )}

</div>
<div className="mt-6 mb-6 border-b-2 border-gray-600">

<ul className="list-none pl-0">
      <li className="flex flex-col mt-2">
        <span>*5. Reporting Company legal name</span>
        <input
          type="text"
          placeholder="Enter legal name"
          className="mt-1 px-3 xs:w-full w-1/2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </li>

      <li className="flex flex-col mb-6 mt-2">
        <span>6. Alternate name (e.g., trade name, DBA)</span>
        <input
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 xs:w-full w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </li>

      {/* Dynamically added alternate names */}
      {alternateNames.map((name, index) => (
        <li key={index} className="flex flex-col mb-2 mt-2">
            <span>Alternate name (e.g. trade name, DBA) {index + 2 }</span>

          {/* Add/remove buttons for alternate names */}
          <div className='flex  gap-3'>
          <input
            type="text"
            placeholder={`Alternate name ${index + 1}`}
            value={name}
            onChange={(e) => handleAlternateNameChange(index, e.target.value)}
            className="mt-1 px-3 xs:w-full w-1/2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => removeAlternateName(index)}
            className="mt-2 px-2 py-1 text-white font-bold bg-red-500 rounded-md w-max"
          >
            Remove
          </button>
          </div>
         
        </li>
      ))}

      <button
        onClick={addAlternateName}
        className="px-4 py-2 text-white font-bold mb-4 rounded-md bg-[#1A4480]"
      >
        Add Alternate Name
      </button>
    </ul>
</div>
<h1>Form of identification</h1>
<div className='mb-4'>
    <p className='text-[20px] font-bold'>Legal name and alternate name(s)</p>
    <div className='flex py-2 mt-4 rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown3}>
      
      <span className='ml-2 flex gap-2 items-center '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{isOpen ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
      
      
    </div>
    {dropdown3 && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-4] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='p-6'>
              <p className='border-b-2 font-bold pt-2 border-black inline-block'>Instructions for Item 7 – Tax identification type:</p> <br />
              <p>Select “EIN” if the reporting company has a U.S. Employer Identification Number (EIN). Select “SSN-ITIN” if the reporting company utilizes a U.S. Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) as a tax identification number. Select “Foreign” if the reporting company has a tax identification number issued by a foreign jurisdiction and does not have a U.S. tax identification number.</p>
              <p  className='border-b-2 font-bold pt-6 border-black inline-block'>Instructions for Item 8 – Tax identification number:
              </p>
<p>Enter the tax identification number for the reporting company.</p> <br />
<p className='border-b-2 font-bold pt-2 border-black inline-block'>Instructions for Item 9 – Country/Jurisdiction:</p>
<p>If the tax identification type in item 7 is “Foreign”, select the foreign country/jurisdiction that issued the foreign tax identification number.</p>

          </div>
      
      </div>
    )}

</div>
<ul>



<span>
  <li className="flex flex-col mt-2">
    <span>*7. Tax Identification type</span>
    <div className="relative mt-1 xs:w-full w-1/2">
      <select
        className="appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select an ID type</option>
        <option value="ssn">Social Security Number (SSN)</option>
        <option value="ein">Employer Identification Number (EIN)</option>
        <option value="tin">Taxpayer Identification Number (TIN)</option>
        <option value="passport">Passport Number</option>
        <option value="other">Other</option>
      </select>
      {/* Custom dropdown icon from react-icons */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <MdArrowDropDown className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  </li>
</span>
      <li className="flex flex-col mt-2">
        <span>
            <li className="flex  flex-col mt-2">
        <span>*8. Tax Identification number
        </span>
        <input
          type="text"
          placeholder="Select an ID type"
          className="mt-1 px-3 xs:w-full w-1/2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </li>
        </span>
       
      </li>
      
      <li className="flex flex-col mt-2 mb-4 border-b-2">
  <span>9. Country/Jurisdiction (if foreign tax ID only)</span>
  <div className="relative mb-6 xs:w-full mt-2 w-1/2">
    <select
      className="appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      defaultValue=""
    >
      <option value="" disabled>Select a country/jurisdiction</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="au">Australia</option>
      <option value="de">Germany</option>
      <option value="fr">France</option>
      <option value="jp">Japan</option>
      <option value="cn">China</option>
      <option value="other">Other</option>
    </select>
    {/* Custom dropdown icon from react-icons */}
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <MdArrowDropDown className="w-5 h-5 text-gray-500" />
    </div>
  </div>
</li>
</ul>
<div className='mb-4'>
<p className='pb-2 font-bold text-[20px]  inline-block'>Jurisdiction of formation or first registration</p> <br />
<div className='flex py-2  mt-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown4}>
      
      <span className='ml-2 flex gap-2 items-center font-bold'>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{isOpen ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
      
      
    </div>
    {dropdown4 && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='p-2'>
          <p className='border-b-2 font-bold pt-4 border-black inline-block'>Instructions for Item 10 – Jurisdiction of formation or first registration:</p>
             <p>Enter the country/jurisdiction of formation in item 10a. If United States is selected in 10a, then items 10b–10d should be completed, identifying the State or Tribal jurisdiction of formation. If a U.S. Territory is selected in 10a, then item 10b is automatically populated with the relevant U.S. Territory, and items 10c and 10d are unavailable. If Item 10a is a foreign country, then item 10e – 10f should be completed, identifying the State/U.S. Territory or Tribal jurisdiction in which the foreign reporting company first registered to do business in the United States. If the Tribal jurisdiction of formation (10c) or Tribal jurisdiction of first registration (10f) is not listed in the drop-down, select “Other” and enter the name of the Tribe in 10d or 10g.</p> <br />
             
          </div>
      
      </div>
    )}
    </div>
    <li className="flex flex-col mt-2 mb-4 border-b-2">
  <span>*10. a. Country/Jurisdiction of formation </span>
  <div className="relative mb-6 xs:w-full mt-2 w-1/2">
    <select
      className="appearance-none px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      defaultValue=""
    >
      <option value="" disabled>Select a country/jurisdiction</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="au">Australia</option>
      <option value="de">Germany</option>
      <option value="fr">France</option>
      <option value="jp">Japan</option>
      <option value="cn">China</option>
      <option value="other">Other</option>
    </select>
    {/* Custom dropdown icon from react-icons */}
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
      <MdArrowDropDown className="w-5 h-5 text-gray-500" />
    </div>
  </div>
</li>
<div>
    <p className='text-[20px] font-bold'>Current U.S. Address
    </p>
    <div className='mb-4'>
<div className='flex py-2  mt-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={toggleDropdown5}>
      
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{isOpen ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
      
      
    </div>
    {dropdown5 && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='p-2'>
          <p className='border-b-2 font-bold pt-4 border-black inline-block'>Instructions for Items 11 – 15 – Reporting company address:</p>
             <p>Enter the reporting company’s complete current street address information, including city, State, ZIP Code, and select in item 13 whether the address is in the United States or a specific U.S. Territory. If the reporting company has a principal place of business in the United States or U.S. Territory, the street address should be that of the principal place of business. Otherwise, the street address should be the primary location in the United States or U.S. Territory where the reporting company conducts business. If a U.S. Territory is selected in item 13, then item 14 is automatically populated with the relevant U.S. Territory.</p> <br />
             
          </div>
      
      </div>
    )}
    </div>
</div>
<div>
<div className="flex w-full xs:flex-col gap-4 mb-4 mt-2">
        <span className='w-2/3 xs:w-full'>
            <li className="flex flex-col mt-2">
        <span>*11. Principal Address (number, street, and apt. or suite no.)
        </span>
        <input
          type="text"
          placeholder="Select an ID type"
          className="mt-1 px-3 w-full py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </li>

        </span>
        <span className='w-1/4 xs:w-full'>
            <li className="flex flex-col mt-2">
        <span>*12. City
        </span>
        <input
          type="text"
          placeholder="Select an ID type"
          className="mt-1 px-3 w-full py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </li>

        </span>
      </div>
      <div className="flex xs:flex-col w-full gap-4 mb-4 mt-2">
      <span className='w-1/3 xs:w-full'>
  <li className="flex flex-col mt-2">
    <span>*13. U.S. or U.S. Territory</span>
    <div className="relative mt-1 w-full">
      <select
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select a country</option>
        <option value="us">United States</option>
        <option value="pr">Puerto Rico</option>
        <option value="gu">Guam</option>
        <option value="vi">U.S. Virgin Islands</option>
        <option value="mp">Northern Mariana Islands</option>
        <option value="as">American Samoa</option>
        <option value="other">Other</option>
      </select>
      {/* Custom dropdown icon from react-icons */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <MdArrowDropDown className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  </li>
</span>
<span className='w-full xs:w-full'>
  <li className="flex flex-col mt-2">
    <span>*14. State</span>
    <div className="relative mt-1 w-full">
      <select
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option  value="" disabled>Select a State</option>
        <option value="al">Alabama</option>
        <option value="ak">Alaska</option>
        <option value="az">Arizona</option>
        <option value="ar">Arkansas</option>
        <option value="ca">California</option>
        <option value="co">Colorado</option>
        <option value="ct">Connecticut</option>
        <option value="de">Delaware</option>
        <option value="dc">District of Columbia</option>
        <option value="fl">Florida</option>
        <option value="ga">Georgia</option>
        <option value="hi">Hawaii</option>
        <option value="id">Idaho</option>
        <option value="il">Illinois</option>
        <option value="in">Indiana</option>
        <option value="ia">Iowa</option>
        <option value="ks">Kansas</option>
        <option value="ky">Kentucky</option>
        <option value="la">Louisiana</option>
        <option value="me">Maine</option>
        <option value="md">Maryland</option>
        <option value="ma">Massachusetts</option>
        <option value="mi">Michigan</option>
        <option value="mn">Minnesota</option>
        <option value="ms">Mississippi</option>
        <option value="mo">Missouri</option>
        <option value="mt">Montana</option>
        <option value="ne">Nebraska</option>
        <option value="nv">Nevada</option>
        <option value="nh">New Hampshire</option>
        <option value="nj">New Jersey</option>
        <option value="nm">New Mexico</option>
        <option value="ny">New York</option>
        <option value="nc">North Carolina</option>
        <option value="nd">North Dakota</option>
        <option value="oh">Ohio</option>
        <option value="ok">Oklahoma</option>
        <option value="or">Oregon</option>
        <option value="pa">Pennsylvania</option>
        <option value="ri">Rhode Island</option>
        <option value="sc">South Carolina</option>
        <option value="sd">South Dakota</option>
        <option value="tn">Tennessee</option>
        <option value="tx">Texas</option>
        <option value="ut">Utah</option>
        <option value="vt">Vermont</option>
        <option value="va">Virginia</option>
        <option value="wa">Washington</option>
        <option value="wv">West Virginia</option>
        <option value="wi">Wisconsin</option>
        <option value="wy">Wyoming</option>
      </select>
      {/* Custom dropdown icon from react-icons */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <MdArrowDropDown className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  </li>
</span>
        <span className='w-1/3 xs:w-full'>
            <li className="flex flex-col mt-2">
        <span>*15. ZIP code
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 w-full py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </li>

        </span>
      </div>
</div>
  </div>
    )
  
}
export default ReportingCompany;
