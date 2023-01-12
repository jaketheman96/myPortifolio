import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

function Menus({ handleClick }) {
  return (
    <ul>
      <li>
        <Link to="home" smooth="true" onClick={ handleClick }>Home</Link>
      </li>
      <li>
        <Link to="projects" smooth="true" onClick={ handleClick }>Projects</Link>
      </li>
      <li>
        <Link to="skills" smooth="true" onClick={ handleClick }>Skills</Link>
      </li>
      <li>
        <Link to="contact" smooth="true" onClick={ handleClick }>Contact</Link>
      </li>
    </ul>
  );
}

Menus.defaultProps = {
  handleClick: () => {},
};

Menus.propTypes = {
  handleClick: PropTypes.func,
};

export default Menus;
