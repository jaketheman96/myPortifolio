import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import '../style/Navbar.style.css';

function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="home" smooth="true">
            <img
              src={ logo }
              alt="Jake's Logo"
              style={ { width: '150px' } }
            />
          </Link>
        </li>
        <li><Link to="home" smooth="true">Home</Link></li>
        <li><Link to="projects" smooth="true">Projects</Link></li>
        <li><Link to="skills" smooth="true">Skills</Link></li>
        <li><Link to="contact" smooth="true">Contact</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
