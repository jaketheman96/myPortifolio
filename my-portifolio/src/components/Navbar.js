import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../style/Navbar.style.css';

function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">
            <img
              src={ logo }
              alt="Jake's Logo"
              style={ { width: '150px' } }
            />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/tecnologies">Tecnologias</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
