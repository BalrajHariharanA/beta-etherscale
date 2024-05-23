import Image from "next/image";
import React from "react";
import etherscalesymbol from "@/public/ecosystem/etherscalesymbol.svg";
import arbitrum from "@/public/ecosystem/arbitrum.svg";
import op from "@/public/ecosystem/op.svg";
import polygon from "@/public/ecosystem/polygon.svg";
import blocksqout from "@/public/ecosystem/blocksqout.svg";
import graph from "@/public/ecosystem/graph.svg";
import riscZero from "@/public/ecosystem/riscZero.svg";
import espresso from "@/public/ecosystem/espresso.svg";
import eigenLayer from "@/public/ecosystem/eigenLayer.svg";
import zkSync from "@/public/ecosystem/zkSync.svg";
import eth from "@/public/ecosystem/eth.png";
const EcosystemOrbit = () => {
  return (
    <div className="  -mt-16 relative h-[560px] lg:h-[853px] hidden  lg:flex-center ">
      <div className=" absolute outer-ring-3 flex items-center justify-center animate-spiner  rounded-full">
        <div className="icon-bg-wp absolute left-[80px] top-[32px] animate-spiner-reverse">
          <Image src={graph} alt="Graph" className=" rounded-full" />
        </div>
        <div className="icon-bg-wp absolute bottom-[36px] left-[80px] animate-spiner-reverse">
          <Image src={riscZero} alt="riscZero" className=" rounded-full" />
        </div>
        <div className="icon-bg-wp absolute right-[100px] top-[20px] animate-spiner-reverse">
          <Image src={polygon} alt="polygon" className=" rounded-full" />
        </div>
        <div className="icon-bg-wp absolute bottom-[70px] right-[48px] animate-spiner-reverse">
          <Image src={blocksqout} alt="blocksqout" className=" rounded-full" />
        </div>
      </div>
      <div className="absolute outer-ring-2 flex items-center justify-center animate-spiner-reverse  rounded-full">
        <div className="icon-bg-wp absolute  top-[-36px] animate-spiner">
          <Image src={op} alt="op" className=" rounded-full" />
        </div>
        <div className="icon-bg-wp absolute top-[50%]  -right-[30px] animate-spiner">
          <Image src={zkSync} alt="zkSync" className=" rounded-full" />
        </div>
        <div className="icon-bg-wp absolute top-[30%] -left-[30px] animate-spiner">
          <Image src={espresso} alt="espresso" className=" rounded-full" />
        </div>
        <div className="icon-bg-wp absolute bottom-[-30px] animate-spiner">
          <Image src={eigenLayer} alt="eigenLayer" className=" rounded-full" />
        </div>
      </div>
      <div className="absolute outer-ring-1 flex items-center justify-center animate-spiner  rounded-full">
        <div className="icon-bg-wp  absolute top-[20px] -right-[5px] animate-spiner-reverse">
          <Image src={eth} alt="eth" className=" rounded-full" />
        </div>

        <div className="icon-bg-wp absolute -left-[20px] bottom-[30px] animate-spiner-reverse">
          <Image src={arbitrum} alt="arbitrum" />{" "}
        </div>
      </div>

      <div className="absolute rounded-full border-1 border-blue-800 flex items-center justify-center">
        <Image
          src={etherscalesymbol}
          alt="etherscalesymbol"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default EcosystemOrbit;
