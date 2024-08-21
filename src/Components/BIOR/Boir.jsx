import React ,{useState}from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa'; 
import "slick-carousel/slick/slick.css";
import icon2 from '../../assets/icons/Posts.svg';
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import boir from "../../assets/icons/Boir.svg"
import SecondHeader from '../../Layout/Header/SecondHeader';
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import img1 from "../../assets/icons/boirimg1.svg"
import Footer from "../../Layout/Footer/Footer"
import '../../Style/style.css';
import { Link } from 'react-router-dom';
const Boir = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
      setOpen(open === index ? null : index);
  };

  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  const faqs = [
    {
        question: "Why do companies have to report beneficial ownership to the U.S. Department of the Treasury?",
        answer: "This website is perfect for individuals, small businesses, and corporations who want to simplify their reporting processes."
    },
    {
        question: "Does the CTA apply to foreign-owned companies operating in the United States?",
        answer: "Your subscription includes access to all our tools, regular updates, and 24/7 customer support."
    },
    {
        question: "What is beneficial ownership information (BOI)?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Who is considered a Beneficial Owner of a Reporting Company?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Who is considered a Beneficial Owner of a Reporting Company?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Does the activity or revenue of a company determine whether it is a Reporting Company?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Is an unaffiliated company that provides a service to the Reporting Company by managing its day-to-day operations, but does not make decisions on important matters,a Beneficial Owner of the Reporting Company?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Is a member of a Reporting Company’s board of directors always a Beneficial Owner of the Reporting Company?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Is a sole proprietorship a Reporting Company subject to FinCEN reporting requirements?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "What are the entities that are exempt from the reporting requirement?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Can someone prepare and submit a BOI on my behalf?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Can a parent company file a single Beneficial Ownership Interest Report (BOIR) on behalf of its group of companies?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Does the activity or revenue of a company determine whether it is a Reporting Company?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Should an initial Beneficial Ownership Interest Report (BOIR) include historical beneficial owners of a reporting company, or only beneficial owners as of the time of filing?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "What are some likely triggers for needing to update a Beneficial Ownership Interest Report (BOIR)?",
        answer: "You will get paid through the payment method of your choice, typically within 3-5 business days."
    },
    {
        question: "Is an updated Beneficial Ownership Information Report (BOIR) required when the type of ownership interest a Beneficial Owner has in a Reporting Company changes?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    },
    {
        question: "Who is a Company Applicant of a Reporting Company?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: " If a Reporting Company needs to update one piece of information on a Beneficial Ownership Interest Report (BOIR), such as its address, does the reporting company have to fill out an entirely new BOIR?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "If a reporting company last filed a “newly exempt entity” Beneficial Ownership Interest Report (BOIR) but subsequently loses its exempt status, what should it do?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "What should I do if I learn of an inaccuracy in a Beneficial Ownership Interest Report (BOIR)?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "What should I do if my Reporting Company becomes exempt after already filing a Beneficial Ownership Interest Report (BOIR)?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "Who can be held liable for violating Beneficial Ownership Interest (BOI) reporting requirements?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "Can an individual who files a report on behalf of a Reporting Company be held liable?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "Can a Beneficial Owner be held liable for refusing to provide required information to a Reporting Company?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "What should a Reporting Company do if a Beneficial Owner or Company Applicant withholds information?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "Is a Reporting Company responsible for ensuring the accuracy of the information that it reports to FinCEN, even if the Reporting Company obtains that information from another party?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "How can I protect my company from uncooperative Beneficial Owners?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "Under the Corporate Transparency Act, who can access Beneficial Ownership Information?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "How does the CTA impact privacy and data security?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
    ,
    {
        question: "How does the CTA impact privacy and data security?",
        answer: "Yes, we use top-notch security measures to ensure all personal data is encrypted and protected."
    }
];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="BOIR Compliance"
      />


      <div className="text-[26px] fgt-ff-normal pl-[5.2%] text-[#403C5C] bg-[#F7F6F1] py-4">
        <Link to="/" className="hover:underline">Home</Link> {'>'}
        <Link to="/founders" className="hover:underline">Founders</Link> {'>'}
        <span className="">Ava Johnson</span>
      </div>

      <div className="bg-white flex flex-row pt-8 w-full  px-[5.2%]  xs:flex xs:flex-col sm:flex sm:flex-col  md:felx md:flex-col sm:p-10">
        {/* Profile Section */}
        <div className=' w-[70%] sm:w-full md:w-full xs:w-full'>
<div className="flex md:flex-col sm:flex-col xs:flex-col gap-16 items-center">
  <h1 className='text-[50px]  fgt-ff-medium xs:text-center  flex xs:flex-col gap-6 items-center text-[#403C5C]'><img src={boir} alt="" className="" /> BOIR Compliance</h1>
<span>
<button className='text-[20px] fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-lg xs:text-[13px]'>START YOUR COMPLIANCE NOW</button>

</span>
</div>

<table className='border w-[60%] max-w-[585px] md:w-[50%] sm:w-[60%] xs:w-[100%] mt-12'>
  <tr className=''>
    <th className='border text-start ps-3 py-2 bg-[#E5E5E5] text-[17px] fgt-ff-bold text'>Table of Contents </th>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
    <a href="#what-is-cta">The Corporate Transparency Act - What is it?</a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
    <a href="#who-needs-to-file">Reporting Company - Who needs to file?</a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
      <a href="#who-needs-to-filed">
      Reporting Company - Who needs to file?
        </a></td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
      <a href="#deadline">

      Deadlines
      </a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
    <a href="#penalties">Penalties for non-compliance with the CTA</a>      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
    <a href="#get-compliant">Get compliant with RKL Law</a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal py-2'>
    <a href="#faqs">Frequently Asked Questions</a>
      </td>
  </tr>
</table>
          
<div>
  <h2 id="what-is-cta" className='text-[24px] fgt-ff-bold text-[#212121] py-8'>What is the Corporate Transparency Act (CTA)?</h2>
  <p className='text-[20px] fgt-ff-light text-[#212121]'>
Beginning on January 1, 2024, many companies in the United States will have to report information about their beneficial owners, i.e., the individuals who ultimately own or control the company. They will have to report the information to the Financial Crimes Enforcement Network (FinCEN). FinCEN is a bureau of the U.S. Department of the Treasury.  It is crucial to note that this reporting requirement will not be satisfied merely by filing your tax returns to the IRS.  It is an entirely separate reporting requirement submitted to a different bureau of the Treasury Department than the IRS, namely FinCEN.
The CTA will eliminate corporate anonymity in the U.S. by requiring non-exempt reporting companies to file a Beneficial Ownership Information (BOI) Report with FinCEN as part of the U.S. government’s efforts to make it harder for bad actors to hide or benefit from their ill-gotten gains through shell companies or other opaque ownership structures.

</p>

<p className='w-full text-center flex flex-col gap-4 items-center justify-center py-6'>
  <img src={img1} alt=""  className='w-[70%]'/>
  <span>
<button className='text-[20px] fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-lg xs:text-[13px]'>START YOUR COMPLIANCE NOW</button>

</span>
</p>
</div>


<div>
  <h2 id="who-needs-to-file" className='text-[24px] fgt-ff-bold text-[#212121] py-8'>Reporting Company - Who needs to file?</h2>
  <p className='text-[20px] fgt-ff-light text-[#212121]'>

Companies required to report are called Reporting Companies. More specifically, Reporting Companies are non-exempt corporations, limited liability companies, or other entities that are (i) created by the filing of a document with a secretary of state or any similar office under the law of the State or Indian Tribe or (ii) formed under the law of a foreign country and registered to do business in any State or tribal jurisdiction by the filing of a document with a secretary of state or any similar office under the laws of a State or Indian Tribe. Oftentimes, Reporting Companies do not have the required information for filing and may have to obtain information from their BOs to report that information to FinCEN.
Tens of millions of businesses and holding companies in the US will be impacted by this new reporting requirement – including most run-of-the-mill businesses and mom-and-pop operations, as this legislation was aimed specifically at small and medium-sized businesses.  It will impact all kinds of companies from restaurants to dry cleaning businesses, from law and accountancy firms to doctors’ offices, from on-line service-providers to LLCs doing no “business” at all besides serving as a real estate holding company.  And then, all kinds of businesses imaginable, in between, even those entities that are losing money or in bankruptcy. <br />
<br />

Business owners and senior officers are responsible for accurate and timely reporting. Responsibility rests with each senior officer of the Reporting Company, and any person who provides information (or fails to provide accurate information) required to make the BOI report true.</p>


<h2 id="who-needs-to-filed" className='text-[24px] fgt-ff-bold text-[#212121] py-8'>BOIR Compliance - What needs to be filed?</h2>
<p className='text-[20px] fgt-ff-light text-[#212121]'>
Beneficial Ownership information refers to identifying information about the individuals who directly or indirectly own or control a company.  Every Reporting Company that is not exempt must file a BOI Report that discloses five specific items of Personal Identifiable Information (PII) for each of its Beneficial Owners (BO), including a copy of a valid, government-issued ID (such a driver’s license or passport) verifying the BO’s identity.  Entities formed (or registered to do business) on or after January 1, 2024, must also identify and provide the same five items of PII for the entity’s Company Applicant. An individual is a Company Applicant if the individual directly files the document that creates (or registers) the Reporting Company and/or if the individual is primarily responsible for directing or controlling such filing if more than one individual is involved in the filing. Each Reporting Company will have to be analyzed on a case-by-case basis to determine who the Company Applicant(s) is/are for accurate reporting.</p>
</div>
<div className='w-full text-center  xs:py-4 sm:py-4' >
<button className='text-[20px] fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-lg  xs:text-[13px]'>START YOUR COMPLIANCE NOW</button>

</div>
<div>
  <h3 id="deadline" className='text-[#844C0D] text-[26px] fgt-ff-bold'>Deadlines</h3>
  <p className="underline-offset-8 underline">FinCEN began accepting reports on January 1, 2024. The following deadlines apply:</p>
  <p>• If your company was created or registered prior to January 1, 2024, you will have until January 1, 2025 to report BOI. <br />
• If your company is created or registered in 2024, you must report BOI within 90 calendar days after receiving actual or public notice that your company’s creation or registration is effective, whichever is earlier.<br />
• If your company is created or registered on or after January 1, 2025, you must file BOI within 30 calendar days after receiving actual or public notice that its creation or registration is effective. <br />
• Any updates or corrections to beneficial ownership information that you previously filed with FinCEN must be submitted within 30 days.</p>

<h2 id="penalties" className='text-[24px] fgt-ff-bold text-[#212121] py-8'>What are the penalties for non-compliance with the CTA?</h2>
<p className='text-[20px] fgt-ff-light text-[#212121]'>Civil and criminal penalties, including fines and imprisonment. Civil penalties up to $500 per day (adjusted for inflation) may be assessed against the Reporting Company and its Beneficial Owners.  Beneficial owners may also be subject to criminal penalties of up to two-year imprisonment and a fine of up to $10,000 for willful non-compliance or deception.</p>

<h2 id="get-compliant" className='text-[24px] fgt-ff-bold text-[#212121] py-8'>Get Compliant with RKL Law</h2>
<p className='text-[20px] fgt-ff-light text-[#212121]'>We know.  It’s a lot to consider, process, and understand.  The good news is that RKL Law is here to help.  We have spent the last several months diligently streamlining the intake process so that we may accurately and efficiently file the BOIR on your behalf.  Although the reporting requirements are straightforward, there are legal definitions, facts, and factors that must be understood and carefully analyzed to make the appropriate identifications and report correctly.  As this is a legal inquiry requiring understanding and application of the law, in most cases one would be best served to hire a lawyer, not a law-adjacent on-line service provider to perform BOI reporting.</p>
<br />

<p className='text-[20px] fgt-ff-light text-[#212121]'>Our BOI Report service will include a comprehensive intake, review and analysis of corporate documents (as necessary) to determine exemption status, identification of Beneficial Owner(s) and Company Applicant(s), providing links for the secure/encrypted uploading of federally-mandated identifying documents, and as many one-on-one Zoom calls and communications with a single attorney dedicated to the file as we deem necessary to prepare the report for filing.  We will hold your hand through the entire process and submit the report for you. And, unlike other law firms, we have implemented a fixed fee structure, so there won’t be an open-ended, hourly-based surprise bill at the end of our services. </p>

<h2 className='text-[24px] fgt-ff-bold text-[#212121] py-8'>Our fee structure is as follows:
</h2>


<div className='overflow-hidden  rounded-xl border-2 border-black'>
  <table className='w-full '>
    <tr className="border-1 border-black">
      <th className='text-[24px] py-2 w-[50%] fgt-ff-bold bg-[#E5E5E5] text-start ps-3 border-2 border-black'>
        Type of Owners
      </th>
      <th className='text-[24px] py-2 w-[50%] fgt-ff-bold bg-[#E5E5E5] text-start ps-3 border-2 border-black'>
        Fee
      </th>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 py-2 text-[19px] font-normal inter'>
        Single individual-owned Reporting Company
      </td>
      <td className='border-2 border-black ps-3 py-2'>$349</td>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 py-2 text-[19px] font-normal inter'>
        Multiple individual-owned Reporting <br /> Company
      </td>
      <td className='border-2 border-black ps-3 py-2'>$449</td>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 py-2 text-[19px] font-normal inter'>
        Single entity-owned Reporting Company <br />
        (with unlimited individual owners)
      </td>
      <td className='border-2 border-black ps-3 py-2'>$849</td>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 py-2 text-[19px] font-normal inter'>
        Multiple entity-owned Reporting Company <br />
        (with unlimited individual owners)
      </td>
      <td className='border-2 border-black ps-3 py-2'>$849</td>
    </tr>
  </table>
</div>

<div className='py-4 text-center'>
<button className='text-[20px] fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-lg xs:text-[13]'>START YOUR COMPLIANCE NOW</button>

</div>

</div>

<div className="bg-white">
            <h2 id="faqs" className="text-[53px] text-[#162325] lexend-normal text-center">Frequently Asked Questions</h2>
            <div className="mt-8 w-full sm:px-8 xs:px-4 mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className=" my-6">
                        <button
                            className="w-full text-left rounded-md bg-[#F8F8F8] px-4 py-4  focus:outline-none text-lg flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            {/* Display plus or minus icon based on whether the item is open */}
                            {open === index ? (
                                <FaMinus className="text-[#000000]" />
                            ) : (
                                <FaPlus className="text-[#050505]" />
                            )}
                        </button>
                        {open === index && (
                            <p className="p-4 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div className='py-4 text-center pb-8'>
<button className='text-[20px] fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-lg xs:text-[13px]'>START YOUR COMPLIANCE NOW</button>

</div>
        </div>

        {/* Sidebar */}
        <div className="flex w-[30%] justify-end md:justify-center xs:justify-center xs:mr-0 xs:mb-5 md:mr-0 mt-6 md:mx-0 md:ml-3  pr-0">
          <div className="mt-6 md:mt-0 md:w-[100%] xs:w-[100%] sm:w-[100%] text-start">
            <div className="bg-[#FFEDD7] p-4 rounded-md pl-8  ">
              <p className='flex justify-center pt-6'><img src={icon2} alt="" /></p>
              <h3 className="text-[35px] fgt-ff-normal text-center  text-[#02131D] pt-9 mb-4"> Latest Posts</h3>
              <div className="text-[#212121]">
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                 <p className=' flex pb-4 text-[18px] fgt-ff-medium text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
               
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
            
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
           
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br /> Celebrating 50 Years
                <p className=' flex  text-[18px] fgt-ff-medium text-[#02131D] items-center gap-3 pb-5'>Read More <FaArrowRightLong /> </p>
                </p>
          
              
             
              </div>
            </div>

            {/* Testimonials Slider */}
          
          </div>
        </div>

    
      </div>
      <Footer />
    </>
  );
}

export default Boir;
