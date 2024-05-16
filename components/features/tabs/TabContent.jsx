/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TabContent = ({ item, activeSlide }) => {
  return (
    <div className="flex items-center justify-center w-full p-8 lg:absolute lg:right-0 ">
      <div
        className={cn(
          activeSlide ? "opacity-100  delay-300 duration-300" : "opacity-0 duration-300 ",
          `overflow-hidden w-screen border-2 flex items-center rounded-3xl lg:rounded-[40px]  border-borderBlue p-6 lg:p-10  lg:h-[75vh]  bg-features-gradient  transition-all duration-500`
        )}
      >
        <div className="relative flex items-center gap-6 max-md:flex-col-reverse">
          <div className="absolute w-[70vw] h-[70vh] translate-x-[12%] -translate-y-[50%] card-gradient top-0  " />
          <div className="flex flex-col flex-1 gap-7">
            <h3 className={cn("text-white transition-all duration-300 subtitle-semibold")}>{item.name}</h3>
            <p className="transition-all duration-300 text-medium text-skyblue-750 ">{item.description}</p>
          </div>
          <div className="justify-center flex-1 lg:flex ">
            <Image
              src={"/svgs/security.svg"}
              width={480}
              height={480}
              sizes="(max-width: 768px) 262px"
              alt="icon"
              className="text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;