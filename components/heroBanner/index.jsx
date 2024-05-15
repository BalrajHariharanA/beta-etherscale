import React from "react";
import Hero from "./Hero";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative bg-right bg-no-repeats bg-contains bg-hero-banners md:mb-16 lg:mb-32">
      <div className="container py-20 mb-11 ">
        <Hero />
      </div>
      <div className="absolute w-full h-full sm:w-[540px] sm:h-[540px] md:w-[640px] md:h-[640px] lg:w-[960px] lg:h-[960px] xl:w-[1024px] xl:h-[1024px] xl bottom-[-100px] top-[-10%] lg:top-[-25%] right-0 z-10 flex flex-col ">
        <Image src={"/images/hero-image.png"} alt={"etherScale banner"} fill />
      </div>
    </div>
  );
};

export default HeroBanner;
