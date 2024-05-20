import clsx from "clsx";
import React from "react";
import TabContent from "./TabContent";
import etherScaleFeatures from "@/constants/features";

const StepCard = ({ activeSlide }) => {
  return (
    <div className="pt-8">
      <div className="whitespace-nowrap md:flex items-center self-center flex-nowrap overflow-x-auto w-[365px] sm:w-screen m-auto  justify-center  max-w-[744px] p-4 bg-blue-500 border-skyblue-250 border-[3px] rounded-3xl ">
        {etherScaleFeatures.map((step, stepIdx) => {
          const activeCard = stepIdx === activeSlide;
          return (
            <button
              key={step.name}
              className={clsx(
                activeCard
                  ? "max-lg:underline max-lg:text-sm text-white lg:bg-tab-active bg-cover bg-no-repeat animate-fadeIn"
                  : "",
                "relative m-auto item self-center transition-all duration-300 p-3 text-base whitespace-nowrap font-bold uppercase no-focus font-manrope text-skyblue-700 lg:h-16 lg:w-44"
              )}
            >
              {step.name}
            </button>
          );
        })}
      </div>
      <div className="relative max-w-[1136px] w-screen p-5 m-auto">
        {etherScaleFeatures.map((step, stepIdx) => {
          const activeCard = stepIdx === activeSlide;

          return <TabContent key={step.name} item={step} activeSlide={activeCard} />;
        })}
      </div>
    </div>
  );
};

export default StepCard;
