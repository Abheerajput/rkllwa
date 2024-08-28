import React from 'react';
import icon from '../../assets/icons/lawicon.svg';
import icon2 from '../../assets/icons/Posts.svg';
// import icon3 from '../../assets/icons/lawicon2.svg';
// import icon4 from '../../assets/icons/law3icon.svg';
import {Link} from 'react-router-dom'

const SectionHeader = ({ iconSrc, title, className, text }) => (
  <>
    <h2 className={`text-[#403C5C] text-[50px] fgt-ff-medium items-center flex-wrap gap-6 xs:gap-2 flex ${className}`}>
      <img src={iconSrc} alt="" className='xs:w-[70px]' />
      <span className='xs:text-[32px] '>{title}</span>
      {text && <Paragraph text={text} className="pt-5 " />}
     
    </h2>
    <div className='mt-8'>
      <p className='sx:text-[16px]  text-[20px] '>For more than a decade, RKL Law has been responsible for countless immigrants gaining legal residency and the ability to restart their lives in the United States. Our immigration solutions for individuals include:</p>
  <ul className='sx:text-[16px]  text-[20px] '>
    <li  className='py-1'>●	Asylum</li>
    <li className='py-1'>●	Student Visa</li>
    <li className='py-1'>
    ●	Marriage petitions</li>
    <li className='py-1'>
    ●	Waivers of Grounds of Inadmissibility</li>
    <li className='py-1'>●	Provisional Unlawful Presence Waivers</li>
    <li className='py-1'>●	Fiancé visas</li>
    <li className='py-1'>●	Applications to remove conditions on residence</li>
    <li className='py-1'>●	Naturalization</li>
    <li className='py-1'>
    ●	Immigrant visas and Consular Processing</li>
    <li className='py-1'>●	Deferred Action for Childhood Arrivals (“DACA”)</li>
    <li className='py-1'>
    ●	Family-based visa</li>
  </ul>

  
  <p className='sx:text-[16px]  py-8 text-[20px]'>Navigating your immigration journey is best when you have a trusted ally like RKL Law on your side. If you need an experienced immigration attorney to deal with visa applications and other issues related to your immigration status, we can help you with the most effective and assertive representation for your case. Let us provide you and your family with greater peace of mind and pave the road to success as you move forward in the United States.</p>
  <p className='py-6 sx:text-[16px]  text-[20px]'>Please <span><Link to="/contactus" className='border-b-2 border-blue-800'>contact us</Link> </span> for a free consultation to discuss your immigration issues.  </p>
</div>
  </>
);
const Paragraph = ({ text, className }) => (
  <>
   
  

    </>
);

const ListSection = ({ title, items }) => (
  <>
    <h1 className="py-2 text-[30px] sx:text-[20px] fgt-ff-medium">{title}</h1>
    <ul className="list-disc pt-4 sx:text-[16px]  text-[20px] xs:flex xs:flex-col xs:gap-1 fgt-ff-light pl-8">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
 
  </>
);

// const ContactForm = () => (
//   <form className="max-w-full">
  
//       <div className='flex w-full gap-4'>
//          <div className="flex flex-col w-1/2  text-[14px] font-medium my-2">
//         <label>First Name</label>
//         <input type="text" placeholder="First Name" className="border  ps-3 py-2 my-2 rounded-sm" />
//       </div>
//       <div className="flex flex-col w-1/2 text-[14px] font-medium my-2">
//         <label>Last Name</label>
//         <input type="text" placeholder="Last Name" className="border ps-3 py-2 my-2  rounded-sm" />
//       </div>
   
     

//     </div>
//     <div className="flex flex-col w-full text-[14px] font-medium my-2">
//       <label>Email</label>
//       <input type="email" placeholder="Email" className="border ps-3 py-2 my-2 w-full rounded-sm" />
//     </div>
//     <button className="bg-[#E6A358] text-white mt-4 py-2 px-12 text-[20px] fgt-ff-normal rounded">
//       Submit
//     </button>
//   </form>
// );

// const Post = ({ text }) => (
//   <div className="py-6">
//     <p className="text-[20px] sx:text-[16px] fgt-ff-light">{text}</p>
//     <p className="text-[18px] sx:text-[16px] fgt-ff-medium">Read More →</p>
//     <hr className="mt-6" />
//   </div>
// );

// const Sidebar = ({ posts }) => (
//   <div className="flex justify-center sm:w-full  xl:w-[80%] lg:w-[80%] xs:w-full  xs:justify-center  sm:justify-center xs:mr-0 xs:pb-8 md:justify-center md:mr-0 md:pb-8">
//     <div className="w-full   px-4  mt-8 max-h-[800px] min-h-[500px]  bg-[#FFEDD7]">
//       <div className="text-[35px] text-[#02131D] sx:text-[28px] fgt-ff-normal font-bold flex flex-col items-center xs:pt-3 pt-14">
//         <img src={icon2} alt="Posts Icon" />
//         Latest Posts
//       </div>
//       {posts.map((post, index) => (
//         <Post key={index} text={post} />
//       ))}
//     </div>
//   </div>
// );

const Content = () => {
  // const divorceItems = [
  //   'Your Right to a Divorce',
  //   'The High Asset Divorce',
  //   'The Collaborative Divorce',
  //   'The LGBTQ+ Divorce',
  //   'The Contested Divorce',
  //   'Divorce Mediation',
  //   'The Executive Divorce',
  //   'The Gray Divorce',
  //   'The International Divorce',
  //   'The Narcissistic Divorce',
  //   'A Few Words About the Cheating Spouse',
  // ];

  // const propertyDivisionItems = [
  //   'Spousal Maintenance',
  //   'Separate and Community Property',
  //   'The Family Home',
  //   'The Collaborative Divorce',
  //   'Business Valuation in Divorce',
  //   'Property Division in Tech Divorces',
  //   'Complex Asset Divorces',
  //   'The Executive Divorce',
  //   'Property Division, Generally',
  //   'Pets & Divorce',

    
  // ];

  const latestPosts = [
    'RKL Holzapfel Sperry & Ebberson PLLC Celebrating 50 Years',
    'New Law Updates in Immigration',
    'Navigating Complex Divorces',
    'Understanding Property Division',
  ];



  return (
    <div className=" ">
      <div className="flex w-full xs:flex sm:flex-col md:flex-col xs:flex-col  px-[5.2%]     gap-4">
        <div className="py-4 w-[64%] xs:w-full sm:w-[100%] md:w-[100%]">
          <SectionHeader iconSrc={icon} title="IMMIGRATION LAW" />
          {/* <Paragraph text={"For more than a decade, RKL Law has been responsible for countless immigrants gaining legal residency and the ability to restart their lives in the United States. Our immigration solutions for individuals include: " + (window.innerWidth > 768 ? "<br />" : "") + " We  are dedicated to preserving your financial and personal  well being as you navigate the many  options for your " + (window.innerWidth > 768 ? "<br />" : "") + " new beginning."} className="pt-5" /> */}
          {/* <Paragraph text={"With a combined over 150 years of experience in all facets of Washington divorce and family restructuring, " + (window.innerWidth > 768 ? "<br/>" : "") + " we are here to help you choose the best path forward. Whether you want to proceed with traditional divorce " + (window.innerWidth > 768 ? "<br/>" : "") + " litigation, mediation, or collaborative divorce, we have many years of success representing clients through " + (window.innerWidth > 768 ? "<br/>" : "") + " legal separations, committed intimate relationships, child custody, child support and parenting plans, as well " + (window.innerWidth > 768 ? "<br/>" : "") + " as prenuptial and postnuptial agreements."} className="pt-4" /> */}
          {/* <Paragraph text={"Recognizing that disputes about child custody are one of the most delicate and emotional aspects of the  " + (window.innerWidth > 768 ? "<br/>" : "") + " separation process, we approach each case with individualized attention and care, in an effort to minimize " + (window.innerWidth > 768 ? "<br />" : "") + " the impact of parenting issues on our clients’ children."} className="pt-4" /> */}
          <div className="w-full flex justify-center py-8">
            {/* <img src={icon3} alt="Decorative Icon" className="max-w-2xl xs:max-w-[100%] xs:mx-4" /> */}
          </div>
          <Paragraph text="Working as a team, our goal is to guide you and your family to find the best way forward..." className="py-2" />
          {/* <ListSection title="DIVORCE" items={divorceItems} /> */}
          <div className="w-full flex justify-center py-8">
            {/* <img src={icon4} alt="Decorative Icon" className="max-w-2xl xs:max-w-[100%] xs:mx-4" /> */}
          </div>
          <Paragraph text="We can help you determine which assets can be included in the divorce process and what they are worth..." className="py-2" />
          {/* <ListSection title="PROPERTY DIVISION IN DIVORCE" items={propertyDivisionItems} /> */}
          <Paragraph text="Need Help? Contact Us" className="text-[26px] xs:text-[20px] fgt-ff-normal xs:mt-4 pt-4 pb-2" />
          <Paragraph text="If you are looking for a trusted divorce attorney, we are here to help..." className="py-2" />
          {/* <ContactForm /> */}
        </div>
        <div className="w-[36%] sm:w-[100%] flex justify-end  xs:w-full md:w-[100%] " >
  
        {/* <Sidebar  posts={latestPosts} /> */}
        </div>
      </div>
    </div>
  );
}
//   return (
//     <div className=" ">
//       <div className="flex w-full xs:flex sm:flex-col md:flex-col xs:flex-col  px-[5.2%]     gap-4">
//         <div className="py-4 w-[64%] xs:w-full sm:w-[100%] md:w-[100%]">
//           <SectionHeader iconSrc={icon} title="IMMIGRATION LAW" />
//           <Paragraph text={"Divorce is one of life’s greatest challenges. Let our family law team be the bridge to your secure future. <br  /> We  are dedicated to preserving your financial and personal  well being as you navigate the many  options for your <br /> new beginning."} className="pt-5" />
//           <Paragraph text={"With a combined over 150 years of experience in all facets of Washington divorce and family restructuring, <br/> we are here to help you choose the best path forward. Whether you want to proceed with traditional divorce <br/> litigation, mediation, or collaborative divorce, we have many years of success representing clients through <br/> legal separations, committed intimate relationships, child custody, child support and parenting plans, as well <br/> as prenuptial and postnuptial agreements."} className="pt-4" />
//           <Paragraph text={"Recognizing that disputes about child custody are one of the most delicate and emotional aspects of the  <br/> separation process, we approach each case with individualized attention and care, in an effort to minimize <br /> the impact of parenting issues on our clients’ children."} className="pt-4" />
//           <div className="w-full flex justify-center py-8">
//             <img src={icon3} alt="Decorative Icon" className="max-w-2xl xs:max-w-[100%] xs:mx-4" />
//           </div>
//           <Paragraph text="Working as a team, our goal is to guide you and your family to find the best way forward..." className="py-2" />
//           <ListSection title="DIVORCE" items={divorceItems} />
//           <div className="w-full flex justify-center py-8">
//             <img src={icon4} alt="Decorative Icon" className="max-w-2xl xs:max-w-[100%] xs:mx-4" />
//           </div>
//           <Paragraph text="We can help you determine which assets can be included in the divorce process and what they are worth..." className="py-2" />
//           <ListSection title="PROPERTY DIVISION IN DIVORCE" items={propertyDivisionItems} />
//           <Paragraph text="Need Help? Contact Us" className="text-[26px] xs:text-[20px] fgt-ff-normal xs:mt-4 pt-4 pb-2" />
//           <Paragraph text="If you are looking for a trusted divorce attorney, we are here to help..." className="py-2" />
//           <ContactForm />
//         </div>
//         <div className="w-[36%] sm:w-[100%] flex justify-end  xs:w-full md:w-[100%] " >

//         <Sidebar  posts={latestPosts} />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Content;
