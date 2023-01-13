import React from 'react';
import about from '../infos/about';
import '../style/About.style.css';

function About() {
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="about-paragraphs">
        <p>{about.englishBio}</p>
        <p>{about.portugueseBio}</p>
      </div>
    </div>
  );
}

export default About;
