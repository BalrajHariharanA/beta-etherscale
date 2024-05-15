import React from "react";
import Image from "next/image";
import LinkButton from "../shared/LinkButton";
export default function HeroBanner() {
  return (
    <div className=" gap-x-14 lg:mx-0 flex flex-col h-full z-[999]">
      <div className="relative z-50 w-full max-w-[480px] mt-8 lg:shrink-0 lg:mt-16">
        <LinkButton variant="secondary" className={"uppercase mb-3"} href={"/"}>
          <span className="mr-1 font-xlargebold text-neonGreen-900">Deploy</span> coming soon
        </LinkButton>
        <h1 className="text-white uppercase xl-bold font-kumbh">Build ScaleApps</h1>
        <p className="flex flex-col mt-6">
          <span className=" text-medium text-skyblue-900">
            EtherScale, a Chain-agnostic RaaS, is secured by the AVS ecosystem, offering versatility and robust security
            across blockchain networks.
          </span>
        </p>
        <div className="flex items-center mt-10 gap-x-6">
          <LinkButton href="#projects">
            <Image src={"/svgs/icon-book.svg"} width={40} height={40} alt={"icon"} /> Explore Projects
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
