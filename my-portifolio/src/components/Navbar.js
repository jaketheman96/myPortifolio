import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import '../style/Navbar.style.css';

function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="home" smooth="true" duration="500">
            <img
              src={ logo }
              alt="Jake's Logo"
              style={ { width: '150px' } }
            />
          </Link>
        </li>
        <li><Link to="home" smooth="true" duration="500">Home</Link></li>
        <li><Link to="projects" smooth="true" duration="500">Projects</Link></li>
        <li><Link to="skills" smooth="true" duration="500">Skills</Link></li>
        <li><Link to="contact" smooth="true" duration="500">Contact</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
