import React from "react";
import Hero from "./Hero";

const HeroBanner = () => {
  return (
    <div className="relative  h-[calc(100vh-100px)] lg:bg-right lg:bg-contain bg-hero-banner bg-no-repeat max-md:bg-cover max-md:bg-bottom-4">
      <div className="container flex flex-col justify-center item-center  h-[calc(100%-100px)] max-md:bg-blue-500 max-md:h-[calc(100%)]">
        <Hero />
      </div>
    </div>
  );
};

export default HeroBanner;
