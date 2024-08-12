import React from 'react';
import img1 from "../assets/icons/founder.svg";
import img2 from "../assets/icons/founder2.svg";
import img3 from "../assets/icons/founder3.svg";
import arrow from "../assets/icons/arrow.svg"

const founders = [
  {
    imgSrc: img1,
    name: "Ava Johnson",
    position: "Principal",
    description: `Ava Johnson is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. Her primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Ava’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.`,
  },
  {
    imgSrc: img2,
    name: "Mario Lopez",
    position: "Principal",
    description: `Ava Johnson is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. His primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Mario’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.

`,
  },
  {
    imgSrc: img3,
    name: "Sophia Davis",
    position: " Attorney",
    description: `Ava Johnson is a business lawyer who represents clients in the adversarial context of business disputes and business litigation. His primary area of emphasis is corporate ownership disputes and business dissolutions (“business divorce”). Mario’s clients are the owners, officers, and/or directors of privately held companies who need a highly skilled business attorney to creatively and aggressively represent them in their business disputes arising out of breach of fiduciary duty, breach of loyalty, minority oppression, conversion, accounting, wage claims, and unjust enrichment.
`,
  },
];

const FounderCard = ({ imgSrc, name, position, description }) => (
  <div className='flex bg-[#403C5C] mr-24  xs:mx-0 xs:max-w-[100%] md:max-w-[100%] md:flex-col md:mx-0 max-w-[80%] xs:flex-col  ms-auto  relative mt-14'>
    <img  src={imgSrc} alt={name} className=' xs:relative xs:left-0 md:relative md:left-0 absolute left-[-200px]'style={{transform:"translate(0%,0%) !important"}} />
 
    <div className='w-full xs:ps-4 xs:px-4 ps-[150px] px-12'>
      <p className='text-white pt-10'>
        <span className='text-[26px] fgt-ff-semibold text-[#FFEDD7]'>{name}</span><br />
        {position}
      </p>
      <p className='text-white text-[20px] fgt-ff-light py-4 '>{description}</p>
      <p className='text-[26px]  fgt-ff-semibold flex gap-4 text-[#FFEDD7] py-6 cursor-pointer'>More Info <img src={arrow} alt="" /> </p>
    </div>
  </div>
);

const Founders = () => {
  return (
    <div className="p-4 bg-[#FFEDD7] justify-center pb-24 mt-12">
      <h2 className="text-[50px] fgt-ff-medium  flex justify-center mt-16">Meet the Founders</h2>
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
