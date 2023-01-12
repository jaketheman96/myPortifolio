import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import navbarIcon from '../images/navigation.png';
import removeIcon from '../images/remove.png';

function ToggleMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const defaultToggle = () => setToggleMenu(false);
    defaultToggle();
  }, []);

  const handleClick = () => setToggleMenu(!toggleMenu);

  return (
    <>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ navbarIcon }
          alt="navigation icon"
          style={ { width: '30px' } }
        />
      </button>
      {toggleMenu && (
        <div className="menu-from-toggle">
          <button
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ removeIcon }
              alt="remove menu icon"
              style={ { width: '15px' } }
            />
          </button>
          <Menu
            handleClick={ handleClick }
          />
        </div>
      )}
    </>
  );
}

export default ToggleMenu;
