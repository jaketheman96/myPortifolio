import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';
import '../style/Navbar.style.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="home" smooth="true">
        <img
          src={ logo }
          alt="Jake's Logo"
          style={ { width: '100px' } }
        />
      </Link>
      <div className="navbar-list">
        <Menu />
      </div>
      <div className="toggle-menu">
        <ToggleMenu />
      </div>
    </div>
  );
}

export default Navbar;
