import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-white ">
        <div className="flex items-center   gap-x-2 mb-2 lg:gap-x-8 ">
      <span className="text-2xl mb-4 lg:text-6xl">Hello, my name is Tiger</span>
      <img
        src="/art/icons8-tiger-100.png"
        className="  w-10 lg:w-20 lg:my-10 "
      />
      </div>
      <ReactTyped
        strings={[
          "Junior Software Developer.",
          "I love coding.",
          "I love learning new things.",
        ]}
        typeSpeed={40}
        backSpeed={30}
        loop
        className="text-2xl text-blue-800 font-black lg:text-6xl "
      />
    </div>
  );
};

export default Hero;
