import React from 'react';
import myDatas from '../datas/infos';

function Home() {
  return (
    <div className="home">
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
