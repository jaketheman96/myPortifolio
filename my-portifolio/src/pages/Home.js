import React from 'react';
import Navbar from '../components/Navbar';
import myDatas from '../datas/myDatas';

function Bio() {
  return (
    <div>
      <Navbar />
      {myDatas.map((data, index) => (
        <div key={ index }>
          <p>{data.bio}</p>
          <img
            src={ data.avatar }
            alt="Jake Avatar"
          />
        </div>
      ))}
    </div>
  );
}

export default Bio;
