import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateCrewmate from './pages/CreateCrewmate';
import CrewmateGallery from './pages/CrewmateGallery';
import CrewmateDetails from './pages/CrewmateDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateCrewmate />} />
                <Route path="/gallery" element={<CrewmateGallery />} />
                <Route path="/crewmate/:id" element={<CrewmateDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
