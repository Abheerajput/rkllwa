import React from 'react';
import img1 from "../../assets/icons/founder.svg";
import img2 from "../../assets/icons/founder2.svg";
import img3 from "../../assets/icons/founder3.svg";
import arrow from "../../assets/icons/arrow.svg"

const founders = [
  {
    imgSrc: img1,
    name: " Ninaz Khorsandi",
    position: "Partner",
    description: `Ninaz Khorsandiis a business lawyer who represents clients in the adversarial context of business disputes and business litigation. Her primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Ava’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.`,
  },
  {
    imgSrc: img2,
    name: "Sohila Razai",
    position: "Partner",
    description: `Sohila Razai is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. His primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Mario’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.

`,
  },
  {
    imgSrc: img3,
    name: "Nazanin Lahijani",
    position: "Partner",
    description: `Nazanin Lahijani is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. His primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Mario’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.
`,
  },
];

const FounderCard = ({ imgSrc, name, position, description }) => (
  <div className='flex bg-[#403C5C] mr-24  xs:mt-4 xs:mx-0 xs:max-w-[100%] md:max-w-[100%] md:flex-col md:mx-0 max-w-[80%] xs:flex-col sm:flex-col xs:items-start sm:items-start   ms-auto  relative mt-14'>
    <img  src={imgSrc} alt={name} className=' sm:w-1/2 xs:w-1/2 xs:my-8 sm:pl-4  xs:pl-4 sm:my-8  xs:relative sm:relative xs:left-0 sm:left-0 md:relative md:left-0 absolute left-[-116px] sm:top-[0%] xs:top-[0%] top-[13%]'style={{transform:"translate(0%,0%) !important"}} />
 
    <div className='w-full xs:ps-4 xs:px-4 xs:mt-[-70px] sm:ps-4 ps-[150px] px-12'>
      <p className='text-white pt-10 xs:pt-4 sm:pt-4 xs:flex xs:flex-col'>
        <span className='text-[26px] fgt-ff-semibold text-[#FFEDD7]'>{name}</span><br />
        {position}
      </p>
      <p className='text-white text-[20px] sx:text-[16px] fgt-ff-light py-4 '>{description}</p>
      <p className='text-[26px]  fgt-ff-semibold flex gap-4 text-[#FFEDD7] sx:text-[18px] py-6 cursor-pointer'>More Info <img src={arrow} alt="" /> </p>
    </div>
  </div>
);

const Founders = () => {
  return (
    <div className="p-4 bg-[#FFEDD7] justify-center xs:pb-4 pb-24 xs:mt-0 mt-12">
      <h2 className="text-[50px] xs:text-[40px] fgt-ff-medium sx:text-[32px] flex justify-center xs:mt-0 mt-16">Meet the Founders</h2>
      {founders.map((founder, index) => (
        <FounderCard
          key={index}
          imgSrc={founder.imgSrc}
          name={founder.name}
          position={founder.position}
          description={founder.description}
        />
      ))}
    </div>
  );
};

export default Founders;
