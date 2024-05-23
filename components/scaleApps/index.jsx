"use client";
import scaleAppsFeatures from "@/constants/scaleAppsFeatures";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import borderRow from "@/public/svgs/borderRow.svg";
import borderCol from "@/public/svgs/borderCol.svg";
import useViewport from "@/hooks/useViewport";

const FeatureCard = ({ feature, featureIdx }) => {
  return (
    <div
      keyref={featureIdx + feature.name}
      className={cn(
        "feature-card flex flex-col mb-5 w-full lg:w-1/3 flex-grow-0 flex-shrink-0  group relative p-5 text-center  focus-within:ring-2 focus-within:ring-inset justify-center items-center"
      )}
    >
      <div className="flex items-center justify-center mb-6 rounded-full border-2 border-borderBlue w-[88px] h-[88px]">
        <div className="flex items-center justify-center rounded-full bg-skyblue-800 w-[74px] h-[74px]">
          <Image src={feature.icon} alt={feature.name} width={44} height={44} />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center max-lg:mb-6">
        <h3 className="text-2xl font-bold leading-7 text-white">
          {feature.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-skyblue-900 lg:line-clamp-3 lg:h-20 max-lg:w-80">
          {feature.description}
        </p>
      </div>
      <div
        className={` absolute w-full bottom-0 left-0  h-2  lg:hidden image-bar`}
      >
        <Image className="" src={borderRow} fill alt="image" />
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [elePlacement, setElePlacement] = useState();
  const eleRef = useRef(null);
  const { width, height } = useViewport();
  const additionalContentIndices = Array.from(
    { length: Math.ceil(scaleAppsFeatures.length / 4) },
    (_, i) => (i + 1) * 4 - 1
  );

  useEffect(() => {
    const Eleheight = eleRef ? eleRef.current?.clientHeight : "";
    setElePlacement(
      Math.ceil(Eleheight / (additionalContentIndices.length + 1))
    );
  }, [width, height, additionalContentIndices]);

  return (
    <section className="w-screen">
      <div className="space-holder lg:border-borderBlue lg:border lg:rounded-[40px] m-auto max-w-[1072px] my-16">
        <div className="max-w-2xl px-4 pt-8 mx-auto text-center heading-cards mb-5 lg:mb-8">
          <h2 className="mt-2 text-white heading-bold">
            Make ScaleApps life easier{" "}
          </h2>
          <p className="mt-6 text-center text-medium text-skyblue-90">
            Explore EtherScale’s additional features that support the
            deployment, operation, and management of ScaleApps, enhancing
            overall functionality and user experience.
          </p>
        </div>
        <div className="horizontal  lg:hidden ">
          <div
            ref={eleRef}
            className=" flex  relative  flex-wrap  overflow-hidden  shadow "
          >
            {scaleAppsFeatures.map((feature, featureIdx) => (
              <FeatureCard
                key={featureIdx}
                feature={feature}
                featureIdx={featureIdx}
              />
            ))}
          </div>
        </div>

        <div className="horizontal hidden lg:block  ">
          <div
            ref={eleRef}
            className=" flex  relative  flex-wrap  overflow-hidden  shadow "
          >
            <div className="absolute top-0 left-[33%] right-0 h-full w-3">
              <Image className="" src={borderCol} fill alt="image" />
            </div>
            <div className="absolute top-0 left-[66%] right-0 h-full w-3">
              <Image className="" src={borderCol} fill alt="image" />
            </div>
            {scaleAppsFeatures.map((feature, featureIdx) => (
              <FeatureCard
                key={feature.name + featureIdx}
                feature={feature}
                featureIdx={featureIdx}
              />
            ))}
            {additionalContentIndices.map((item, index) => (
              <div
                key={item + index}
                className={`absolute top-0 left-0 right-0 h-2 `}
                style={{ top: `${elePlacement * (index + 1) - 20}px` }}
              >
                <Image className="" src={borderRow} fill alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
