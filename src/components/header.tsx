import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import '../css/header.css';

const transition = { duration: 2, ease: "easeInOut" };

const Header: React.FC = () => (
    <header className="navbar-container">
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="logo">
                        <motion.path
                            fill="none"
                            d="M 48,56 H 80 C 93.25,56 104,45.25 104,32 104,18.75 93.25,8 80,8 66.75,8 56,18.75 56,32 V 80 C 56,93.25 45.25,104 32,104 18.75,104 8,93.25 8,80 8,66.75 18.75,56 32,56"
                            strokeWidth="16"
                            stroke="#98b4d4"
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={transition}
                            transform="scale(.42)"
                        />
                    </motion.svg>
                </Link>
            </div>
            <nav className="navbar-links">
                <Link to="/resume" className="nav-link">Resume</Link>
                <Link to="/ideas" className="nav-link">Ideas</Link>
            </nav>
        </div>
    </header>
);

export default Header;