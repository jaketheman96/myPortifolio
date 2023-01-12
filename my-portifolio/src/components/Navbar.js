import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import Menus from './Menus';
import ToggleMenus from './ToggleMenus';
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
        <Menus />
      </div>
      <div className="toggle-menu">
        <ToggleMenus />
      </div>
    </div>
  );
}

export default Navbar;
