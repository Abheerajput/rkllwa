import React, { useState, useEffect, useRef } from 'react';

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
import MenuOpen from '../MenuOpen';
import { Link } from 'react-router-dom';
const Boir = () => {

  const [openIndexes, setOpenIndexes] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    // This will scroll to the top only once when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match the duration of your slide-out animation
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Set focus on the menu when it opens
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [menuOpen]);
  const [open, setOpen] = useState(null);

 const toggleFAQ = (index, event) => {
    event.preventDefault();
    if (openIndexes.includes(index)) {
      // Remove the index if it's already open
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Add the index to the openIndexes array
      setOpenIndexes([...openIndexes, index]);
    }
  };
  

  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  const faqs = [
 
    
    {
        question: "Why do companies have to report beneficial ownership to the U.S. Department of the Treasury?",
        answer: "In 2021, Congress passed the Corporate Transparency Act on a bipartisan basis. This law creates a new beneficial ownershipinformation reporting requirement as part of the U.S. government's efforts to make it harder for bad actors to hide or benefit from theirill-gotten gains through shell companies or other opaque ownership structures"
    },
    {
        question: "Does the CTA apply to foreign-owned companies operating in the United States?",
        answer: "Yes, the CTA applies to foreign-owned companies that conduct business within the United States and meet the reporting criteria and donot fall within any exempted category. It is part of the U.S. government's efforts to ensure transparency and prevent the misuse ofanonymous entities for illicit purposes."
    },
    {
        question: "What is beneficial ownership information (BOI)?",
        answer: "BOI refers to personal identifying information about the individuals who directly or indirectly own or control a company."
    },
    {
        question: "Who is considered a Beneficial Owner of a Reporting Company?",
        answer: <>
        A Beneficial Owner is an individual who either directly or indirectly: (1) exercises substantial control over the reporting company, or (2)owns or controls at least 25% of the reporting company’s ownership interests.<br className='xs:hidden' /> The “exercise of substantial control,” “direct ownership,” and “indirect ownership” are terms of art with specific legal definitions andcriteria. The terms are not used in a generic manner. As such, a Beneficial Owner may include individuals one would notconventionally considered an owner and exclude others one would. Please talk to an attorney to ascertain who your company’sBeneficial Owners are.
        </>
    },
    {
        question: "Can a Beneficial Owner be a corporation or LLC?",

        answer:<>
        Generally, a Beneficial Owner must be an individual. However, if a Beneficial Owner owns or controls their ownership interests in areporting company exclusively through multiple exempt entities, then the names of all those exempt entities may be reported to FinCENinstead of the individual Beneficial Owner’s information. <br className='xs:hidden' />
        Note that this special rule does not apply when an individual owns or controls ownership interests in a Reporting Company through bothexempt and non-exempt entities. In that case, the reporting company must report the individual as a Beneficial Owner (if no exceptionapplies), but the exempt companies do not need to be listed.
        </> 
    },
    {
        question: "Does the activity or revenue of a company determine whether it is a Reporting Company?",
        answer: "Sometimes. An entity’s activities and revenue, along with other factors in some cases, can qualify it for an exemption. However,neither engaging solely in passive activities like holding rental properties, for example, nor being unprofitable necessarily exempts an entity from the BOI reporting requirements"
    },
    {
        question:
        <>
        Is an unaffiliated company that provides a service to the Reporting Company by managing its day-to-day operations, but <br className='xs:hidden' /> doesnot make decisions on important matters, a Beneficial Owner of the Reporting Company?
        </>,
        
        answer: <>
      The unaffiliated company itself cannot be a Beneficial Owner of the Reporting Company because a Beneficial Owner must be an individual.  Any individuals that exercise substantial control over the reporting company through the unaffiliated company must be reported as Beneficial Owners of the Reporting Company.  However, individuals who do not otherwise exercise Substantial Control may not be Beneficial Owners of the Reporting Company. Whether activity qualifies as the exercise of “substantial control” is a legal question.  If you are uncertain whether the activity/ decision-making of a member or employee of an unaffiliated company in or over your company qualifies as “substantial control,” please consult with your attorney. <br className='xs:hidden'/>
      <br className='xs:hidden'/>

There’s a space before the first word of the following question <br className='xs:hidden'/> 
<br className='xs:hidden'/>

 How does a company determine its date of creation or registration? <br className='xs:hidden'/>
<br className='xs:hidden'/>

The date of creation or registration for a reporting company is the earlier of the date on which: (1) the Reporting Company receives actual notice that its creation or registration has become effective; or (2) a secretary of state or similar office first provides public notice, such as through a publicly accessible registry, that the domestic Reporting Company has been created or the foreign Reporting Company has been registered.
        </>
    },
    {
        question: "Is a member of a Reporting Company’s board of directors always a Beneficial Owner of the Reporting Company?",
        answer: <>
        No. A Beneficial Owner of a company is any individual who, directly or indirectly, exercises substantial control over a Reporting
Company, or who owns or controls at least 25 percent of the ownership interests of a Reporting Company. <br />
Whether a particular director meets any of these criteria is a question that the Reporting Company must consider on a
director-by-director basis. Please speak with an attorney if you are unable to make this determination on your Reporting Company’s
behalf.
        </>
    },
    {
        question: "Is a sole proprietorship a Reporting Company subject to FinCEN reporting requirements?",
        answer: <>
        No, unless a sole proprietorship was created (or, if a foreign sole proprietorship, registered to do business) in the US by filing a
document with a secretary of state or similar office. For instance, in some jurisdictions, a sole proprietor may register a fictitious
business name with the secretary of state (or equivalent office). As a result, the business using that fictitious business name, albeit a
sole proprietorship, would arguably qualify as a Reporting Company (if not otherwise exempt).
        </>
    },
    {
        question: "What are the entities that are exempt from the reporting requirement?",
        answer: <>
       <table>
  <thead>
    <tr>
      <th>Exemption No.</th>
      <th>Exemption Short Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Securities reporting issuer</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Governmental authority</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bank</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Credit union</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Depository institution holding company</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Money services business</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Broker or dealer in securities</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Securities exchange or clearing agency</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Other Exchange Act registered entity</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Investment company or investment adviser</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Venture capital fund adviser</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Insurance company</td>
    </tr>
    <tr>
      <td>13</td>
      <td>State-licensed insurance producer</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Commodity Exchange Act registered entity</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Accounting firm</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Public utility</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Financial market utility</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Pooled investment vehicle</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Tax-exempt entity</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Entity assisting a tax-exempt entity</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Large operating company</td>
    </tr>
    <tr>
      <td>22</td>
      <td>Subsidiary of certain exempt entities</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Inactive entity</td>
    </tr>
  </tbody>
</table>

<p>However, each of these “short titles” has paragraphs, if not pages, of definitions, code section citations, and other law specifying what is actually meant as the exemption criteria. Determining if any of these exemptions apply to your business requires ready familiarity with and understanding of those criteria. Please talk to an attorney to determine if your business qualifies for an exemption.</p>
        </>
    },
    {
        question: "Can someone prepare and submit a BOI on my behalf?",
        answer: <>
        Yes. FinCEN allows Reporting Companies to designate a third party to report on their behalf. In most cases, a lawyer is best qualified
to ascertain whether a company qualifies as a Reporting Company or falls under an exemption. Also, a lawyer would know best which
individuals qualify as reportable Beneficial Owners, since this is a legal term with a specific definition and criteria. RKL Law can
prepare and submit a BOI on your Reporting Company’s behalf. Click here to have RKL Law evaluate your company and get it CTA
compliant
        </>
    },
    {
        question: "Can a parent company file a single Beneficial Ownership Interest Report (BOIR) on behalf of its group of companies?",
        answer: <>
        No. Any company that meets the definition of a Reporting Company and is not exempt is required to file its own BOIR.
        </>
    },
    {
        question: <>
        Should an initial Beneficial Ownership Interest Report (BOIR) include historical beneficial owners of a reporting company, <br className='xs:hidden' /> or
        only beneficial owners as of the time of filing? 
        </>,
        answer: <>
        An initial BOIR should only include the beneficial owners as of the time of the filing. Reporting companies should notify FinCEN of
        changes to beneficial owners and related BOI through updated reports.
        </>
    },
    {
       question: "How does a company determine its date of creation or registration?",
        answer: <>
        The date of creation or registration for a reporting company is the earlier of the date on which: (1) the Reporting Company receives
actual notice that its creation or registration has become effective; or (2) a secretary of state or similar office first provides public notice,
such as through a publicly accessible registry, that the domestic Reporting Company has been created or the foreign Reporting
Company has been registered.
        </>
    },
    {
        question:"What should I do if previously reported information changes?",
        answer: <>
        If there is any change in the required information about your Reporting Company or its Beneficial Owners in the Beneficial Ownership
Information Report (BOIR) submitted to FinCEN, your company must file an updated report no later than 30 days after the date of the
change. A Reporting Company is not required to file an updated report for any changes to previously reported information about a
Company Applicant
        </>
    },
    {
        question: "What are some likely triggers for needing to update a Beneficial Ownership Interest Report (BOIR)?",
        answer: <>
        The following are some examples of changes that would require an Updated BOIR:
● Any change to the information reported for the Reporting Company such as a new business name or address.
● Any change to Beneficial Owners, such as a new CEO, or a sale that changes who meets the 25% ownership interest threshold.
● Any changes to a Beneficial Owners, name, address, or unique identifying number previously provided to FinCEN. If a
Beneficial Owner obtains a new driver’s license or other identifying document that includes a changed name, address, or
identifying number, the reporting company also would have to file an Updated BOIR, including an image of the new identifying
document.
        </>
    },
    {
        question: <>
        Is an updated Beneficial Ownership Information Report (BOIR) required when the type of ownership <br  className='xs:hidden'/> interest a Beneficial
        Owner has in a Reporting Company changes?
        </>,
        answer: <>
        No. A change to the type of ownership interest a Beneficial Owner has in a Reporting Company – for example, a conversion of
preferred shares to common stock – does not require the reporting company to file an updated BOIR because FinCEN does not require
companies to report the type of interest.
        </>
    },
    {
        question: "Who is a Company Applicant of a Reporting Company?",
        answer: <>
        Only Reporting Companies created or registered on or after January 1, 2024, will need to report their Company Applicants. A company
that must report its Company Applicants will have only up to two individuals who could qualify as Company Applicants: 1. The
individual who directly files the document that creates or registers the company (i.e., with the Secretary of State or similar office) and 2.
If more than one person is involved in the filing, the individual who is primarily responsible for directing or controlling the filing. Please
consult with an attorney if you are having difficulty determining the identity of your company’s Company Applicant.
        </>
    }
    ,
   
    
    {
        question: <>
        If a Reporting Company needs to update one piece of information on a Beneficial Ownership Interest Report (BOIR), such as <br  className='xs:hidden'/>
        its address, does the reporting company have to fill out an entirely new BOIR?
        </>,
        answer: <>
        Yes. An Updated BOIR will need to be submitted. Updated BOI Reports will require all fields to be submitted, including the updated
piece(s) of information. For example, if a Reporting Company changes its legal name, the Reporting Company will need to file an
updated BOI Report to include the new legal name and the previously reported, unchanged information about the company, its
Beneficial Owners and, if required, its Company Applicants.
        </>
    }
    ,
    {
        question: "Can a filer submit a late updated Beneficial Ownership Interest Report (BOIR)?",
        answer:<>An updated BOIR can be submitted to FinCEN at any time. However, the Reporting Company is responsible for ensuring that updates
are filed within 30 days of a change occurring. Such changes should be reported to FinCEN Filing with enough time to meet the 30-day
deadline
        </>
    }
    ,
    {
        question: <>
        If a reporting company last filed a “newly exempt entity” Beneficial Ownership Interest Report (BOIR) <br  className='xs:hidden'/> but subsequently loses
        its exempt status, what should it do?
        </>,
        answer: <>
        A Reporting Company should file an Updated BOIR with the company’s current Beneficial Ownership information when it determines it
no longer qualifies for an exemption. To ascertain whether your company has lost its exemption status, consult with an attorney or click
here to retain RKL Law’s services for an evaluation.
        </>
    }
    ,
    {
        question: "What should I do if I learn of an inaccuracy in a Beneficial Ownership Interest Report (BOIR)?",
     
        answer: <>
        If a BOIR is inaccurate, your company must correct it no later than 30 days after the date your company became aware of the
inaccuracy or had reason to know it. This includes any inaccuracy in the required field information provided about your company, its
Beneficial Owners, or its Company Applicants.
        </>
    }
    ,
    {
        question: "What should I do if my Reporting Company becomes exempt after already filing a Beneficial Ownership Interest Report",
        answer: <>
        If a Reporting Company files a BOIR and thereafter becomes exempt (i.e., qualifies for one of the twenty-three enumerated
exemptions), the company should file an Updated BOIR indicating that it is exempt. To ascertain whether your company qualifies for an
exemption due to a change in circumstances, consult with an attorney or click here to retain RKL Law’s services for an evaluation
        </>
    }
    ,
    {
        question: "Who can be held liable for violating Beneficial Ownership Interest (BOI) reporting requirements?",
        answer: <>
        Both individuals and corporate entities can be held liable. This can include not only an individual who files false information, but also
anyone who willfully provides the filer with false information to report. Both individuals and corporate entities may also be liable for
willfully failing to report complete or updated Beneficial Ownership Information. In such circumstances, individuals can be held liable if
they either cause the failure or are a senior officer at the company at the time of the failure.
        </>
    }
    ,
    {
        question: "Can an individual who files a report on behalf of a Reporting Company be held liable?",
        answer: <>
        Yes. An individual who willfully files a false or fraudulent Beneficial Ownership Information Report on a company’s behalf may be
        subject to the same civil and criminal penalties as the Reporting Company and its senior officers.
        </>
    }
    ,
    {
        question: <>
    Can a Beneficial Owner be held liable for refusing to provide required information to a Reporting Company?
        </>,
        answer: <>
        Yes. An enforcement action can be brought against an individual who willfully causes a Reporting Company’s failure to submit
complete or updated Beneficial Ownership information to FinCEN. This would include a Beneficial Owner or Company Applicant who
willfully fails to provide required information to a Reporting Company.
        </>
    }
    ,
    {
        question: "What should a Reporting Company do if a Beneficial Owner or Company Applicant withholds information?",
        answer: <>
        Reporting Companies are responsible for ensuring that they submit complete and accurate Beneficial Ownership Information to
FinCEN. Existing reporting companies should engage with their Beneficial Owners to advise them of this requirement, obtain required
information, and put in place mechanisms to ensure that Beneficial Owners will keep Reporting Companies apprised of changes in
reported information. Should your company require such a protective mechanism, RKL Law would be glad to assist. Feel free to
contact us for more guidance on this matter.
        </>
    }
    ,
    {
        question:<>
        Is a Reporting Company responsible for ensuring the accuracy of the information that it reports to FinCEN, <br  className='xs:hidden'/> even if the
        Reporting Company obtains that information from another party?
        </>,
        answer: <>
        Yes. It is the responsibility of the Reporting Company to identify its Beneficial Owners and Company Applicants, and to report those
individuals to FinCEN. At the time the filing is made, each Reporting Company is required to certify that its report is true, correct, and
complete. Accordingly, FinCEN expects that Reporting Companies will take care to verify the information they receive from their
Beneficial Owners and Company Applicants before reporting it
        </>
    }
    ,
    {
        question: "How can I protect my company from uncooperative Beneficial Owners?",
        answer: <>
        As laws change, companies must also adapt to stay compliant. There are several measures a company may take to make sure
Beneficial Owners will be forthcoming with their private personal information on an ongoing basis in the future. However, what those
measures are depends on the nature and structure of your company. Please consult your attorney to ascertain what the best solution
for your company is. The lawyers at RKL Law are also at the ready with solutions that will allow companies to enforce their rights
against and be protected from potentially recalcitrant or uncooperative Beneficial Owners. Feel free to contact us for more guidance on
this matter.
        </>
    }
    ,
    {
        question: "Under the Corporate Transparency Act, who can access Beneficial Ownership Information?",
        answer: <>
        FinCEN permits Federal, State, local, and Tribal officials , as well as certain foreign officials who submit a request through a U.S.
Federal government agency, to obtain Beneficial Ownership Information for authorized activities related to national security, intelligence,
and law enforcement. Financial institutions will also have access to Beneficial Ownership Information in certain circumstances, with the
consent of the Reporting Company. Those financial institutions’ regulators will also have access to Beneficial Ownership Information
when they supervise the financial institutions. <br  className='xs:hidden'/>
FinCEN is developing the rules that will govern access to and handling of Beneficial Ownership Information. Beneficial Ownership
Information reported to FinCEN will be stored in a secure, non-public database using rigorous information security methods and
controls typically used in the Federal government to protect nonclassified yet sensitive information systems at the highest security
level. FinCEN will work closely with those authorized to access Beneficial Ownership Information to ensure that they understand their
roles and responsibilities to ensure that the reported information is used only for authorized purposes and handled in a way that
protects its security and confidentiality.
        </>
    },
    {
        question: "How does the CTA impact privacy and data security?",
        answer: <>
      While the CTA’s goal is to increase transparency in business ownership, it may raise concerns about the privacy and security of
Reporting Companies and their Beneficial Owners’ personal information. The law includes provisions to safeguard reported information
and limit its disclosure to authorized entities.
        </>
    },
    {
        question: "How will RKL Law protect my data?",
        answer: <>
       RKL Law is committed to safeguarding your personal information with the highest level of security. Our technology stack is hosted on a
secure, industry-leading cloud platform that provides advanced security features and meets stringent compliance standards. We use
sophisticated encryption protocols, including end-to-end encryption for all email communications and data storage, ensuring that your
information is protected at every stage. <br  className='xs:hidden'/>
In addition, our applications are shielded by a Web Application Firewall (WAF) to protect against Distributed Denial of Service (DDoS)
attacks and hacking attempts. These comprehensive security measures, combined with continuous monitoring and regular updates,
ensure that your data remains secure, giving you the confidence that your privacy is our top priority
        </>

}];

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
     {menuOpen && (
        <MenuOpen 
          ref={menuRef}  
          open={menuOpen} 
          close={toggleMenu} 
          isAnimating={isAnimating} 
          tabIndex="-1"  
        />
      )}
      <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="BOIR Compliance"
      />


      <div className="text-[26px] lg:text-[24px] sx:text-[14px] fgt-ff-normal pl-[5.2%] text-[#403C5C] bg-[#F7F6F1] py-4">
        <Link to="/" className="hover:underline">Home</Link> {'>'}
        <span onClick={toggleMenu} style={{ cursor: 'pointer' }}> Practice Area </span> {'>'}
        <Link to="/" className="hover:underline">Boir Compliance</Link> 
        
      </div>

      <div className="bg-white flex flex-row  xs:pt-4 pt-8 w-full  px-[5.2%]  xs:flex xs:flex-col sm:flex sm:flex-col  md:felx md:flex-col sm:p-10">
        {/* Profile Section */}
        <div className=' w-[70%] sm:w-full md:w-full xs:w-full'>
<div className="flex md:flex-col sm:flex-col xs:flex-col xs:gap-3 gap-16 sm:items-start md:items-start xs:items-start items-center">
<div className='text-[50px] xs:text-[35px] sm:text-[40px]  fgt-ff-medium xs:text-start  lg:text-[40px] flex xs:flex-col xs:gap-2 gap-6 xs:items-start items-center text-[#403C5C]'><img src={boir} alt="" className="xs:w-[70px]   sm:w-16  w-20"/>  BOIR Compliance</div>

</div>

<table className='border w-[60%] max-w-[585px] md:w-[50%] sm:w-[60%] xs:mt-1 xs:w-[100%] mt-12'>
  <tr className=''>
    <th className='border text-start ps-3 py-2 sx:text-[16px] bg-[#E5E5E5] text-[17px] fgt-ff-bold text'>Table of Contents </th>
  </tr>
  <tr>
    <td className='border text-[19px] sx:text-[16px] ps-3 inter font-normal py-2'>
    <a href="#what-is-cta">The Corporate Transparency Act - What is it?</a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] sx:text-[16px] ps-3 inter font-normal py-2'>
    <a href="#who-needs-to-file">Reporting Company - Who needs to file?</a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px]  sx:text-[16px] ps-3 inter font-normal py-2'>
      <a href="#who-needs-to-filed">
      Reporting Company - Who needs to file?
        </a></td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter sx:text-[16px] font-normal py-2'>
      <a href="#deadline">

      Deadlines
      </a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal sx:text-[16px] py-2'>
    <a href="#penalties">Penalties for non-compliance with the CTA</a>      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter font-normal sx:text-[16px] py-2'>
    <a href="#get-compliant">Get compliant with RKL Law</a>
      </td>
  </tr>
  <tr>
    <td className='border text-[19px] ps-3 inter sx:text-[16px] font-normal py-2'>
    <a href="#faqs">Frequently Asked Questions</a>
      </td>
  </tr>
</table>
          
<section id="what-is-cta">
  <h2  className='text-[24px] sx:text-[18px] fgt-ff-bold text-[#212121] py-8'>What is the Corporate Transparency Act (CTA)?</h2>
  <p className='text-[20px] fgt-ff-light sx:text-[16px] text-[#212121]'>
Beginning on January 1, 2024, many companies in the United States will have to report information about their beneficial owners, i.e., the individuals who ultimately own or control the company. They will have to report the information to the Financial Crimes Enforcement Network (FinCEN). FinCEN is a bureau of the U.S. Department of the Treasury.  It is crucial to note that this reporting requirement will not be satisfied merely by filing your tax returns to the IRS.  It is an entirely separate reporting requirement submitted to a different bureau of the Treasury Department than the IRS, namely FinCEN.
The CTA will eliminate corporate anonymity in the U.S. by requiring non-exempt reporting companies to file a Beneficial Ownership Information (BOI) Report with FinCEN as part of the U.S. government’s efforts to make it harder for bad actors to hide or benefit from their ill-gotten gains through shell companies or other opaque ownership structures.

</p>

<p className='w-full text-center flex flex-col gap-4 items-center justify-center py-6'>
  <img src="https://rkl-public-assets.s3.us-west-1.amazonaws.com/boirimg1.f80a75bf6ad5b079761d419a5632ed69.svg" alt=""  className='xs:w-[100%]'/>
 
</p>
</section>


<section id="who-needs-to-file">
  <h2  className='text-[24px] sx:text-[18px] fgt-ff-bold text-[#212121] py-8'>Reporting Company - Who needs to file?</h2>
  <p className='text-[20px] sx:text-[16px] fgt-ff-light text-[#212121]'>

Companies required to report are called Reporting Companies. More specifically, Reporting Companies are non-exempt corporations, limited liability companies, or other entities that are (i) created by the filing of a document with a secretary of state or any similar office under the law of the State or Indian Tribe or (ii) formed under the law of a foreign country and registered to do business in any State or tribal jurisdiction by the filing of a document with a secretary of state or any similar office under the laws of a State or Indian Tribe. Oftentimes, Reporting Companies do not have the required information for filing and may have to obtain information from their BOs to report that information to FinCEN.
Tens of millions of businesses and holding companies in the US will be impacted by this new reporting requirement – including most run-of-the-mill businesses and mom-and-pop operations, as this legislation was aimed specifically at small and medium-sized businesses.  It will impact all kinds of companies from restaurants to dry cleaning businesses, from law and accountancy firms to doctors’ offices, from on-line service-providers to LLCs doing no “business” at all besides serving as a real estate holding company.  And then, all kinds of businesses imaginable, in between, even those entities that are losing money or in bankruptcy. <br />
<br />

Business owners and senior officers are responsible for accurate and timely reporting. Responsibility rests with each senior officer of the Reporting Company, and any person who provides information (or fails to provide accurate information) required to make the BOI report true.</p>


<h2 id="who-needs-to-filed" className='text-[24px] sx:text-[18px] fgt-ff-bold text-[#212121] py-8'>BOIR Compliance - What needs to be filed?</h2>
<p className='text-[20px] fgt-ff-light text-[#212121] sx:text-[16px]'>
Beneficial Ownership information refers to identifying information about the individuals who directly or indirectly own or control a company.  Every Reporting Company that is not exempt must file a BOI Report that discloses five specific items of Personal Identifiable Information (PII) for each of its Beneficial Owners (BO), including a copy of a valid, government-issued ID (such a driver’s license or passport) verifying the BO’s identity.  Entities formed (or registered to do business) on or after January 1, 2024, must also identify and provide the same five items of PII for the entity’s Company Applicant. An individual is a Company Applicant if the individual directly files the document that creates (or registers) the Reporting Company and/or if the individual is primarily responsible for directing or controlling such filing if more than one individual is involved in the filing. Each Reporting Company will have to be analyzed on a case-by-case basis to determine who the Company Applicant(s) is/are for accurate reporting.</p>
</section>

<section id="deadline">
  <h3  className=' text-[26px] text-[#212121] pt-4 sx:text-[18px] fgt-ff-bold'>Deadlines</h3>
  <p className="underline-offset-8 underline  text-[20px] fgt-ff-light sx:text-[16px]">FinCEN began accepting reports on January 1, 2024. The following deadlines apply:</p>
  <p className='text-[20px] fgt-ff-light sx:text-[16px]'>• If your company was created or registered prior to January 1, 2024, you will have until January 1, 2025 to report BOI. <br />
• If your company is created or registered in 2024, you must report BOI within 90 calendar days after receiving actual or public notice that your company’s creation or registration is effective, whichever is earlier.<br />
• If your company is created or registered on or after January 1, 2025, you must file BOI within 30 calendar days after receiving actual or public notice that its creation or registration is effective. <br />
• Any updates or corrections to beneficial ownership information that you previously filed with FinCEN must be submitted within 30 days.</p>
<section id="penalties">

<h2  className='text-[24px] fgt-ff-bold sx:text-[18px] text-[#212121] py-8'>What are the penalties for non-compliance with the CTA?</h2>
<p className='text-[20px] fgt-ff-light text-[#212121] sx:text-[16px]'>Civil and criminal penalties, including fines and imprisonment. Civil penalties up to $500 per day (adjusted for inflation) may be assessed against the Reporting Company and its Beneficial Owners.  Beneficial owners may also be subject to criminal penalties of up to two-year imprisonment and a fine of up to $10,000 for willful non-compliance or deception.</p>
</section>
<section id="get-compliant">

<h2  className='text-[24px] fgt-ff-bold sx:text-[18px] text-[#212121] py-8'>Get Compliant with RKL Law</h2>
<p className='text-[20px] fgt-ff-light text-[#212121] sx:text-[16px]'>We know.  It’s a lot to consider, process, and understand.  The good news is that RKL Law is here to help.  We have streamlined the intake process so that we may accurately and efficiently file the BOIR on your behalf.  Although the reporting requirements are straightforward, there are legal definitions, facts, and factors that must be understood and carefully analyzed to make the appropriate identifications and report correctly.  As this is a legal inquiry requiring understanding and application of the law, in most cases one would be best served to hire a lawyer, not a law-adjacent on-line service provider to perform BOI reporting.</p>
<br />

<p className='text-[20px] fgt-ff-light sx:text-[16px] text-[#212121]'>Our BOI Report service will include a comprehensive intake, review and analysis of corporate documents (as necessary) to determine exemption status, identification of Beneficial Owner(s) and Company Applicant(s), providing links for the secure/encrypted uploading of federally-mandated identifying documents, and as many one-on-one Zoom calls and communications with a single attorney dedicated to the file as we deem necessary to prepare the report for filing.  We will hold your hand through the entire process and submit the report for you. And, unlike other law firms, we have implemented a fixed fee structure, so there won’t be an open-ended, hourly-based surprise bill at the end of our services. </p>

</section>
<h2 className='text-[24px] fgt-ff-bold text-[#212121] sx:text-[18px] py-8'>Our fee structure is as follows:
</h2>


<div className='  rounded-xl '>
  <table className='w-full '>
    <tr className=" border-black">
      <th className='text-[24px] py-2 w-[50%] sx:text-[18px] fgt-ff-bold bg-[#E5E5E5] text-start ps-3 border-2 border-black'>
        Type of Owners
      </th>
      <th className='text-[24px] py-2 w-[50%] sx:text-[18px] fgt-ff-bold bg-[#E5E5E5] text-start ps-3 border-2 border-black'>
        Fee
      </th>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 py-2 sx:text-[16px] text-[19px] font-normal inter'>
        Single individual-owned  Company
      </td>
      <td className='border-2 border-black ps-3 sx:text-[16px] py-2'>$349</td>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 sx:text-[16px] py-2 text-[19px] font-normal inter'>
        Multiple individual-owned <br /> Company
      </td>
      <td className='border-2 border-black ps-3 sx:text-[16px]  py-2'>$499</td>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 sx:text-[16px] py-2 text-[19px] font-normal inter'>
        Single entity-owned  Company <br />
        (with unlimited individual owners)
      </td>
      <td className='border-2 border-black ps-3 sx:text-[16px] py-2'>$849</td>
    </tr>
    <tr>
      <td className='border-2 border-black ps-3 sx:text-[16px] py-2 text-[19px] font-normal inter'>
        Multiple entity-owned  Company <br />
        (with unlimited individual owners)
      </td>
      <td className='border-2 border-black ps-3 sx:text-[16px] py-2'>$1349</td>
    </tr>
  </table>
</div>




</section>
<div className='flex justify-center'>

<Link to="/contactus" className='w-1/3 xs:w-full my-4 flex justify-center'>
<button className='text-[20px] w-full fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-full lg:text-[15px] xl:text-[15px] md:text-[15px] xs:text-[13px]'>START YOUR COMPLIANCE NOW</button>
          </Link>
</div>
<section className="bg-white" id="faqs">
            <h2  className="text-[53px] lg:text-[44px] xs:text-[35px] xs:pt-6  text-[#162325] lexend-normal text-center">Frequently Asked Questions</h2>
            <div className="mt-8 w-full sm:px-8 mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="my-6">
          <button
            className="w-full text-left rounded-md bg-[#F8F8F8] sx:text-[15px] text-[16px] px-4 py-4 focus:outline-none xs:flex-col flex justify-between items-center"
             onClick={(e) => toggleFAQ(index, e)}
          >
            {faq.question}
            {openIndexes.includes(index) ? (
              <FaMinus className="text-[#000000] xs:w-3 w-6 h-6"  />
            ) : (
              <FaPlus className="text-[#050505]  xs:w-3 w-6 h-6" />
            )}
          </button>
          {openIndexes.includes(index) && (
            <p className="p-4 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
            <div className='flex justify-center'>

<Link to="/contactus" className='w-1/3 xs:w-full my-4 flex justify-center'>
<button className='text-[20px] w-full fgt-ff-normal bg-[#403C5C] text-white px-5 py-3 rounded-full lg:text-[15px] xl:text-[15px] md:text-[15px] xs:text-[13px]'>START YOUR COMPLIANCE NOW</button>
          </Link>
</div>
        </section>
       
        </div>

        {/* Sidebar */}
        <div className="flex xs:w-full xs:pb-6 sm:pb-6 md:pb-6 md:w-full sm:w-full w-[30%] justify-end xs:px-4 sm:px-4 md:px-4 md:justify-center xs:justify-center xs:mr-0 md:mr-0 xs:mt-0 mt-6 pr-0">
        <div className="mt-6 sm:w-full xs:w-full md:mt-0 w-4/5">
        <div  className='mb-4  flex w-full'>
         

</div>
            {/* <div className="bg-[#FFEDD7]  p-4 rounded-md pl-8 xs:pl-4  ">
              <p className='flex justify-center xs:pt-0 pt-6'><img src={icon2} alt="" /></p>
              <h3 className="text-[35px] fgt-ff-normal text-center sx:text-[28px]  text-[#02131D] xs:pt-2 pt-9 mb-4"> Latest Posts</h3>
              <div className="text-[#212121]">
                <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                 <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
               
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
            
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
                </p>
           
                <hr />
                <p className=' flex gap-4 items-start flex-col py-5 text-[20px] sx:text-[16px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br  className='xs:hidden'/> Celebrating 50 Years
                <p className=' flex  text-[18px] fgt-ff-medium text-[#02131D] sx:text-[16px] items-center gap-3 pb-5'>Read More <FaArrowRightLong /> </p>
                </p>
          
              
             
              </div>
            </div> */}

            {/* Testimonials Slider */}
          
          </div>
        </div>

    
      </div>
      <Footer />
    </>
  );
}

export default Boir;
