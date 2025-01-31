import React, { useState } from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons for dropdown
import { MdArrowDropDown } from 'react-icons/md';
const BeneficialOwner = () => {
  const [applicants, setApplicants] = useState([]);
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
      <div className='flex items-center  justify-between'>

        <h1 className="text-[35px] py-4 font-bold">Part III. Beneficial Owner Information</h1>
        <span> <button
            onClick={handleAddDiv}
        className="px-4 py-2 text-white font-bold  rounded-md bg-[#1A4480]">
       Add Additional Company Applicant
      </button>
        </span>
       
        </div>
       <div className='mb-4'>
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
<p>
Beneficial owner information is entered in fields 35 through 51 of the BOIR. Reporting companies may also report a FinCEN Identifier for a beneficial owner instead of this information. See detailed description below. <br /><br />

Use the “Add Beneficial Owner” or “Remove Beneficial Owner” keys at the top of this section to add or remove additional beneficial owners. There is no limit on the number of beneficial owners that may be reported.</p>     
     </div>
            </div>
    )}
        </div>



        <div className='mb-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleṬhirddropdown}>
      <span className='ml-6 flex gap-2 items-center   font-bold '> Beneficial Owner #1</span>
     
    </div>
    <>
   
      <div className='mt-[-2] px-[4%] border-t-0  border-4  p-2 bg-white'>
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
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 35 – Parent/Guardian information instead of minor child:</h1>
            <p>If the beneficial owner for the reporting company is a minor child, you may check this box and complete Part III with information about a parent or legal guardian of the minor child.
</p>
          </div>
            </div>
    )}
        </div>
        <div className="flex gap-2 border-b-2 border-black border-b-black pb-6">
        <input 
        type="checkbox" 
        className=" w-7 h-7 rounded-md  border-2 border-black bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
        <p className=' text-[18px]'>35. Parent/Guardian information instead of minor child
          <br /><span className="ml-14  text-[16px] text-gray-400">(check if the Beneficial Owner is a minor child and the parent/guardian information is provided instead)</span>
        </p>
        </div>
      <div className=' py-4'>     
         <h1 className='text-[20px] font-bold'>Beneficial Owner FinCEN ID</h1>
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
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 36 – FinCEN ID:</h1>
            <p>Reporting companies may provide a FinCEN Identifier for a beneficial owner instead of Items 37 through 51. Enter the FinCEN ID as a single text string. If a FinCEN ID for the beneficial owner is not provided, information about the beneficial owner must be provided in fields 37 through 51.</p> <br />
            
          </div>
            </div>
    )}
        </div>
      </div>
      <div>

      </div>
      <div className='flex  border-b-2 border-b-black w-full gap-4'>
      <label className=" w-1/2 xs:w-full mb-6 mt-2">
        <span>36. FinCEN ID
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    
      </div>
      <p className="text-[20px] pt-4 pb-2 font-bold ">Exempt entity</p>

      <div className=' pb-2'>
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
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 37 – Exempt entity:</h1>
            <p>Check this box if the beneficial owner holds its ownership interest in the reporting company exclusively through one or more exempt entities, and the name of that exempt entity or entities are being reported in lieu of the beneficial owner’s information. If checked, provide the legal name of the exempt entity in field 38.
</p><br />

          </div>
          
            </div>
    )}
     <label className=" w-1/2  xs:w-full mb-6 mt-2">
        <span className="flex pt-6 text-[18px]  pb-8 border-b-2 border-b-black items-center gap-2">
        <input 
        type="checkbox" 
        className=" w-7 h-7 rounded-md  border-2 border-black bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
          37. Exempt entity
        </span>
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
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 38 – Individual’s last name or entity’s legal name:</h1>
            <p>Enter the beneficial owner's legal last name or the exempt entity's legal name. An entity’s legal name is the name on the articles of incorporation or other document that created or registered the entity. Do not abbreviate names unless an abbreviation is part of the legal name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 39 – First name:
            </h1>
            <p>Enter the beneficial owner's legal first name.</p>
<br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 40 – Middle name:</h1>
            <p>Enter the beneficial owner's middle name if the beneficial owner’s legal name includes a middle name. Leave this item blank if the beneficial owner does not have a middle name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 41 – Suffix:

            </h1>
            <p>Enter the beneficial owner’s suffix such as JR, SR, III, etc., if the beneficial owner has a suffix to their legal name. Leave this item blank if the beneficial owner’s legal name does not include a suffix.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 42 – Date of birth:</h1>
            <p className='pb-6'>Enter the beneficial owner’s date of birth, using the format MM/DD/YYYY where MM = month, DD = day, and YYYY = year (e.g., 01/25/1970). The month, day, and year must be provided; no partial dates will be accepted.</p>
          </div>
            </div>
    )}
        </div>
      </div>
      <div className='flex  xs:flex-col w-full xs:gap-0 gap-4'>
      <label className="flex flex-col xs:w-full w-1/2 xs:mb-0 mb-6 mt-2">
        <span>*38. Individual's last name or entity's legal name

        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full w-1/2 xs:mb-2 mb-6 mt-2">
        <span>*39. First name
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className='flex gap-6 xs:flex-col border-b-2 xs:gap-2   w-full '>
      <label className="flex flex-col xs:w-full w-1/3 xs:mb-0 mb-6 mt-2">
        <span>40. Middle name
        </span>
        <input
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full xs:mb-2 w-1/3 mb-6 mt-2">
        <span>41. Suffix
        </span>
        <input
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full w-1/3 mb-6 mt-2">
        <span>42. Date of birth
        </span>
        <input
          type="date"
          placeholder="Enter alternate name"
          className=" px-3 py-2  mt-1 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className=' py-4'>     
         <h1 className='text-[20px] font-bold'>Residential Address</h1>
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
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Items 43 – 47 – Beneficial owner address:</h1>
            <p>Enter the beneficial owner’s residential street address information, including the city, country or jurisdiction, State, and ZIP code or foreign postal code. U.S. Territories are included in the drop-down menu for “Country/Jurisdiction.” The “State” (item 46) will be automatically populated when a U.S. Territory is selected in the “Country/ Jurisdiction” (item 45). Item 46 “State” is required if the country selected in item 45 is the United States, Canada, or Mexico.</p> <br />
          </div>
            </div>
    )}
        </div>
      </div>
      <div className='flex xs:flex-col xs:gap-0  w-full gap-4'>
      <label className="flex flex-col xs:w-full w-1/2 xs:mb-0 mb-6 mt-2">
        <span>*43. Principal Address (number, street, and apt. or suite no.)
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full xs:mb-2 w-1/2 mb-6 mt-2">
        <span>*44. City
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className='flex border-b-2 gap-6  xs:flex-col w-full '>
      <label className="flex flex-col xs:w-full w-1/3  xs:mb-2  mb-6 mt-2">
        <span>*45. Country/Jurisdiction
        </span>
        <div className="relative mb-6 xs:mb-0 mt-2 ">
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
      </label>
      <label className="flex flex-col  xs:w-full w-1/3 xs:mb-0  mb-6 mt-2">
        <span>*46. State
        </span>
        <div className="relative mt-1 w-full">
      <select
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
      <label className="flex flex-col xs:w-full  w-1/3   mb-6 mt-2">
        <span>*47. ZIP/Foreign postal code
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 48 – Identifying document type:</h1>
            <p>Select the beneficial owner’s non-expired identifying document type from the list of acceptable identification documents: a State-issued driver’s license, a State/local/Tribe-issued identification document issued for the purpose of identifying the individual, a U.S. passport, or, only if the beneficial owner does not have one of these three types of identifying documents, a foreign passport.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 49 – Identifying document number:</h1>
            <p>Enter the identifying document number from the beneficial owner’s identifying document.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 50 – Identifying document issuing jurisdiction:</h1>
            <p>Enter in item 50a the country/jurisdiction that issued the beneficial owner’s identifying document. If a U.S. Territory issued the identifying document, select the applicable U.S. Territory in item 50a (the same U.S. Territory will then be automatically populated in item 50b “State” as a result). Enter in 50b the State that issued the identifying document when country/jurisdiction is United States, if applicable. If a local or Tribal government issued the identifying document, select “United States” in 50a and then select the applicable local or Tribal description in item 50c. If the name of the relevant local or Tribal jurisdiction is not included in the drop-down menu in item 50c, select “Other” and enter the name of the local or Tribal jurisdiction in item 50d.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 51 – Identifying document image:</h1>
<p className='mb-4'>Drag a file or click “choose from folder” to attach a clear, readable image of the page or side of the identifying document referenced in item 49 containing the unique identifying number and other identifying data. Use the “Remove” button to remove the attached image if necessary. An attachment to a BOIR cannot be larger than four (4) megabytes of data and must be in one of the following formats: JPG/JPEG, PNG, or PDF. Only one (1) attachment file may be added per beneficial owner. Attachment file names should not contain spaces, and can only contain letters, numbers, or the following characters !@#$%()_-.=+[]|;~</p>
          </div>
          
            </div>
    )}
        </div>
        <div className='flex xs:flex-col gap-4 '>
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>*48. Identifying document type</span>
    <div className="relative mt-1 ">
      <select
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
<span className='w-1/2 xs:w-full'>
<label className="flex flex-col ">
        <span>*49. Identifying document number
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>
        </div>
        <h1 className='py-4'>*50. Identifying document issuing jurisdiction</h1>
        <div className='flex flex-col gap-4 '>
            <div className='flex xs:flex-col gap-5'>    
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>a. Country/Jurisdiction</span>
    <div className="relative mt-1 ">
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
</span>
<span className='w-1/2  xs:w-full'>
<label className="flex  flex-col ">
       b. State
       
        <div className="relative mt-1 w-full">
      <select
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
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>

</div>
<span className='w-1/2 xs:w-full mb-4'>
<label className="flex flex-col ">
        <span>*51. Identifying document image
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
          <h3 className="ml-6 flex gap-2 items-center   font-bold   ">  Beneficial Owner # {index + 2}</h3>
          <div className='mb-4 '>
        <div className='flex py-2   rounded-sm items-center justify-between bg-[#DFE1E2] cursor-pointer' onClick={ handleṬhirddropdown}>
     
    </div>
    <>
      <div className='mt-[-2] px-[4%] border-t-0  border-4  p-2 bg-white'>
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
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 35 – Parent/Guardian information instead of minor child:</h1>
            <p>If the beneficial owner for the reporting company is a minor child, you may check this box and complete Part III with information about a parent or legal guardian of the minor child.
</p>
          </div>
            </div>
    )}
        </div>
        <div className="flex gap-2 border-b-2 border-black border-b-black pb-6">
        <input 
        type="checkbox" 
        className=" w-7 h-7 rounded-md  border-2 border-black bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
        <p className=' text-[18px]'>35. Parent/Guardian information instead of minor child
          <br /><span className="ml-14  text-[16px] text-gray-400">(check if the Beneficial Owner is a minor child and the parent/guardian information is provided instead)</span>
        </p>
        </div>
      <div className=' py-4'>     
         <h1 className='text-[20px] font-bold'>Beneficial Owner FinCEN ID</h1>
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
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 36 – FinCEN ID:</h1>
            <p>Reporting companies may provide a FinCEN Identifier for a beneficial owner instead of Items 37 through 51. Enter the FinCEN ID as a single text string. If a FinCEN ID for the beneficial owner is not provided, information about the beneficial owner must be provided in fields 37 through 51.</p> <br />
            
          </div>
            </div>
    )}
        </div>
      </div>
      <div>

      </div>
      <div className='flex  border-b-2 border-b-black w-full gap-4'>
      <label className=" w-1/2 xs:w-full mb-6 mt-2">
        <span>36. FinCEN ID
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    
      </div>
      <p className="text-[20px] pt-4 pb-2 font-bold ">Exempt entity</p>

      <div className=' pb-2'>
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
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 37 – Exempt entity:</h1>
            <p>Check this box if the beneficial owner holds its ownership interest in the reporting company exclusively through one or more exempt entities, and the name of that exempt entity or entities are being reported in lieu of the beneficial owner’s information. If checked, provide the legal name of the exempt entity in field 38.
</p><br />

          </div>
          
            </div>
    )}
     <label className=" w-1/2  xs:w-full mb-6 mt-2">
        <span className="flex pt-6 text-[18px]  pb-8 border-b-2 border-b-black items-center gap-2">
        <input 
        type="checkbox" 
        className=" w-7 h-7 rounded-md  border-2 border-black bg-white checked:bg-blue-500 checked:border-transparent appearance-none cursor-pointer"
      /> 
          37. Exempt entity
        </span>
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
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 38 – Individual’s last name or entity’s legal name:</h1>
            <p>Enter the beneficial owner's legal last name or the exempt entity's legal name. An entity’s legal name is the name on the articles of incorporation or other document that created or registered the entity. Do not abbreviate names unless an abbreviation is part of the legal name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 39 – First name:
            </h1>
            <p>Enter the beneficial owner's legal first name.</p>
<br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 40 – Middle name:</h1>
            <p>Enter the beneficial owner's middle name if the beneficial owner’s legal name includes a middle name. Leave this item blank if the beneficial owner does not have a middle name.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 41 – Suffix:

            </h1>
            <p>Enter the beneficial owner’s suffix such as JR, SR, III, etc., if the beneficial owner has a suffix to their legal name. Leave this item blank if the beneficial owner’s legal name does not include a suffix.</p> <br />
            <h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Item 42 – Date of birth:</h1>
            <p className='pb-6'>Enter the beneficial owner’s date of birth, using the format MM/DD/YYYY where MM = month, DD = day, and YYYY = year (e.g., 01/25/1970). The month, day, and year must be provided; no partial dates will be accepted.</p>
          </div>
            </div>
    )}
        </div>
      </div>
      <div className='flex  xs:flex-col w-full xs:gap-0 gap-4'>
      <label className="flex flex-col xs:w-full w-1/2 xs:mb-0 mb-6 mt-2">
        <span>*38. Individual's last name or entity's legal name

        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full w-1/2 xs:mb-2 mb-6 mt-2">
        <span>*39. First name
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className='flex gap-6 xs:flex-col border-b-2 xs:gap-2   w-full '>
      <label className="flex flex-col xs:w-full w-1/3 xs:mb-0 mb-6 mt-2">
        <span>40. Middle name
        </span>
        <input
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full xs:mb-2 w-1/3 mb-6 mt-2">
        <span>41. Suffix
        </span>
        <input
          type="text"
          placeholder="Enter alternate name"
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full w-1/3 mb-6 mt-2">
        <span>42. Date of birth
        </span>
        <input
          type="date"
          placeholder="Enter alternate name"
          className=" px-3 py-2  mt-1 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className=' py-4'>     
         <h1 className='text-[20px] font-bold'>Residential address</h1>
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
<h1 className='border-b-2  inline-block font-bold text-black border-black'>Instructions for Items 43 – 47 – Beneficial owner address:</h1>
            <p>Enter the beneficial owner’s residential street address information, including the city, country or jurisdiction, State, and ZIP code or foreign postal code. U.S. Territories are included in the drop-down menu for “Country/Jurisdiction.” The “State” (item 46) will be automatically populated when a U.S. Territory is selected in the “Country/ Jurisdiction” (item 45). Item 46 “State” is required if the country selected in item 45 is the United States, Canada, or Mexico.</p> <br />
          </div>
            </div>
    )}
        </div>
      </div>
      <div className='flex xs:flex-col xs:gap-0  w-full gap-4'>
      <label className="flex flex-col xs:w-full w-1/2 xs:mb-0 mb-6 mt-2">
        <span>*43.  Principal Address (number, street, and apt. or suite no.)
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col xs:w-full xs:mb-2 w-1/2 mb-6 mt-2">
        <span>*44. City
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      </div>
      <div className='flex border-b-2 gap-6  xs:flex-col w-full '>
      <label className="flex flex-col xs:w-full w-1/3  xs:mb-2  mb-6 mt-2">
        <span>*45. Country/Jurisdiction
        </span>
        <div className="relative mb-6 xs:mb-0 mt-2 ">
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
      </label>
      <label className="flex flex-col  xs:w-full w-1/3 xs:mb-0  mb-6 mt-2">
        <span>*46. State
        </span>
        <div className="relative mt-1 w-full">
      <select
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
      <label className="flex flex-col xs:w-full  w-1/3   mb-6 mt-2">
        <span>*47. ZIP/Foreign postal code
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 48 – Identifying document type:</h1>
            <p>Select the beneficial owner’s non-expired identifying document type from the list of acceptable identification documents: a State-issued driver’s license, a State/local/Tribe-issued identification document issued for the purpose of identifying the individual, a U.S. passport, or, only if the beneficial owner does not have one of these three types of identifying documents, a foreign passport.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 49 – Identifying document number:</h1>
            <p>Enter the identifying document number from the beneficial owner’s identifying document.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 50 – Identifying document issuing jurisdiction:</h1>
            <p>Enter in item 50a the country/jurisdiction that issued the beneficial owner’s identifying document. If a U.S. Territory issued the identifying document, select the applicable U.S. Territory in item 50a (the same U.S. Territory will then be automatically populated in item 50b “State” as a result). Enter in 50b the State that issued the identifying document when country/jurisdiction is United States, if applicable. If a local or Tribal government issued the identifying document, select “United States” in 50a and then select the applicable local or Tribal description in item 50c. If the name of the relevant local or Tribal jurisdiction is not included in the drop-down menu in item 50c, select “Other” and enter the name of the local or Tribal jurisdiction in item 50d.
</p><br />
<h1 className='border-b-2  inline-block font-bold   text-black border-black'>Instructions for Item 51 – Identifying document image:</h1>
<p className='mb-4'>Drag a file or click “choose from folder” to attach a clear, readable image of the page or side of the identifying document referenced in item 49 containing the unique identifying number and other identifying data. Use the “Remove” button to remove the attached image if necessary. An attachment to a BOIR cannot be larger than four (4) megabytes of data and must be in one of the following formats: JPG/JPEG, PNG, or PDF. Only one (1) attachment file may be added per beneficial owner. Attachment file names should not contain spaces, and can only contain letters, numbers, or the following characters !@#$%()_-.=+[]|;~</p>
          </div>
          
            </div>
    )}
        </div>
        <div className='flex xs:flex-col gap-4 '>
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>*48. Identifying document type</span>
    <div className="relative mt-1 ">
      <select
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
<span className='w-1/2 xs:w-full'>
<label className="flex flex-col ">
        <span>*49. Identifying document number
        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>
        </div>
        <h1 className='py-4'>*50. Identifying document issuing jurisdiction</h1>
        <div className='flex flex-col gap-4 '>
            <div className='flex xs:flex-col gap-5'>    
        <span className='w-1/2 xs:w-full'>
  <li className="flex flex-col ">
    <span>a. Country/Jurisdiction</span>
    <div className="relative mt-1 ">
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
</span>
<span className='w-1/2  xs:w-full'>
<label className="flex  flex-col ">
       b. State
       
        <div className="relative mt-1 w-full">
      <select
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
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
</span>

</div>
<span className='w-1/2 xs:w-full mb-4'>
<label className="flex flex-col ">
        <span>*51. Identifying document image
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

export default BeneficialOwner