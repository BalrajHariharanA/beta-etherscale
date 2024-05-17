"use client";
import scaleAppsFeatures from "@/constants/scaleAppsFeatures";
import {
  useWindowWidth,
  useWindowSize,
} from "@react-hook/window-size/throttled";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ScaleApps = () => {
  const spaceHolder = useRef(null);
  const horizontal = useRef(null);
  const stickyEle = useRef(null);
  const [width, height] = useWindowSize({ fps: 0 });

  function calcDynamicHeight() {
    const objectWidth = horizontal.current.scrollWidth;
    return objectWidth - width + height + 10; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
  }

  useEffect(() => {
    if (spaceHolder.current) {
      spaceHolder.current.style.height = `${calcDynamicHeight()}px`;
    }

    const handleScroll = () => {
      if (horizontal.current && stickyEle.current) {
        horizontal.current.style.transform = `translateX(-${stickyEle.current.offsetTop}px)`;
      }
    };

    const handleResize = () => {
      if (spaceHolder.current) {
        spaceHolder.current.style.height = `${calcDynamicHeight()}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className=" w-screen">
      <div ref={spaceHolder} className="space-holder">
        <div ref={stickyEle} className="sticky-box">
          <div className="max-w-2xl px-4 pt-8 mx-auto text-center heading-cards">
            <h2 className="mt-2 text-white heading-bold">
              Make ScaleApps life easier{" "}
            </h2>
            <p className="mt-6 text-center text-medium text-skyblue-90">
              Our mission: to offer a secure, flexible, chain-agnostic,
              user-friendly platform for decentralised app development and
              deployment.
            </p>
          </div>
          <div ref={horizontal} className="horizontal">
            <section role="feed" className="scrolling-cards-wp mt-20 container">
              {scaleAppsFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="flex  scrolling-card flex-col gap-5 w-[365px] sm:w-[450px] flex-grow-0 flex-shrink-0  p-10 transition-all duration-500"
                >
                  <dt className="text-2xl font-bold leading-7 text-white ">
                    <div className="flex items-start justify-start mb-6 rounded-lg b">
                      <Image src={feature.icon} alt={feature.name} />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-skyblue-900">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleApps;
