import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile1 from './Pages/Profiles/Profile';
import Profile2 from './Pages/Profiles/Profile2';
import Profile3 from './Pages/Profiles/Profile3';
import Secondscreen from './Routes/Secondscreen/Secondscreen';
import Founderscreen from "./Pages/Founders/Founderscreen"
// Import the ImmigrationLaw component

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/secondscreen" element={<Secondscreen />} />
        <Route path="/founders" element={<Founderscreen />} />
        <Route path="/profile/Ava Johnson" element={<Profile1/>} />
        <Route path="/profile/Taylor Morgan" element={<Profile2/>} />
        <Route path="/profile/Jordan Taylor" element={<Profile3/>} />
      </Routes>
      
     
    </Router>
  );
}

export default App;
