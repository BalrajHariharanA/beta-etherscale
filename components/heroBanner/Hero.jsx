import React from "react";
import Image from "next/image";
import LinkButton from "../shared/LinkButton";
export default function HeroBanner() {
  return (
    
      <div className="relative z-50 w-full max-w-[580px] mt-8 lg:shrink-0 flex flex-col justify-center items-start max-md:mt-0">
        <LinkButton variant="secondary" className={"uppercase mb-3"} href={"/"}>
          <span className="mr-1 font-xlargebold text-neonGreen-900">Deploy</span> coming soon
        </LinkButton>
        <h1 className="text-white uppercase xl-bold font-kumbh">Build ScaleApps</h1>
        <p className="flex flex-col mt-6">
          <span className=" text-medium text-skyblue-900 max-md:text-white">
          EtherScale is a Chain-agnostic Rollup-as-a-Service 
          secured by the Eigen AVS ecosystem.
          </span>
        </p>
        {/* <div className="flex items-center mt-10 gap-x-6">
          <LinkButton href="#projects">
            <Image src={"/svgs/icon-book.svg"} width={40} height={40} alt={"icon"} /> Explore Projects
          </LinkButton>
        </div> */}
      </div>
  
  );
}
