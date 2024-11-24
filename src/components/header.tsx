import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import logo from '../assets/logo.svg';

const Header: React.FC = () => (
    <header className="navbar">
        <div className="navbar-brand">
            <Link to="/">
                <img
                    alt="Logo"
                    src={logo}
                    width="40"
                    height="40"
                    className="logo"
                />
            </Link>
        </div>
        <nav className="navbar-links">
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/ideas" className="nav-link">Ideas</Link>
        </nav>
    </header>
);

export default Header;