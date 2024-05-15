/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TabContent = ({ item, activeSlide }) => {
  return (
    <div className="absolute right-0 flex items-center justify-center w-full p-8 left-2/4s -translate-x-2/4s">
      <div
        className={cn(
          activeSlide ? " opacity-100  delay-300 duration-300" : "opacity-0 duration-300 ",
          `overflow-hidden w-screen border-2 flex items-center rounded-3xl lg:rounded-[40px]  border-borderBlue p-6 lg:p-10  lg:h-[75vh]  bg-features-gradient  transition-all duration-500`
        )}
      >
        <div className="relative flex items-center gap-6 max-md:flex-col">
          <div className="absolute w-[70vw] h-[70vh] translate-x-[12%] -translate-y-[50%] card-gradient top-0  " />
          <div className="flex flex-col flex-1 gap-7">
            <h3 className={cn("text-white transition-all duration-300 subtitle-semibold")}> {item.name}</h3>
            <p className="transition-all duration-300 text-medium text-skyblue-750 max-md:max-h-64 max-md:overflow-y-auto">
              {item.description}
            </p>
          </div>
          <div className="justify-center flex-1 hidden lg:flex">
            <Image
              src={"/svgs/security.svg"}
              width={384}
              height={442}
              alt="icon"
              className="text-black"
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
