import React from 'react'

const Submit = () => {
  return (
    <div>
      <div  className='pb-4 border-b-2 '>
        <p>Complete all fields below before submitting. Directly after submission, a processing page will be displayed, followed by a page confirming the status of your report. This confirmation page will also give you an opportunity to download a transcript of your report.</p>
        <label className="flex xs:w-full flex-col w-1/2 mb-6 mt-2">
        <span>*Email

        </span>
        <input
          type="email"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/2 mb-6 mt-2">
        <span>*Confirm Email

        </span>
        <input
          type="email"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/2 mb-6 mt-2">
        <span>*First Name

        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex xs:w-full flex-col w-1/2 mb-6 mt-2">
        <span>*Last Name

        </span>
        <input
          type="text"
          placeholder=""
          className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      
      <p className='text-[15px] font-bold'>*I certify that I am authorized to file this BOIR on behalf of the reporting company. I further certify, on behalf of the reporting company, that the information contained in this BOIR is true, correct, and complete.</p>
      <div className='border-l-8 my-6  border-l-yellow-400'>
        <p className='pl-6 py-3 bg-[#FAF3D1]'> <span className='text-[18px] font-bold'>COMPLIANCE REMINDER:</span> The willful failure to report complete beneficial ownership information to FinCEN, the willful failure to update beneficial ownership information provided to FinCEN when previously reported information changes, or the willful provision of false or fraudulent beneficial ownership information to FinCEN, may result in civil or criminal penalties. A person may also be subject to civil or criminal penalties for willfully causing a reporting company to report incomplete or false beneficial ownership information to FinCEN.</p>
      </div>
      <div><button className='bg-[#C9C9C9] px-20 rounded-md font-bold text-white  py-2'>Submit  Boir</button></div>
      </div>
    </div>
  )
}

export default Submit