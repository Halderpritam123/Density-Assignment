import React from 'react';
import banner from "../Assets/banner.png"
const Banner = () => {
  return (
    <div className="bg-gray-100 px-6 md:px-12 lg:px-20">
      <img style={{width:"100%",borderRadius:"50px", filter:"drop-shadow(5px,5px,10px,#555)"}} src={banner} alt="" />
    </div>
  );
}

export default Banner;
