import React from "react";
import myDatas from '../datas/myDatas';

function Bio() {
  return (
    <div>      
      {myDatas.map((data, index) => (
      <div key={index}>
        <p>{data.bio}</p>
        <img src={data.avatar} alt='Jake Avatar' />
      </div>
    ))}
    </div>
  )
}

export default Bio;