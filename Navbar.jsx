import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Crewmates</h1>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Character</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
        </nav>
    );
};

export default Navbar;
