import React, { useEffect, useState } from 'react';
import linkedinIcon from '../images/linkedin.png';
import whatsappIcon from '../images/whatsapp.png';
import twitchIcon from '../images/twitch.png';
import '../style/Contact.style.css';

function Contact() {
  const linkedinUrl = 'https://www.linkedin.com/in/jake-chien/';
  const twitchUrl = 'https://www.twitch.tv/jakechienn';
  const whatsappNum = '(41)99983-7067';
  const TWO_SECONDS = 2000;

  const [isCopied, setIsCopied] = useState(false);

  const handleClick = ({ target: { name } }) => {
    const options = {
      twitch: () => window.open(twitchUrl),
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
    <>
      <div className="contact">
        <p>Contact me:</p>
        <div className="contact-icons">
          <button
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ linkedinIcon }
              alt="linkedin icon"
              name="linkedin"
            />
          </button>
          <button
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ whatsappIcon }
              alt="whatsapp icon"
              name="whatsapp"
            />
          </button>
          <button
            type="button"
            onClick={ handleClick }
          >
            <img
              src={ twitchIcon }
              alt="twitch icon"
              name="twitch"
            />
          </button>
        </div>
      </div>
      <div className="copied">
        {isCopied && <p>Number copied!</p>}
      </div>
    </>
  );
}

export default Contact;
