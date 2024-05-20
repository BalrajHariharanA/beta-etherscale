"use client";
import React, { useState } from "react";
import StepCard from "./tabs/StepCard";
import Stickyroll from "@stickyroll/react/stickyroll";
import etherScaleFeatures from "@/constants/features";
import TabContent from "./tabs/TabContent";

import useViewport from "@/hooks/useViewport";

const FeaturesTab = () => {
  const {width}=useViewport()

  const [activeSlide, setActiveSlide] = useState(0);
  const featuresTabLength = etherScaleFeatures.length;
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="mb-10 text-white heading-bold font-kumbh">EtherScale Bedrock</h2>
        <p className="max-w-screen-md text-center text-medium text-skyblue-900">
        EtherScale Bedrock encapsulates security via AVS, chain-agnostic flexibility, decentralized architecture, and a modular design for adaptable ScaleApp development.
        </p>
      </div>
      {width <= 1023 ? (
        <div className="relative w-screen p-5 m-auto">
          {etherScaleFeatures.map((feature, index) => (
            <TabContent key={feature.name} item={feature} activeSlide={true} />
          ))}
        </div>
      ) : (
        <Stickyroll
          pages={featuresTabLength}
          className="h-screen"
          onPage={(page, index) => {
            const pageIndex = Math.min(index, featuresTabLength - 1);
            setActiveSlide(pageIndex);
          }}
        >
          <StepCard activeSlide={activeSlide} />
        </Stickyroll>
      )}
    </div>
  );
};

export default FeaturesTab;
