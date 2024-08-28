import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile1 from './Pages/Profiles/Profile';
import Profile2 from './Pages/Profiles/Profile2';
import Profile3 from './Pages/Profiles/Profile3';
import ImmigrationLaw from './Routes/ImmigrationLaw/ImmigrationLaw';
import Founderscreen from "./Pages/Founders/Founderscreen"
import Bior from "./Components/BIOR/Boir"
import Business from './Components/BussinessLaw/Business';
import NewsAndEvents from './Components/NewsandEvents/NewsEvents';
import Contact from './Pages/Contact/Contact';
// Import the ImmigrationLaw component

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Immigration-Law" element={<ImmigrationLaw />} />
        <Route path="/founders" element={<Founderscreen />} />
        <Route path="/profile/Nazanin Lahijani" element={<Profile3/>} />
        <Route path="/profile/Sohila Rezai" element={<Profile2/>} />
        <Route path="/profile/Ninaz Khorsandi" element={<Profile1/>} />
        <Route path="/boir" element={<Bior/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/news&events" element={<NewsAndEvents/>} />
      </Routes>
      
     
    </Router>
  );
}

export default App;
