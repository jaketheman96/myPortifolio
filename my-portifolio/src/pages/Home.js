import React from 'react';
import Navbar from '../components/Navbar';
import myDatas from '../datas/myDatas';

function Home() {
  return (
    <div className="home">
      <Navbar />
      {myDatas.map((data, index) => (
        <div key={ index }>
          <p>{data.bio}</p>
          <p>{data.bio2}</p>
          <img
            src={ data.avatar }
            alt="Jake Avatar"
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
