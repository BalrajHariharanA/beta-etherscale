import React from "react";
import Hero from "./Hero";

const HeroBanner = () => {
  return (
    <div className="relative  h-[calc(100vh-100px)] bg-right bg-contain bg-hero-banner bg-no-repeat md:bg-right-top-20-2.6 xl:bg-right-top bg-opacity-35">
      <div className="container flex flex-col justify-center item-center  h-[calc(100%-100px)] backdrop-blur-[0px] max-lg:backdrop-brightness-[.3]">
        <Hero />
      </div>

    </div>
  );
};

export default HeroBanner;
