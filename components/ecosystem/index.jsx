import Image from "next/image";
import React from "react";
import EcoSystemImage from "@/public/svgs/ecosystem.svg";
import EcosystemOrbit from "./ecosystemOrbit";
const Ecosystem = () => {
  return (
    <div className="flex flex-col bg-features-gradient">
      <div className="lg:bg-skybluebgShade lg:bg-cover bg-no-repeat">
        <div className="container">
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mb-10 text-white heading-bold font-kumbh">
              Ecosystem
            </h2>
            <p className="max-w-screen-md text-center text-medium text-skyblue-900">
              The EtherScale Ecosystem fosters a collaborative environment for
              developers, partners, and resources, ensuring a vibrant and
              dynamic blockchain community.
            </p>
          </div>

          <EcosystemOrbit />
          <div className="-mt-20 sm:-mt-40 flex-center lg:-mt-72 lg:hidden">
            <Image src={EcoSystemImage} alt="EcoSystem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
