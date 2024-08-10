import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import NewsAndEvents from './Components/NewsAndEvents';
import Section1 from './Components/Section1';
import Solution from './Components/Solution';
import Footer from './Components/Footer';
import Secondscreen from './Components/Secondscreen';
// Import the ImmigrationLaw component

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/secondscreen" element={<Secondscreen />} />
      </Routes>
      
     
    </Router>
  );
}

export default App;
