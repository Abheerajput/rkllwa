import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDropzone } from 'react-dropzone';
import SecondHeader from '../../Layout/Header/SecondHeader';
import lkdnicon2 from '../../assets/icons/drpdwicon2.svg';
import fbicon2 from '../../assets/icons/drpdwicon3.svg';
import twittericon2 from '../../assets/icons/drpdwicon4.svg';
import phone1 from "../../assets/icons/phoneicon.svg";
import message2 from "../../assets/icons/messageicon.svg";
import facebook from "../../assets/icons/facebookicon.svg";
import instagram from "../../assets/icons/instagramicon.svg";
import lkdn from "../../assets/icons/linkdinicon.svg";
import Footer from "../../Layout/Footer/Footer";
import { Link } from 'react-router-dom';
import '../../Style/style.css';

const Careers = () => {
    
    const [submitted, setSubmitted] = useState(false);
    const socialIcons2 = [lkdnicon2, fbicon2, twittericon2];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
        },
    });
  
    const handleSubmit = (event) => {
        event.preventDefault();
        

        toast.success('Thank you for your submission!', {
            autoClose: 3000,
        });
    
       
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setPosition('');
        setMessage('');
        setFile(null);
    };


    return (
        <>
        <div>
            <SecondHeader
                socialIcons2={socialIcons2}
                mainTitle="Careers"
            />
            <div className="text-[26px] sx:text-[14px] fgt-ff-normal pl-[5.2%] text-[#403C5C]  bg-[#F7F6F1] py-4">
                <Link to="/" className="hover:underline">Home</Link> {'>'}
                <Link to="/contactus" className="hover:underline">Careers</Link>
            </div>
            <div className='px-[5.2%] mt-20 mb-12 flex md:flex-col sm:flex-col xs:flex-col'>
                <div className="p-12 xs:p-4 xs:py-8 xs:w-full rounded-lg w-[45%] sm:w-full md:w-full bg-[#F7F6F1]">
                    <div className='flex gap-4 items-center'>
                        <h3 className='text-[40px] flex justify-center w-full sm:text-[38px] xs:text-[25px] fgt-ff-medium text-[#403C5C]'>Your Information</h3>
                    </div>
                  
                    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                        <div className='flex w-full gap-7'>
                            <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                                First Name
                                
                                <input type="text" placeholder="Name" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                            </label>
                            <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                                Last Name
                                <input type="text" 
                                 placeholder="Last Name" className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='flex w-full gap-7'>
                            <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                                Phone
                                <input type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="(000) 0000-0000" className="mt-1 p-2 w-full border rounded-md border-[#919191] focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />
                            </label>
                            <label className="block text-[14px] xs:text-[12px] lexend-medium w-1/2 text-[#21272A]">
                                Email
                                <input type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />
                            </label>
                        </div>
                        <label className="block text-[14px] xs:text-[12px] lexend-medium text-[#21272A]">
                            Position
                            <input type="text"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                            placeholder="Position" className="mt-1 p-2 w-full border border-[#919191] rounded-md focus:outline-none bg-transparent text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500" />
                        </label>
                        <div className="sm:col-span-2 mt-6 h-full">
                            <label className="block text-[14px] lexend-medium xs:text-[12px] text-[#21272A]">
                                Briefly tell us a little about yourself why are you interested in the role that you are applying for and why you want you want to apply to us.
                            </label>
                            <textarea name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            placeholder='type here....' className='bg-transparent max-h-[286px] border-[#919191] h-screen border w-full mt-1 p-2 rounded-md focus:outline-none text-[16px] fgt-ff-light focus:ring-2 focus:ring-orange-500'></textarea>
                        </div>
                        <div className="sm:col-span-2 mt-4">
                        <label className="block text-[14px] lexend-medium xs:text-[12px] text-[#21272A]">
                                    Resume and/or Cover Letter
                                </label>
                                <div
                                    {...getRootProps()}
                                    className={`mt-1 p-6  border-2 border-[#919191] rounded-md text-center transition-colors ${
                                        isDragActive ? 'border-orange-500 bg-[#FFF6E5]' : 'border-[#919191] bg-transparent'
                                    }`}
                                >
                                    <input {...getInputProps()} />
                                    {file ? (
                                        <p className="text-[16px] fgt-ff-light">
                                            {file.name}
                                        </p>
                                    ) : (
                                        <p className="text-[16px] fgt-ff-light">
                                            Drag & drop or Upload your file here
                                        </p>
                                    )}
                        </div>
                        </div>
                        <div className="w-1/4 mt-4">
                            <button type="submit" className="bg-[#E0AF04] text-white p-2 rounded-md w-full xs:text-[12px] transition-colors">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                    <div className='w-[55%] sm:mb-8 xs:mb-8 md:mb-8 md:justify-start sm:w-full xs:w-full sm:justify-start xs:justify-start xs:mt-12 sm:mt-12 md:mt-12 flex justify-center'>
                        <div>
                            <h1 className='text-[40px] text-[#403C5C] sm:text-[38px]  xs:text-[25px]   fgt-ff-medium'>Call us</h1>
                            <p className='text-[18px] xs:text-[15px] fgt-ff-normal text-[#212121]'>Call our team Mon-Fri from 9am to 5pm.</p>
                            <span className='flex items-center gap-4 my-4 text-[27px] fgt-ff-medium text-[#212121] '> <img src={phone1} alt="" className='xs:w-[1.2rem] sm:w-[1.6rem] w-6' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>818-990-9999</h3> </span>
                            <div className='mt-12'>
                                <h3 className='text-[40px] sm:text-[38px] text-[#403C5C]  xs:text-[25px]  fgt-ff-medium'>Chat with us</h3>
                                <p className='text-[18px] sm:text-[17px] xs:text-[15px] fgt-ff-normal text-[#212121] py-4'>Connect with our friendly team!</p>

                                <span className='flex items-center gap-4 my-4   fgt-ff-medium text-[#212121] '> <img src={message2} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem] w-6' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] text-[22px] xs:text-[15px]'>      <a href="mailto:info@rkllaw.com?subject={subject}">Email Us</a>  </h3> </span>
                                <a href="https://www.facebook.com/profile.php?id=61564380045589" target="_blank" rel="noopener noreferrer">
                                    <span className='flex items-center gap-4 my-4 text-[22px] fgt-ff-medium text-[#212121] '> <img src={facebook} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem] w-6' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on facebook</h3> </span>
                                </a>
                                <a href="https://www.instagram.com/rkl_law?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                                    <span className='flex items-center gap-4 my-4 text-[22px] fgt-ff-medium text-[#212121] '> <img src={instagram} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem] w-6' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on Instagram</h3> </span>
                                </a>
                                <a href="http://www.linkedin.com/in/rkl-law-9aa681324" target="_blank" rel="noopener noreferrer" >
                                    <span className='flex items-center gap-4 my-4 text-[22px] fgt-ff-medium text-[#212121] '> <img src={lkdn} alt="" className='xs:w-[1.2rem] sm:w-[1.4rem] w-6' /> <h3 className='border-0 border-b-2 border-[#212121] sm:text-[20px] xs:text-[15px]'>Connect on Linkedin</h3> </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
            <ToastContainer  position='top-center'/>
        </>
    )
}

export default Careers
