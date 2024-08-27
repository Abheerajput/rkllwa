import React from 'react';

const Form = () => {
  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold">Need Help? Contact Us</h3>
      <form>
        <div className="flex w-full gap-4">
          <div className="flex flex-col w-1/2 text-[14px] font-medium my-2">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="border py-2 my-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col w-1/2 text-[14px] font-medium my-2">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="border py-2 my-2 rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col w-full text-[14px] font-medium my-2">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="border py-2 my-2 w-full rounded-sm"
          />
        </div>
        <button className="bg-[#E6A358] text-white mt-4 py-2 px-12 text-[20px] fgt-ff-normal rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
