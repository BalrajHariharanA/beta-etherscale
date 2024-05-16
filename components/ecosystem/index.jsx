import Image from "next/image";
import React from "react";
import EcoSystemImage from "@/public/svgs/ecosystem.svg";
const Ecosystem = () => {
  return (
    <div className="flex flex-col bg-features-gradient">
      <div className="container">
        <div className="flex flex-col items-center justify-center mt-16">
          <h2 className="mb-10 text-white heading-bold font-kumbh">Ecosystem</h2>
          <p className="max-w-screen-md text-center text-medium text-skyblue-900">
            Our mission: to offer a secure, flexible, chain-agnostic, user-friendly platform for decentralised app
            development and deployment.
          </p>
        </div>

        <div className="-mt-20 sm:-mt-40 flex-center lg:-mt-72 ">
          <Image src={EcoSystemImage} alt="EcoSystem" />
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
