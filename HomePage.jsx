// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Crewmates</h1>
            <p>Create and manage your custom team of characters!</p>
            <nav>
                <Link to="/create">Create a New Crewmate</Link>
                <br />
                <Link to="/gallery">View Crewmate Gallery</Link>
            </nav>
        </div>
    );
};

export default HomePage;
