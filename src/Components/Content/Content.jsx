import React from 'react';
import icon from '../../assets/icons/lawicon.svg';
import icon2 from '../../assets/icons/Posts.svg';
import icon3 from '../../assets/icons/lawicon2.svg';
import icon4 from '../../assets/icons/law3icon.svg';

const SectionHeader = ({ iconSrc, title, className, text }) => (
  <>
    <h2 className={`text-[#403C5C] text-[50px] fgt-ff-medium items-center flex-wrap gap-6 flex ${className}`}>
      <img src={iconSrc} alt="" className='xs:w-48' />
      <span>{title}</span>
      {text && <Paragraph text={text} className="pt-5" />}
    </h2>
  </>
);
const Paragraph = ({ text, className }) => (
  <p
    className={`text-[20px] fgt-ff-light ${className}`}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);

const ListSection = ({ title, items }) => (
  <>
    <h1 className="py-2 text-[30px] fgt-ff-medium">{title}</h1>
    <ul className="list-disc pt-4 text-[20px] fgt-ff-light pl-8">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);

const ContactForm = () => (
  <form className="max-w-full">
  
      <div className='flex w-full gap-4'>
         <div className="flex flex-col w-1/2  text-[14px] font-medium my-2">
        <label>First Name</label>
        <input type="text" placeholder="First Name" className="border  ps-3 py-2 my-2 rounded-sm" />
      </div>
      <div className="flex flex-col w-1/2 text-[14px] font-medium my-2">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" className="border ps-3 py-2 my-2  rounded-sm" />
      </div>
   
     

    </div>
    <div className="flex flex-col w-full text-[14px] font-medium my-2">
      <label>Email</label>
      <input type="email" placeholder="Email" className="border ps-3 py-2 my-2 w-full rounded-sm" />
    </div>
    <button className="bg-[#E6A358] text-white mt-4 py-2 px-12 text-[20px] fgt-ff-normal rounded">
      Submit
    </button>
  </form>
);

const Post = ({ text }) => (
  <div className="py-6">
    <p className="text-[20px] fgt-ff-light">{text}</p>
    <p className="text-[18px] fgt-ff-medium">Read More →</p>
    <hr className="mt-6" />
  </div>
);

const Sidebar = ({ posts }) => (
  <div className="flex justify-center sm:w-full  xs:w-full  xs:justify-center  sm:justify-center xs:mr-0 xs:pb-8 md:justify-center md:mr-0 md:pb-8">
    <div className="w-full   px-4  mt-8 max-h-[800px] min-h-[500px]  bg-[#FFEDD7]">
      <h3 className="text-[35px] text-[#02131D] fgt-ff-normal font-bold flex flex-col items-center pt-14">
        <img src={icon2} alt="Posts Icon" />
        Latest Posts
      </h3>
      {posts.map((post, index) => (
        <Post key={index} text={post} />
      ))}
    </div>
  </div>
);

const Content = () => {
  const divorceItems = [
    'Your Right to a Divorce',
    'The High Asset Divorce',
    'The Collaborative Divorce',
    'The LGBTQ+ Divorce',
    'The Contested Divorce',
    'Divorce Mediation',
    'The Executive Divorce',
    'The Gray Divorce',
    'The International Divorce',
    'The Narcissistic Divorce',
    'A Few Words About the Cheating Spouse',
  ];

  const propertyDivisionItems = [
    'Spousal Maintenance',
    'Separate and Community Property',
    'The Family Home',
    'The Collaborative Divorce',
    'Business Valuation in Divorce',
    'Property Division in Tech Divorces',
    'Complex Asset Divorces',
    'The Executive Divorce',
    'Property Division, Generally',
    'Pets & Divorce',
  ];

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
          <Paragraph text={"Divorce is one of life’s greatest challenges. Let our family law team be the bridge to your secure future. <br /> We  are dedicated to preserving your financial and personal  well being as you navigate the many  options for your <br /> new beginning."} className="pt-5" />
          <Paragraph text={"With a combined over 150 years of experience in all facets of Washington divorce and family restructuring, <br/> we are here to help you choose the best path forward. Whether you want to proceed with traditional divorce <br/> litigation, mediation, or collaborative divorce, we have many years of success representing clients through <br/> legal separations, committed intimate relationships, child custody, child support and parenting plans, as well <br/> as prenuptial and postnuptial agreements."} className="pt-4" />
          <Paragraph text={"Recognizing that disputes about child custody are one of the most delicate and emotional aspects of the  <br/> separation process, we approach each case with individualized attention and care, in an effort to minimize <br /> the impact of parenting issues on our clients’ children."} className="pt-4" />
          <div className="w-full flex justify-center py-8">
            <img src={icon3} alt="Decorative Icon" className="max-w-2xl xs:max-w-[100%] xs:mx-4" />
          </div>
          <Paragraph text="Working as a team, our goal is to guide you and your family to find the best way forward..." className="py-2" />
          <ListSection title="DIVORCE" items={divorceItems} />
          <div className="w-full flex justify-center py-8">
            <img src={icon4} alt="Decorative Icon" className="max-w-2xl xs:max-w-[100%] xs:mx-4" />
          </div>
          <Paragraph text="We can help you determine which assets can be included in the divorce process and what they are worth..." className="py-2" />
          <ListSection title="PROPERTY DIVISION IN DIVORCE" items={propertyDivisionItems} />
          <Paragraph text="Need Help? Contact Us" className="text-[26px] fgt-ff-normal pt-4 pb-2" />
          <Paragraph text="If you are looking for a trusted divorce attorney, we are here to help..." className="py-2" />
          <ContactForm />
        </div>
        <div className="w-[36%] sm:w-[100%] flex justify-end  xs:w-full md:w-[100%] " >

        <Sidebar  posts={latestPosts} />
        </div>
      </div>
    </div>
  );
};

export default Content;
