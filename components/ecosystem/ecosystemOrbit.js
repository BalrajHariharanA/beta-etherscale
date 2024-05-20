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
import eth from "@/public/ecosystem/eth.svg";
const EcosystemOrbit = () => {
  return (
    <div className="  -mt-16 relative h-[560px] lg:h-[853px] hidden  lg:flex-center ">
      <div className=" absolute outer-ring-3 flex items-center justify-center animate-spiner  rounded-full">
        <div className="icon-bg-wp absolute left-[80px] top-[32px]">
          <Image src={graph} className="    " />
        </div>
        <div className="icon-bg-wp absolute bottom-[36px] left-[80px]">
          <Image src={riscZero} className="    " />
        </div>
        <div className="icon-bg-wp absolute right-[100px] top-[20px]">
          <Image src={polygon} className="    " />
        </div>
        <div className="icon-bg-wp absolute bottom-[70px] right-[48px]">
          <Image src={blocksqout} className="    " />
        </div>
      </div>
      <div className="absolute outer-ring-2 flex items-center justify-center animate-spiner-reverse !duration-[15s] rounded-full">
        <div className="icon-bg-wp absolute  top-[-36px]">
          <Image src={op} className=" " />
        </div>
        <div className="icon-bg-wp absolute top-[50%]  -right-[30px]">
          <Image src={zkSync} />
        </div>
        <div className="icon-bg-wp absolute top-[30%]  -left-[30px]">
          <Image src={espresso} className=" " />
        </div>
        <div className="icon-bg-wp absolute bottom-[-30px]">
          <Image src={eigenLayer} className=" " />
        </div>
      </div>
      <div className="absolute outer-ring-1 flex items-center justify-center animate-spiner !duration-[20s] rounded-full">
        <div className="icon-bg-wp  absolute top-[20px] -right-[5px]">
          <Image src={eth} className="" />
        </div>

        <div className="icon-bg-wp absolute -left-[20px]   bottom-[30px]">
          <Image src={arbitrum} className="  " />{" "}
        </div>
      </div>

      <div className="absolute rounded-full border-1 border-blue-800 flex items-center justify-center">
        <Image src={etherscalesymbol} width={150} height={150} />
      </div>
    </div>
  );
};

export default EcosystemOrbit;
