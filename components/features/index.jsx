"use client";
import React, { useState } from "react";
import StepCard from "./tabs/StepCard";
import Stickyroll from "@stickyroll/react/stickyroll";
import etherScaleFeatures from "@/constants/features";
const FeaturesTab = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuresTabLength = etherScaleFeatures.length;
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="mb-10 text-white xl-bold !font-bold font-kumbh">Features</h2>
        <p className="max-w-screen-md text-center text-medium text-skyblue-900">
          Our mission: to offer a secure, flexible, chain-agnostic, user-friendly platform for decentralised app
          development and deployment.
        </p>
      </div>
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
    </div>
  );
};

export default FeaturesTab;
