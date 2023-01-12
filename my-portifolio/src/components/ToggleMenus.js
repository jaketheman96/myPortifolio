import React, { useEffect, useState } from 'react';
import Menus from './Menus';
import navbarIcon from '../images/navigation.png';
import removeIcon from '../images/remove.png';

function ToggleMenus() {
  const [toggleMenus, setToggleMenus] = useState(false);

  useEffect(() => {
    const defaultToggle = () => setToggleMenus(false);
    defaultToggle();
  }, []);

  const handleClick = () => setToggleMenus(!toggleMenus);

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
      {toggleMenus && (
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
          <Menus
            handleClick={ handleClick }
          />
        </div>
      )}
    </>
  );
}

export default ToggleMenus;
