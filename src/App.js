import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ProfileCard from './Components/Profile';
import Secondscreen from './Components/Secondscreen';
import Founderscreen from "./Components/Founderscreen"
// Import the ImmigrationLaw component

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/secondscreen" element={<Secondscreen />} />
        <Route path="/founders" element={<Founderscreen />} />
        <Route path="/profile" element={<ProfileCard/>} />
      </Routes>
      
     
    </Router>
  );
}

export default App;
