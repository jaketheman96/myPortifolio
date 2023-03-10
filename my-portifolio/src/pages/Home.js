import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import data from '../infos/home';
import '../style/Home.style.css';

function Home() {
  return (
    <div className="home">
      <div className="home-infos">
        <h1>
          <Typewriter
            words={ [data.welcome] }
            loop={ 2 }
            typeSpeed={ 50 }
            deleteSpeed={ 50 }
            delaySpeed={ 1500 }
          />
        </h1>
        <h1>{data.stack}</h1>
        <p>{data.aditional}</p>
      </div>
      <img
        src={ data.avatar }
        alt="Jake Avatar"
      />
    </div>
  );
}

export default Home;
