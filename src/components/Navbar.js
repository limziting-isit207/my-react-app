import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, username, onLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <nav className="navbar">
            <ul>
                <li><strong>Pet Heaven Society</strong></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>

                {/* Dropdown for Our Pets */}
                <li 
                    className="dropdown" 
                    onMouseEnter={() => setDropdownOpen(true)} 
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <span>Our Pets</span>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/cats">Cats</Link></li>
                            <li><Link to="/dogs">Dogs</Link></li>
                        </ul>
                    )}
                </li>

                <li><Link to="/donate">Donate</Link></li>
                {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
                {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
                {isLoggedIn && (
                    <li>
                        <span>Welcome, {username}!</span>
                        <button onClick={onLogout} className="logout-button">Logout</button>
                    </li>
                )}
                {/* Search Functionality */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
