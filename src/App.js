import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile1 from './Pages/Profiles/Profile';
import Profile2 from './Pages/Profiles/Profile2';
import Profile3 from './Pages/Profiles/Profile3';
import ImmigrationLaw from './Routes/ImmigrationLaw/ImmigrationLaw';
import Founderscreen from './Pages/Founders/Founderscreen';
import Bior from './Components/BIOR/Boir';
import Business from './Components/BussinessLaw/Business';
import NewsAndEvents from './Components/NewsandEvents/NewsEvents';
import Contact from './Pages/Contact/Contact';
import Careers from './Pages/Careers/Careers';
import Signup from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import RequestPasswordReset from './Pages/Otp/Otp';
import Verifyemail from './Pages/EmailVerifypage/Emailverify';
import ResetPassword from './Pages/ResetPassword/ResetPassword';

function App() {
  const location = useLocation();
  const showNavbar = !['/signup','/login','/linkverify','/verify','/forgotPassword'].includes(location.pathname) && !location.pathname.startsWith('/dashboard');

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        
        <Route path="/" element={<Header />} />
        <Route path="/Immigration-Law" element={<ImmigrationLaw />} />
        <Route path="/founders" element={<Founderscreen />} />
        <Route path="/profile/Nazanin Lahijani" element={<Profile3 />} />
        <Route path="/profile/Sohila Rezai" element={<Profile2 />} />
        <Route path="/profile/Ninaz Khorsandi" element={<Profile1 />} />
        <Route path="/boir" element={<Bior />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/linkverify" element={<RequestPasswordReset />} />
        <Route path="/verify" element={<Verifyemail />} />
        <Route path="/forgotPassword" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
