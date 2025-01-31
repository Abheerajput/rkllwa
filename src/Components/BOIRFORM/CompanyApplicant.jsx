import React, { useState } from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown
import { MdArrowDropDown } from 'react-icons/md';

const CompanyApplicant = () => {
  const [applicants, setApplicants] = useState([]);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
    const [firstdropdown, setFristdropdown] = useState(false);
    const [seconddropdown, setSeconddropdown] = useState(false);
    const [thirddropdown, setṬhirddropdown] = useState(false);
    const [fourthdropdown, setFourthdropdown] = useState(false);
    const [fifthdropdown, setFifthdropdown] = useState(false);
    const [sixthdropdown, setSixthdropdown] = useState(false);
    const [sevendropdown, setSevendropdown] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [divCount, setDivCount] = useState(0);
    const handleDragEnter = () => setIsDragging(true);
    const handleDragLeave = () => setIsDragging(false);
    const handleAddDiv = () => {
      setApplicants([...applicants, { id: Date.now() }]); // Add a new applicant with a unique ID
    };
  
    const handleRemoveDiv = (id) => {
      setApplicants(applicants.filter(applicant => applicant.id !== id)); // Remove the applicant with the specified ID
    };

    const handleRadioChange = () => {
      setIsRadioSelected((prevState) => !prevState); // Toggle selection
    };
  
    const handleFristdropdown =()=>{
        setFristdropdown(!firstdropdown);
    }
    const handleSeconddropdown =()=>{
        setSeconddropdown(!seconddropdown);
    }
    const handleṬhirddropdown=()=>{
        setṬhirddropdown(!thirddropdown);
    }

    const handleFourthdropdown=()=>{
        setFourthdropdown(!fourthdropdown);
    }
    const handleFifthdropdown=()=>{
        setFifthdropdown(!fifthdropdown);
    }
    const handleSixthdropdown=()=>{
        setSixthdropdown(!sixthdropdown);
    }
    const handleSevendropdown=()=>{
    setSevendropdown(!sevendropdown);
    }
  return (
    <div className='border-b-2'>
        <div className='mb-4  '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleFristdropdown}>
      <span className='ml-2 flex gap-2 font-bold items-center '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{firstdropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {firstdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
<h1  className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 16 – Existing reporting company:</h1>
            <p>Check this box if the reporting company was created or registered before January 1, 2024. Do not check the box if the reporting company was created or registered on or after January 1, 2024. Reporting companies that check this box are not required to report any company applicants; proceed to Part III.</p>
          </div>
            </div>
    )}
        </div>
        <div>
        <span className="flex items-center mt-2">
      <input 
        type="checkbox" 
        onChange={handleRadioChange}
        checked={isRadioSelected}
        className="mr-2 w-7 h-7 rounded-md  border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
     16. Existing reporting company
     (check if existing reporting company as of January 1, 2024)
    </span>
    <p className='py-4'>17. (This item is reserved for future use)
    </p>
        </div>  
        <div className='flex justify-between xs:flex-col xs:gap-6 xs:items-start xs:justify-start py-3 items-center'>
            <h1 className='text-[30px] xs:text-[18px] font-bold'>Part II. Company Applicant Information</h1>
            <button
            onClick={handleAddDiv}
        className="px-4 py-2 text-white font-bold  rounded-md bg-[#1A4480]"
      >
       Add Additional Company Applicant
      </button>
        </div>
        <div className='mb-4'>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleSeconddropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{seconddropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {seconddropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <p>Company applicant information is entered in fields 18 through 33 of the BOIR. Company applicants are individuals; no companies or legal entities may be reported as company applicants. Reporting companies may also provide FinCEN Identifiers for company applicants instead of this information. See detailed description below. <br /><br />
            Use the “Add Company Applicant” or “Remove Company Applicant” keys at the top of this section to add or remove additional company applicants. No more than two company applicants should be reported. <br /><br />If existing reporting company was checked in item 16, company applicant information is not required; proceed to Part III.
</p>
          </div>
            </div>
    )}
        </div>




        <div className='mb-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleṬhirddropdown}>
      <span className='ml-6 flex gap-2 items-center   font-bold '> Company Applicant #1</span>
     
    </div>
   
    <>
   
      <div className='mt-[-2] px-[4%] border-t-0  border-4  p-2 bg-white'>
         <h1 className='text-[20px] font-bold  ml-6 pt-6'>Company applicant FinCEN ID</h1>
         <div className='my-4  '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleFourthdropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{seconddropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {fourthdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 18 – FinCEN ID:</h1>
            <p>Reporting companies may report the FinCEN ID for a company applicant instead of the information in fields 19 through 33. Enter the FinCEN ID as a single text string. If a FinCEN ID for the company applicant is not provided, information about the company applicant must be provided in fields 19 through 33.
</p>
          </div>
            </div>
    )}
        </div>
        <p className=' text-[18px]'>18. FinCEN ID</p>
        <div className='border-b-2 border-grey-600'>
      <label className=" border-b-2 border-black mt-2">
        
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder=""
          className="px-3 py-2 mb-6 xs:w-full  w-1/2 mt-4 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className=' py-4'>     
         <h1 className='text-[20px] font-bold'>Legal name and date of birth</h1>
      <div className='my-4'>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleFifthdropdown}>
      <span className='ml-2 flex gap-2 font-bold items-center '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{fifthdropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {fifthdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 19 – Last name:</h1>
            <p>Enter the company applicant’s legal last name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 20 – First name:
            </h1>
            <p>Enter the company applicant’s legal first name.</p>
<br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 21 – Middle name:</h1>
            <p>Enter the company applicant's middle name if the company applicant’s legal name has a middle name. Leave this item blank if the company applicant does not have a middle name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 22 – Suffix:
            </h1>
            <p>Enter the company applicant's middle name if the company applicant’s legal name has a middle name. Leave this item blank if the company applicant does not have a middle name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 23 – Date of birth:</h1>
            <p className='pb-6'>Enter the company applicant’s date of birth using the format MM/DD/YYYY where MM = month, DD = day, and YYYY = year (e.g., 01/25/1970). The month, day, and year must be provided; no partial dates are accepted.</p>
          </div>
            </div>
    )}
        </div>
      </div>
     
      <div className='flex xs:flex-col w-full gap-4'>
      <label className="flex flex-col xs:w-full w-1/2 mb-6 mt-2">
        <span>*19. Individual's last name
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3  py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full w-1/2 mb-6 mt-2">
        <span>*20. First name
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>

      <div className='flex xs:flex-col border-b-2 gap-6  w-full '>
      <label className="flex flex-col xs:w-full w-1/3 mb-6 mt-2">
        <span>21. Middle name
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/3 mb-6 mt-2">
        <span>22. Suffix
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/3 mb-6 mt-2">
        <span>23. Date of birth
        </span>
        <input
         disabled={isRadioSelected}
          type="date"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2  w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className='pt-4 pb-2'>
      <h1 className='text-[20px] font-bold'>Current Address</h1>
      <div className='my-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleSixthdropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{sixthdropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {sixthdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 24 – Address type:</h1>
            <p>Indicate address type as “Business address” or “Residential address” for the company applicant. For a company applicant who forms or registers an entity in the course of their business, such as paralegals, report the street address of such business. In any other case, the individual’s residential street address must be reported.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Items 25 – 29 – Company applicant address:</h1>
            <p>Enter the company applicant’s street address information, including the city, country or jurisdiction, State, and ZIP code or foreign postal code. U.S. Territories are included in the drop-down menu for “Country/Jurisdiction.” The “State” (item 28) will be automatically populated when a U.S. Territory is selected in the “Country/Jurisdiction” (item 27). Item 28 “State” is required if the country selected in item 27 is the United States, Canada, or Mexico.
</p>
          </div>
            </div>
    )}
        </div>
      </div>
      <div>
        <h1 className='text-[18px] font-medium'>24. Address type</h1>
        <ul className='flex gap-8'>

      <li className="flex items-center mt-2">
      <input 
       disabled={isRadioSelected}
        type="checkbox" 
        className="mr-2 w-7 h-7 rounded-full  border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
 Business Address
    </li>
    <li className="flex items-center mt-2">
      <input 
       disabled={isRadioSelected}
        type="checkbox" 
        className="mr-2 w-7 h-7 rounded-full  border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
Residential Address
    </li>           
    </ul>
<div className='w-full xs:flex-col flex  xs:gap-0 gap-8'>
<label className="flex flex-col xs:w-full w-[60%]  my-4">
        <span>25.Principal Address (number, street, and apt. or suite no.)
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full xs:my-2 flex-col w-[40%] my-4">
        <span>26. City
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</div>
<div className='flex xs:flex-col border-b-2 gap-6  xs:gap-0 w-full '>
      <label className="flex flex-col w-1/3 xs:w-full  mt-2">
        <span>27. Country/Jurisdiction
        </span>
        <div className="relative mb-6 mt-2 ">
    <select
     disabled={isRadioSelected}
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
      </label>
    
      <span className='w-1/3 xs:w-full'>
  <li className="flex flex-col mt-2">
    <span>*14. State</span>
    
    <div className="relative mt-1 w-full">
      <select
       disabled={isRadioSelected}
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select a State</option>
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
    
      <label className="flex flex-col w-1/3 xs:w-full  mt-2">
        <span>29. ZIP/Foreign postal code
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2  xs:mb-6 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>

      </div>
      <div>
        <h1 className='text-[18px] py-4 font-bold'>Form of identification and issuing jurisdiction</h1>
        <div className='my-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleSevendropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{sevendropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {sevendropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 30 – Identifying document type:</h1>
            <p>Select the company applicant’s identifying document type from the list of acceptable documents: a non-expired State-issued driver’s license, a non-expired State/local/Tribe-issued identification document issued for the purpose of identifying the individual, a non-expired U.S. passport, or, only if the company applicant does not have one of these identifying documents, a non-expired foreign passport.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 31 – Identifying document number:</h1>
            <p>Enter the identifying document number from the company applicant’s identifying document.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 32 – Identifying document issuing jurisdiction:</h1>
            <p>Enter in item 32a the country/jurisdiction that issued the company applicant’s identifying document. If a U.S. Territory issued the identifying document, select the applicable U.S. Territory in item 32a (the same U.S. Territory will then be automatically populated in item 32b “State” as a result). Enter in 32b the State issuing the identifying document when country/jurisdiction is United States, if applicable. If a local or Tribal government issued the identifying document, select “United States” in item 32a and then select the applicable local or Tribal description in item 32c. If the name of the relevant local or Tribal jurisdiction is not included in the drop-down menu in item 32c, select “Other” and enter the name of the local or Tribal jurisdiction in item 32d.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 33 – Identifying document image:</h1>
<p className='mb-4'>Drag a file or click “choose from folder” to attach a clear, readable image of the page or side of the identifying document referenced in item 31 containing the unique identifying number and other identifying data. Use the “Remove” button to remove the attached image if necessary. An attachment to a BOIR cannot be larger than four (4) megabytes of data and must be in one of the following formats: JPG/JPEG, PNG, or PDF. Only one (1) attachment file may be added per company applicant. Attachment file names should not contain spaces, and can only contain letters, numbers, or the following characters !@#$%()_-.=+[]|;~</p>
          </div>
          
            </div>
    )}
        </div>
        <div className='flex xs:flex-col gap-4 '>
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>30. Identifying document type</span>
    <div className="relative mt-1 ">
      <select
       disabled={isRadioSelected}
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select an ID type</option>

        <option value="ssn">  State issued driver's license</option>
        <option value="ein">State/local/tribe-issued ID</option>
        <option value="tin">U.S. passport</option>
        <option value="passport"> Foreign passport</option>
        <option value="other">Other</option>
      </select>
      {/* Custom dropdown icon from react-icons */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <MdArrowDropDown className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  </li>
</span>
<span className='w-1/2  xs:w-full'>
<label className="flex flex-col ">
        <span>31. Identifying document number
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>
        </div>
        <h1 className='py-4'>32. Identifying document issuing jurisdiction</h1>
        <div className='flex flex-col gap-4 '>
            <div className='flex xs:flex-col gap-5'>    
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>a. Country/Jurisdiction</span>
    <div className="relative mt-1 ">
    <select
     disabled={isRadioSelected}
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
</span>
<span className='w-1/2 xs:w-full'>
<label 

className="flex flex-col ">
       b. State
       
        <div className="relative mt-1 w-full">
      <select
       disabled={isRadioSelected}
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select a State</option>
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
    </label>
</span>
</div>
<div className='flex xs:flex-col gap-5'>    
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>c. Local/Tribal</span>
    <input
     disabled={isRadioSelected}
          type="text"
          placeholder="Śelect a local/tribel"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  </li>
</span>
<span className='w-1/2 xs:w-full'>
<label className="flex flex-col ">
        <span>d. Other local/Tribal description
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>

</div>
<span className='w-1/2 mb-4 xs:w-full'>
<label className="flex flex-col ">
        <span>33. Identifying document image
        </span>
        <div
      className={`mt-4 w-full p-8 border-4 ${
        isDragging ? 'border-blue-500' : 'border-red-500'
      } border-dotted rounded-sm shadow-sm text-center`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        disabled={isRadioSelected}  
        className="hidden"
        id="fileInput"
        onChange={(e) => console.log(e.target.files)}
      />
      <label
        htmlFor="fileInput"
        className="text-gray-600 cursor-pointer"
      >
        {isDragging ? "Release to upload" : "Drag file here or choose from folder"}
      </label>
    </div>

      </label>
</span>
        </div>
      </div>
            </div>
         
            </> 
   
     
        </div>
        {applicants.map((applicant, index) => (
        <div key={applicant.id} className="mt-4 p-4 border rounded-md bg-gray-100">
          <h3 className="font-bold py-3  ml-6 flex gap-2 items-center  ">Company Applicant # {index + 2}</h3>
          <div className='mb-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleṬhirddropdown}>
     
    </div>
   
    <>
   
      <div className='mt-[-2] px-[4%] border-t-0  border-4  p-2 bg-white'>
         <h1 className='text-[20px] font-bold  ml-6 pt-6'>Company applicant FinCEN ID</h1>
         <div className='my-4  '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleFourthdropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{seconddropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {fourthdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 18 – FinCEN ID:</h1>
            <p>Reporting companies may report the FinCEN ID for a company applicant instead of the information in fields 19 through 33. Enter the FinCEN ID as a single text string. If a FinCEN ID for the company applicant is not provided, information about the company applicant must be provided in fields 19 through 33.
</p>
          </div>
            </div>
    )}
        </div>
        <p className=' text-[18px]'>18. FinCEN ID</p>
        <div className='border-b-2 border-grey-600'>
      <label className=" border-b-2 border-black mt-2">
        
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder=""
          className="px-3 py-2 mb-6 xs:w-full  w-1/2 mt-4 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className=' py-4'>     
         <h1 className='text-[20px] font-bold'>Legal name and date of birth</h1>
      <div className='my-4'>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleFifthdropdown}>
      <span className='ml-2 flex gap-2 font-bold items-center '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{fifthdropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {fifthdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 19 – Last name:</h1>
            <p>Enter the company applicant’s legal last name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 20 – First name:
            </h1>
            <p>Enter the company applicant’s legal first name.</p>
<br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 21 – Middle name:</h1>
            <p>Enter the company applicant's middle name if the company applicant’s legal name has a middle name. Leave this item blank if the company applicant does not have a middle name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 22 – Suffix:
            </h1>
            <p>Enter the company applicant's middle name if the company applicant’s legal name has a middle name. Leave this item blank if the company applicant does not have a middle name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 23 – Date of birth:</h1>
            <p className='pb-6'>Enter the company applicant’s date of birth using the format MM/DD/YYYY where MM = month, DD = day, and YYYY = year (e.g., 01/25/1970). The month, day, and year must be provided; no partial dates are accepted.</p>
          </div>
            </div>
    )}
        </div>
      </div>
     
      <div className='flex xs:flex-col w-full gap-4'>
      <label className="flex flex-col xs:w-full w-1/2 mb-6 mt-2">
        <span>*19. Individual's last name
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3  py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full w-1/2 mb-6 mt-2">
        <span>*20. First name
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>

      <div className='flex xs:flex-col border-b-2 gap-6  w-full '>
      <label className="flex flex-col xs:w-full w-1/3 mb-6 mt-2">
        <span>21. Middle name
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/3 mb-6 mt-2">
        <span>22. Suffix
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/3 mb-6 mt-2">
        <span>23. Date of birth
        </span>
        <input
         disabled={isRadioSelected}
          type="date"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2  w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className='pt-4 pb-2'>
      <h1 className='text-[20px] font-bold'>Current address</h1>
      <div className='my-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleSixthdropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{sixthdropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {sixthdropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 24 – Address type:</h1>
            <p>Indicate address type as “Business address” or “Residential address” for the company applicant. For a company applicant who forms or registers an entity in the course of their business, such as paralegals, report the street address of such business. In any other case, the individual’s residential street address must be reported.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Items 25 – 29 – Company applicant address:</h1>
            <p>Enter the company applicant’s street address information, including the city, country or jurisdiction, State, and ZIP code or foreign postal code. U.S. Territories are included in the drop-down menu for “Country/Jurisdiction.” The “State” (item 28) will be automatically populated when a U.S. Territory is selected in the “Country/Jurisdiction” (item 27). Item 28 “State” is required if the country selected in item 27 is the United States, Canada, or Mexico.
</p>
          </div>
            </div>
    )}
        </div>
      </div>
      <div>
        <h1 className='text-[18px] font-medium'>24. Address type</h1>
        <ul className='flex gap-8'>

      <li className="flex items-center mt-2">
      <input 
       disabled={isRadioSelected}
        type="checkbox" 
        className="mr-2 w-7 h-7 rounded-full  border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
 Business Address
    </li>
    <li className="flex items-center mt-2">
      <input 
       disabled={isRadioSelected}
        type="checkbox" 
        className="mr-2 w-7 h-7 rounded-full  border-2 border-gray-500 bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
Residential Address
    </li>           
    </ul>
<div className='w-full xs:flex-col flex  xs:gap-0 gap-8'>
<label className="flex flex-col xs:w-full w-[60%]  my-4">
        <span>25. Principal Address (number, street, and apt. or suite no.)
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full xs:my-2 flex-col w-[40%] my-4">
        <span>26. City
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</div>
<div className='flex xs:flex-col border-b-2 gap-6  xs:gap-0 w-full '>
      <label className="flex flex-col w-1/3 xs:w-full  mt-2">
        <span>27. Country/Jurisdiction
        </span>
        <div className="relative mb-6 mt-2 ">
    <select
     disabled={isRadioSelected}
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
      </label>
    
      <span className='w-1/3 xs:w-full'>
  <li className="flex flex-col mt-2">
    <span>*14. State</span>
    
    <div className="relative mt-1 w-full">
      <select
       disabled={isRadioSelected}
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select a State</option>
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
    
      <label className="flex flex-col w-1/3 xs:w-full  mt-2">
        <span>29. ZIP/Foreign postal code
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2  xs:mb-6 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>

      </div>
      <div>
        <h1 className='text-[18px] py-4 font-bold'>Form of identification and issuing jurisdiction</h1>
        <div className='my-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={handleSevendropdown}>
      <span className='ml-2 flex gap-2 items-center font-bold '>   <FaRegQuestionCircle />Need help?</span>
      <span className='mr-4'>{sevendropdown ? (
        <FaChevronUp className='ml-2' /> // Show up icon when open
      ) : (
        <FaChevronDown className='ml-2' /> // Show down icon when closed
      )}</span>
    </div>
    {sevendropdown && ( // Render dropdown content only when isOpen is true
      <div className='mt-[-2] border-t-0  border-4  p-2 bg-gray-100'>
          <div className='pt-4 ml-6 '>
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 30 – Identifying document type:</h1>
            <p>Select the company applicant’s identifying document type from the list of acceptable documents: a non-expired State-issued driver’s license, a non-expired State/local/Tribe-issued identification document issued for the purpose of identifying the individual, a non-expired U.S. passport, or, only if the company applicant does not have one of these identifying documents, a non-expired foreign passport.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 31 – Identifying document number:</h1>
            <p>Enter the identifying document number from the company applicant’s identifying document.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 32 – Identifying document issuing jurisdiction:</h1>
            <p>Enter in item 32a the country/jurisdiction that issued the company applicant’s identifying document. If a U.S. Territory issued the identifying document, select the applicable U.S. Territory in item 32a (the same U.S. Territory will then be automatically populated in item 32b “State” as a result). Enter in 32b the State issuing the identifying document when country/jurisdiction is United States, if applicable. If a local or Tribal government issued the identifying document, select “United States” in item 32a and then select the applicable local or Tribal description in item 32c. If the name of the relevant local or Tribal jurisdiction is not included in the drop-down menu in item 32c, select “Other” and enter the name of the local or Tribal jurisdiction in item 32d.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 33 – Identifying document image:</h1>
<p className='mb-4'>Drag a file or click “choose from folder” to attach a clear, readable image of the page or side of the identifying document referenced in item 31 containing the unique identifying number and other identifying data. Use the “Remove” button to remove the attached image if necessary. An attachment to a BOIR cannot be larger than four (4) megabytes of data and must be in one of the following formats: JPG/JPEG, PNG, or PDF. Only one (1) attachment file may be added per company applicant. Attachment file names should not contain spaces, and can only contain letters, numbers, or the following characters !@#$%()_-.=+[]|;~</p>
          </div>
          
            </div>
    )}
        </div>
        <div className='flex xs:flex-col gap-4 '>
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>30. Identifying document type</span>
    <div className="relative mt-1 ">
      <select
       disabled={isRadioSelected}
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select an ID type</option>

        <option value="ssn">  State issued driver's license</option>
        <option value="ein">State/local/tribe-issued ID</option>
        <option value="tin">U.S. passport</option>
        <option value="passport"> Foreign passport</option>
        <option value="other">Other</option>
      </select>
      {/* Custom dropdown icon from react-icons */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <MdArrowDropDown className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  </li>
</span>
<span className='w-1/2  xs:w-full'>
<label className="flex flex-col ">
        <span>31. Identifying document number
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>
        </div>
        <h1 className='py-4'>32. Identifying document issuing jurisdiction</h1>
        <div className='flex flex-col gap-4 '>
            <div className='flex xs:flex-col gap-5'>    
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>a. Country/Jurisdiction</span>
    <div className="relative mt-1 ">
    <select
     disabled={isRadioSelected}
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
</span>
<span className='w-1/2 xs:w-full'>
<label 

className="flex flex-col ">
       b. State
       
        <div className="relative mt-1 w-full">
      <select
       disabled={isRadioSelected}
        className="appearance-none px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        defaultValue=""
      >
        <option value="" disabled>Select a State</option>
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
    </label>
</span>
</div>
<div className='flex xs:flex-col gap-5'>    
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>c. Local/Tribal</span>
    <input
     disabled={isRadioSelected}
          type="text"
          placeholder="Śelect a local/tribel"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  </li>
</span>
<span className='w-1/2 xs:w-full'>
<label className="flex flex-col ">
        <span>d. Other local/Tribal description
        </span>
        <input
         disabled={isRadioSelected}
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>

</div>
<span className='w-1/2 mb-4 xs:w-full'>
<label className="flex flex-col ">
        <span>33. Identifying document image
        </span>
        <div
      className={`mt-4 w-full p-8 border-4 ${
        isDragging ? 'border-blue-500' : 'border-red-500'
      } border-dotted rounded-sm shadow-sm text-center`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        disabled={isRadioSelected}  
        className="hidden"
        id="fileInput"
        onChange={(e) => console.log(e.target.files)}
      />
      <label
        htmlFor="fileInput"
        className="text-gray-600 cursor-pointer"
      >
        {isDragging ? "Release to upload" : "Drag file here or choose from folder"}
      </label>
    </div>

      </label>
</span>
        </div>
      </div>
            </div>
         
            </> 
   
     
        </div>
          <button
            onClick={() => handleRemoveDiv(applicant.id)}
            className="mt-2 px-4 py-1 text-white font-bold rounded-md bg-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      

    </div>
  )
}

export default CompanyApplicant