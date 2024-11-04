import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CreateCrewmate from './CreateCrewmate';
import CrewmateGallery from './CrewmateGallery';
import CrewmateDetails from './CrewmateDetails';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<CrewmateGallery />} />
          <Route path="/crewmate/:id" element={<CrewmateDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
