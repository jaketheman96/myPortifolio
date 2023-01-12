import React, { useEffect, useState } from 'react';
import linkedinIcon from '../images/linkedin.png';
import whatsappIcon from '../images/whatsapp.png';

function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/jake-chien/';
  const whatsappNum = '(41)99983-7067';
  const TWO_SECONDS = 2000;

  const [isCopied, setIsCopied] = useState(false);

  const handleClick = ({ target: { name } }) => {
    const options = {
      linkedin: () => window.open(linkedinUrl),
      whatsapp: () => {
        setIsCopied(true);
        navigator.clipboard.writeText(whatsappNum);
      },
    };
    options[name]();
  };

  useEffect(() => {
    const hideMessage = () => isCopied
      && setTimeout(() => setIsCopied(false), TWO_SECONDS);
    hideMessage();
    return () => clearTimeout(hideMessage);
  }, [isCopied]);

  return (
    <div className="contact">
      <button
        type="button"
        style={ { all: 'unset' } }
        onClick={ handleClick }
      >
        <img
          src={ linkedinIcon }
          alt="linkedin icon"
          style={ { width: '50px' } }
          name="linkedin"
        />
      </button>
      <button
        type="button"
        style={ { all: 'unset' } }
        onClick={ handleClick }
      >
        <img
          src={ whatsappIcon }
          alt="whatsapp icon"
          style={ { width: '50px' } }
          name="whatsapp"
        />
      </button>
      <div style={ { height: '50px' } }>
        {isCopied && <p>Number copied!</p>}
      </div>
    </div>
  );
}

export default Contact;
