import React from "react";
import heroimage from "/public/images/hero-image.png";
const Hero = () => {
  return (
    <div
      className={`bg-hero bg-contain bg-no-repeat right-0 h-screen w-screen text-center bg-bottom sm:bg-right  flex  flex-col justify-center sm:items-start sm:px-5`}
    >
      <h1 className="text-[70px] dancing ">Mardi Coffee</h1>
      <div className="flex space-x-4 justify-center">
        <button className="btn">shop now</button>
        <button className="btn">Catalog</button>
      </div>
    </div>
  );
};

export default Hero;
