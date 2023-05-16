import React from 'react';
import './Navbar.css';
import logo from './FestiFind.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="navbar-link">
                    <a href="#events">Events</a>
                </li>
            </ul>
            <div className="navbar-logo">
                <img src={logo} alt="FestiFind Logo" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-link">
                    <a href="#artists">Artists</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
