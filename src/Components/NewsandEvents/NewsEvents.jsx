import React from 'react'
import { Link } from "react-router-dom"
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import SecondHeader from '../../Layout/Header/SecondHeader';
import "slick-carousel/slick/slick.css";
import icon2 from '../../assets/icons/Posts.svg';
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsEvents = () => {
  const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
  return (
    <>
      <SecondHeader
        socialIcons2={socialIcons2}
        mainTitle="News And Events"
      />
      <div className="text-[26px] sx:text-[14px] fgt-ff-normal text-[#403C5C] px-[5.2%] bg-[#F7F6F1] py-4">
        <Link to="/" className="hover:underline">Home</Link> {'>'}
        <Link to="/" className="hover:underline">Practice Areas</Link> {'>'}
        <Link to="/founders" className="hover:underline">News And Events</Link>
      </div>
      <div className="bg-white w-full pb-12 xs:pb-2 xs:pt-4 pt-8  px-[5.2%]  flex xs:flex-col sm:flex sm:flex-col   sm:p-10">
        {/* Profile Section */}
        <div className=' w-[65%] sm:w-full xs:w-full'>
          <div className="flex md:text-start sm:text-start  xs:flex-col gap-16 xs:items-start items-center">
            {/* <div className='text-[50px] xs:text-[35px] sm:text-[40px]  fgt-ff-medium xs:text-start  flex xs:flex-col xs:gap-2 gap-6 xs:items-start items-center text-[#403C5C]'><img src={boir} alt="" className="xs:w-[70px]"/> We got the law, you get to business.</div> */}
          </div>
          <div>
            <h3 className='py-4 text-[25px] fgt-ff-medium'>FinCEN Issues Notice to Financial Institution Customers on Beneficial Ownership Information Requirements</h3>
            <p className='text-[20px] fgt-ff-light pt-4 xs:pt-2 sx:text-[16px] '>Today, the Financial Crimes Enforcement Network (FinCEN) issued a notice to customers of financial institutions about reporting beneficial ownership information. More </p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The Corporate Transparency Act requires certain entities, including many small businesses, to report to FinCEN information about the individuals who ultimately own or control them. A separate regulatory requirement currently requires many financial institutions to also collect beneficial ownership information from certain customers that seek to open accounts as part of Federal customer due diligence requirements. Today’s notice provides answers to key questions about: (1) reporting beneficial ownership information to FinCEN under the Corporate Transparency Act (https://www.fincen.gov/boi); and (2) providing beneficial ownership information to financial institutions in connection with Federal customer due diligence requirements. FinCEN encourages financial institutions to share this reference guide with customers that may be required to report beneficial ownership information.</p>

            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Notice to Customers - Beneficial Ownership Information Reference Guide: <span className='border-b-blue-400 '>https://www.fincen.gov/sites/default/files/shared/BOI-Notice-to-Customers-508FINAL.pdf</span> </p>


            <h3 className='py-4 text-[25px] fgt-ff-medium'>SEC, FinCEN Propose Customer Identification Program Requirements for Registered Investment Advisers and Exempt Reporting Advisers</h3>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>WASHINGTON—Today, the Securities and Exchange Commission (SEC) and the U.S. Department of the Treasury’s Financial Crimes Enforcement Network (FinCEN) jointly proposed a new rule that would require SEC-registered More  investment advisers (RIAs) and exempt reporting advisers (ERAs) to establish, document, and maintain written customer identification programs (CIPs). The proposal is designed to prevent illicit finance activity involving the customers of investment advisers by strengthening the anti-money laundering and countering the financing of terrorism (AML/CFT) framework for the investment adviser sector.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Under this proposal, RIAs and ERAs would be required to implement reasonable procedures to identify and verify the identity of their customers, among other requirements, in order to form a reasonable belief that RIAs and ERAs know the true identity of their customers. The proposed rule would make it more difficult for criminal, corrupt, or illicit actors to establish customer relationships—including by using false identities—with investment advisers for the purposes of laundering money, financing terrorism, or engaging in other illicit finance activity.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>This proposed rulemaking complements a separate FinCEN proposal in February 2024 to designate RIAs and ERAs as “financial institutions” under the Bank Secrecy Act (BSA) and subject them to AML/CFT program requirements and suspicious activity report (SAR) filing obligations, among other requirements. That proposal cites a Treasury risk assessment that identified that the investment adviser industry has served as an entry point into the U.S. market for illicit proceeds associated with foreign corruption, fraud, tax evasion, and other criminal activities. Together, these proposals aim to prevent illicit finance activity in the investment adviser sector and further safeguard the U.S. financial system.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>“The proposed rule is designed to make it more difficult to use false identities to establish customer relationships with investment advisers,” said SEC Chair Gary Gensler. “I support this proposal because it could reduce the risk of terrorists and other criminals accessing U.S. financial markets to launder money, finance terrorism, or move funds for other illicit purposes.”</p>


            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>“Criminal, corrupt, and illicit actors have exploited the investment adviser sector to access the U.S. financial system and launder funds,” said FinCEN Director Andrea Gacki. “This proposal would help investment advisers better identify and prevent illicit actors from misusing their services, while advancing a harmonized set of CIP obligations.”</p>

            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The rule, if adopted, would require RIAs and ERAs to, among other things, implement a CIP that includes procedures for verifying the identity of each customer to the extent reasonable and practicable and maintaining records of the information used to verify a customer’s identity, among other requirements. The proposal is generally consistent with the CIP requirements for other financial institutions, such as brokers or dealers in securities and mutual funds.</p>

            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]' >The proposal will be published on SEC.gov and in the Federal Register. The public comment period will remain open for 60 days after publication of the proposing release in the Federal Register.

            </p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Reference this information is on the following site: https://www.fincen.gov/news/news-releases/sec-fincen-propose-customer-identification-program-requirements-registered</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>
              A Fact Sheet on the Notice of Proposed Rulemaking is available on the SEC’s website.</p>


            <h3 className='py-4 text-[25px] fgt-ff-medium'>FinCEN Renews Real Estate Geographic Targeting Orders</h3>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>WASHINGTON—The Financial Crimes Enforcement Network (FinCEN) today announced the renewal of its Geographic Targeting Orders (GTOs) that require U.S. title insurance companies to identify the natural persons behind shell companies used in non-financed purchases of residential real estate. More </p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The terms of the GTOs are effective beginning April 19, 2024, and ending on October 15, 2024. The GTOs continue to provide valuable data on the purchase of residential real estate by persons possibly involved in various illicit enterprises. Renewing the GTOs will further assist in tracking illicit funds and other criminal or illicit activity, as well as continuing to inform FinCEN’s regulatory efforts in this sector. FinCEN renewed the GTOs that cover certain counties and major U.S. metropolitan areas in California, Colorado, Connecticut, Florida, Hawaii, Illinois, Maryland, Massachusetts, Nevada, New York, Texas, Washington, Virgina, and the District of Columbia.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The purchase amount threshold remains $300,000 for each covered metropolitan area, with the exception of the City and County of Baltimore, where the purchase threshold is $50,000.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>FinCEN appreciates the continued assistance and cooperation of title insurance companies and the American Land Title Association in protecting real estate markets from abuse by illicit actors.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>In February 2024, FinCEN issued a notice of proposed rulemaking for an anti-money laundering regulation in the residential real estate sector. The comment period for the proposed rule closed on April 16, 2024 and FinCEN is renewing the GTOs while it reviews and considers all of the comments submitted.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Any questions about the Orders should be directed to FinCEN’s Regulatory Support Section at FRC@FinCEN.gov.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>A copy of the GTO is available here.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Frequently asked questions regarding these GTOs are available here.</p>



            <h3 className='py-4 text-[25px] fgt-ff-medium'>Alert:  Notice Regarding National Small Business United v. Yellen, No. 5:22-cv-01448 (N.D. Ala.)</h3>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>On March 1, 2024, in the case of National Small Business United v. Yellen, No. 5:22-cv-01448 (N.D. Ala.), a federal district court in the Northern District of Alabama, Northeastern Division, entered a final declaratory judgment, concluding that the Corporate Transparency Act exceeds the Constitution’s limits on Congress’s power and enjoining the Department of the Treasury and FinCEN from enforcing the Corporate Transparency Act against the plaintiffs. The Justice Department, on behalf of the Department of the Treasury, filed a Notice of Appeal on March 11, 2024. While this litigation is ongoing, FinCEN will continue to implement the Corporate Transparency Act as required by Congress, while complying with the court’s order. Other than the particular individuals and entities subject to the court’s injunction, as specified below, reporting companies are still required to comply with the law and file beneficial ownership reports as provided in FinCEN’s regulations.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>FinCEN is complying with the court’s order and will continue to comply with the court’s order for as long as it remains in effect. As a result, the government is not currently enforcing the Corporate Transparency Act against the plaintiffs in that action: Isaac Winkles, reporting companies for which Isaac Winkles is the beneficial owner or applicant, the National Small Business Association, and members of the National Small Business Association (as of March 1, 2024). Those individuals and entities are not required to report beneficial ownership information to FinCEN at this time.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Update [March 11, 2024]: This notice was updated on March 11, 2024, to reflect that a Notice of Appeal has been filed regarding this case.</p>
            <h3 className='py-4 text-[25px] fgt-ff-medium' >Fact Sheet: Anti-Money Laundering Program and Suspicious Activity Report Filing Requirements for Registered Investment Advisers and Exempt Reporting Advisers Notice of Proposed Rulemaking (NPRM)</h3>

            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The U.S. investment adviser industry provides an important service to investors in the United States and across the world in driving investment opportunities and supporting innovation, growth, and prosperity in the United States. But investment advisers, in their role as More  gatekeepers to the U.S. financial system, are at risk of abuse by money launderers, corrupt officials, and other bad actors. Thousands of investment advisers overseeing the investment of tens of trillions of dollars into the U.S. economy are generally not subject to comprehensive anti-money laundering and countering the financing of terrorism (AML/CFT) measures.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The proposed rule would require certain investment advisers to apply AML/CFT requirements pursuant to the Bank Secrecy Act (BSA), including implementing risk-based AML/CFT programs, reporting suspicious activity to FinCEN, and fulfilling recordkeeping requirements.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Building on the 2021 U.S. Strategy on Countering Corruption, Treasury conducted a risk assessment of the investment advisers sector that identified several illicit finance and national security risks. The risk assessment found several cases in which sanctioned individuals, corrupt officials, tax evaders, and other criminal actors have used investment advisers as an entry point to invest in U.S. securities, real estate, and other assets. Treasury’s risk assessment also identified cases of foreign adversaries, including China and Russia, investing in early-stage companies through investment advisers to access sensitive information and emerging technology.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>While certain investment advisers may be subject to AML/CFT requirements, or perform some AML/CFT requirements voluntarily or via contract, Treasury’s risk assessment found that the lack of comprehensive AML/CFT requirements across the sector contributed to its vulnerability to illicit finance activity. Further, Treasury has found that the investment adviser sector has nearly doubled in assets under management (AUM) since Treasury’s issuance of a prior NPRM in 2015 proposing to apply AML/CFT measures to certain investment advisers. The size and rapid growth of this sector underscore the importance of recalibrating the regulatory environment.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>FinCEN has issued an NPRM (hyperlink) detailing a proposed rule that would apply comprehensive AML/CFT measures to certain investment advisers. The NPRM will give the public the opportunity to review and comment on the proposed rule. FinCEN is also withdrawing the 2015 NPRM. <br />Investment Advisers</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Investment advisers are entities that provide advice to investors about securities for compensation as part of a regular business. Investment advisers provide their expertise to a wide range of clients, including retail investors, high-net-worth individuals, private institutions, and governmental entities (including local, state, and foreign government funds). Advisers typically provide ongoing advice about buying, selling and/or holding investments and will monitor the performance of clients’ investments and their alignment with clients’ overall investment objectives. Many clients grant the adviser the power to manage assets on a discretionary basis, meaning the adviser has the authority to decide which securities to purchase and sell for the client.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Investment Advisers Covered by the Proposed Rule</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The proposed rule would include certain investment advisers in the definition of “financial institution” under the BSA:
              <ul>
                <li className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>●	investment advisers registered with the Securities and Exchange Commission (SEC), also known as registered investment advisers (RIAs), and <br />
                  ●	investment advisers that report to the SEC as exempt reporting advisers (ERAs).
                </li>
              </ul>
            </p>

            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Investment advisers generally must register with the SEC if they have over $110 million in AUM. ERAs are investment advisers that (1) advise only private funds and have less than $150 million in AUM in the United States or (2) advise only venture capital funds. ERAs are exempt from SEC registration but still must file certain information with the SEC.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Requirements of the Proposed Rule</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The proposed rule would require RIAs and ERAs to:
              <ul>
                <li className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>●	implement an AML/CFT program;</li>
                <li className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>●	file certain reports, such as Suspicious Activity Reports (SARs), with FinCEN;</li>
                <li className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>●	keep records such as those relating to the transmittal of funds (i.e., comply with the Recordkeeping and Travel Rule); and</li>
                
                <li className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>●	fulfill other obligations applicable to financial institutions subject to the BSA and FinCEN’s implementing regulations.</li>
              </ul>
            </p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'> The proposed rule would also apply information-sharing provisions between and among FinCEN, law enforcement government agencies, and certain financial institutions to investment advisers, along with subjecting investment advisers to the “special measures” imposed by FinCEN pursuant to Section 311 of the USA PATRIOT Act.</p>
            <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>At this time, FinCEN is not proposing a customer identification program requirement for investment advisers. FinCEN anticipates addressing customer identification program requirements for investment advisers in a future joint rulemaking with the SEC. FinCEN is also not proposing an obligation for investment advisers to collect beneficial ownership information for legal entity customers. FinCEN anticipates addressing this requirement for investment advisers in a subsequent rulemaking.</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>FinCEN has tailored the requirements of the proposed rule to minimize potential business burden as much as possible while still pursuing transparency initiatives to safeguard our financial system and protect American innovation. FinCEN has been careful not to pile on additional or redundant requirements for investment advisers. Because investment advisers provide services to open-end investment companies such as mutual funds, which are already defined as “financial institutions” under the BSA, and because of the regulatory and practical relationship between mutual funds and their investment advisers, the proposed rule would not require investment advisers to apply AML/CFT program or SAR filing requirements to mutual funds they advise.</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Finally, FinCEN is proposing to delegate its examination authority to the SEC, the federal functional regulator responsible for the oversight and regulation of investment advisers. The proposed delegation would be consistent with FinCEN’s existing delegation to the SEC of the authority to examine brokers and dealers in securities and mutual funds for compliance with the BSA and FinCEN’s implementing regulations.</p>
           <p className='py-4 text-[25px] fgt-ff-medium'>Benefits of the Proposed Rule</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The proposed rule would significantly improve efforts to protect the U.S. financial system, provide highly useful information to law enforcement authorities and national security agencies, and safeguard the investment adviser sector against illicit activity. Furthermore, the proposed rule would make it easier for U.S. investment advisers and the U.S. government to identify attempts by foreign adversaries to invest in early-stage companies with ties to important and sensitive technologies with national security implications.</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The proposed rule would also bring the U.S. in line with international counterparts and address a deficiency identified by the Financial Action Task Force (FATF) in its 2016 Mutual Evaluation of the United States.</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The proposed rule is designed to improve outcomes for U.S. investors and to help safeguard investments in the United States. It would improve the detection and reporting of suspicious activity to assist regulators and law enforcement in combating illicit finance, including fraud, in the investment adviser industry. The proposed rule would also help level the regulatory playing field and mitigate illicit finance risks arising from potential regulatory arbitrage by illicit actors who might choose between investment advisers applying varying AML/CFT measures.</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Timing</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Under the proposed rule, covered investment advisers would be required to comply with the rule on or before 12 months from the final rule’s effective date.</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>Next Steps</p>
           <p className='text-[20px] fgt-ff-light pt-4  sx:text-[16px]'>The comment period for the NPRM is open until April 15, 2024.</p>
          </div>




        </div>

        {/* Sidebar */}
        <div className='w-[35%] xs:w-full sm:w-full xs:mt-4 sm:mt-4 h-full lg:flex lg:justify-end flex justify-end'>
          <div className="bg-[#FFEDD7] h-[50%] sm:w-full xs:w-full md:w-[80%] lg:w-[80%] xl:w-[80%] p-4 rounded-md pl-8 xs:pl-4  xs:my-4 ">
            <p className='flex justify-center xs:pt-0 pt-6'><img src={icon2} alt="" /></p>
            <h3 className="text-[35px] fgt-ff-normal text-center sx:text-[28px]  text-[#02131D] xs:pt-2 pt-9 mb-4"> Latest Posts</h3>
            <div className="text-[#212121]">
              <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br className='xs:hidden ' /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
              </p>

              <hr />
              <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br className='xs:hidden' /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
              </p>

              <hr />
              <p className=' flex gap-4 items-start flex-col py-5 sx:text-[16px] text-[20px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br className='xs:hidden' /> Celebrating 50 Years
                <p className=' flex pb-4 text-[18px] fgt-ff-medium sx:text-[16px] text-[#02131D] items-center gap-3'>Read More <FaArrowRightLong /> </p>
              </p>

              <hr />
              <p className=' flex gap-4 items-start flex-col py-5 text-[20px] sx:text-[16px] fgt-ff-light'>RKL Holzapfel Sperry & Ebberson PLLC  <br className='xs:hidden' /> Celebrating 50 Years
                <p className=' flex  text-[18px] fgt-ff-medium text-[#02131D] sx:text-[16px] items-center gap-3 pb-5'>Read More <FaArrowRightLong /> </p>
              </p>



            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default NewsEvents

