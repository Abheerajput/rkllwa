import React from 'react';
import profile from "../assets/icons/profile.svg"
const ProfileCard = () => {
  return (
    <div className="bg-gray-50 grid grid-cols-2 p-6 sm:p-10">
      {/* Breadcrumb */}

<div> <div className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:underline">Home</a> {'>'} 
        <a href="#" className="hover:underline">Founders</a> {'>'} 
        <span className="text-gray-700">Ava Johnson</span>
      </div>

      {/* Profile Section */}
      <div className="flex  gap-12 items-start md:items-center">
        <img 
          src={profile} 
          alt="Ava Johnson" 
          className="w-40 h-40 rounded-md object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-1">Ava Johnson</h1>
          <h2 className="text-xl text-orange-600 mb-4">Principal</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:2066542429" className="text-blue-500 hover:underline">206-654-2429</a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:bianchi@lasher.com" className="text-blue-500 hover:underline">bianchi@lasher.com</a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🖨️</span>
              <a href="#" className="text-blue-500 hover:underline">Print Attorney Profile</a>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mt-6">
        Ava Johnson is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. Her primary area of emphasis is corporate ownership disputes and business dissolutions ("business divorce"). Mario’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.
      </p>
      <p className="text-gray-700 mt-4">
        Mario is well-recognized in his field, having been selected for inclusion to the 2020 Washington Super Lawyers' List in Business Litigation and Real Estate, and named a "Rising Star" by Washington Law and Politics in Business Litigation seven times. He served as the Chair of Lasher's Litigation Department from 2009-2013. He currently serves as the firm's Managing Principal.
      </p>
      
      <div className="md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Practice Focus</h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Business Dissolution Lawyer</li>
            <li>Business Litigation Lawyer</li>
            <li>Business Torts Lawyer</li>
            <li>Contract Dispute Lawyer</li>
          </ul>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">Education</h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Notre Dame Law School, 2001 (Juris Doctor)</li>
            <li>Seattle University, 1997 (Bachelor of Arts in Business Administration, Economics, and Humanities)</li>
            <li>Seattle Preparatory School, 1993</li>
          </ul>
        </div>
      </div>
     

      {/* Practice Areas and Testimonials */}
      <div className="flex flex-col md:flex-row mt-6">
        {/* Practice Areas */}
        

        {/* Sidebar */}
        <div className=" mt-6 md:mt-0">
          <div className="bg-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Practice Areas</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Business Law</li>
              <li>BOIR Compliance</li>
              <li>Immigration Law</li>
            </ul>
          </div>
          <div className="bg-gray-200 p-4 rounded-md mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Testimonials</h3>
            <p className="text-gray-700">
              "Mario is the very definition of what an attorney ought to be. He is so supportive and thinks of all the details so that none are missed. I could relax knowing what an organized, consummate professional he is on every level. His communication is clear, thorough, and timely. He’s super sharp and proficient at his job and does it all while being kind — the very best combination! He’s an invaluable asset to the team."
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help? Contact Us</h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700">First Name</label>
            <input type="text" placeholder="Name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Last Name</label>
            <input type="text" placeholder="Last Name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700">Email</label>
            <input type="email" placeholder="Email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="bg-orange-500 text-white p-2 rounded-md w-full hover:bg-orange-600 transition-colors">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
