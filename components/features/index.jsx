"use client";
import React, { useState } from "react";
import StepCard from "./tabs/StepCard";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Stickyroll from "@stickyroll/react/stickyroll";
import etherScaleFeatures from "@/constants/features";
import TabContent from "./tabs/TabContent";
const FeaturesTab = () => {
  const windowWidth = useWindowWidth({ fps: 0 });

  const [activeSlide, setActiveSlide] = useState(0);
  const featuresTabLength = etherScaleFeatures.length;
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="mb-10 text-white heading-bold font-kumbh">Features</h2>
        <p className="max-w-screen-md text-center text-medium text-skyblue-900">
          Our mission: to offer a secure, flexible, chain-agnostic, user-friendly platform for decentralised app
          development and deployment.
        </p>
      </div>
      {windowWidth < 1024 ? (
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
