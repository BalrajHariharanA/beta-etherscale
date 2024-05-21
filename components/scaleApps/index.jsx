"use client";
import scaleAppsFeatures from "@/constants/scaleAppsFeatures";
import useViewport from '@/hooks/useViewport';
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ScaleApps = () => {
  const spaceHolder = useRef(null);
  const horizontal = useRef(null);
  const stickyEle = useRef(null);
  const {width, height} = useViewport();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [calcDynamicHeight]);

  return (
    <section className=" w-screen">
      <div ref={spaceHolder} className="space-holder">
        <div ref={stickyEle} className="sticky-box">
          <div className="max-w-2xl px-4 pt-8 mx-auto text-center heading-cards">
            <h2 className="mt-2 text-white heading-bold">
              Make ScaleApps life easier{" "}
            </h2>
            <p className="mt-6 text-center text-medium text-skyblue-90">
            Explore EtherScale’s additional features that support the deployment, operation, and management of ScaleApps, enhancing overall functionality and user experience.
            </p>
          </div>
          <div ref={horizontal} className="horizontal">
            <section role="feed" className="scrolling-cards-wp mt-20 container">
              {scaleAppsFeatures.map((feature) => (
                <div key={feature[0].name} className="max-md:flex">
                <div
                  className="flex flex-col gap-5 w-[365px] sm:w-[450px] flex-grow-0 flex-shrink-0  p-10 transition-all duration-500"
                >
                  <dt className="text-2xl font-bold leading-7 text-white ">
                    <div className="flex items-center justify-center mb-6 rounded-full border-2 border-borderBlue w-[88px] h-[88px]">
                      <div className="flex items-center justify-center rounded-full bg-skyblue-800 w-[74px] h-[74px]">
                        <Image src={feature[0].icon} alt={feature[0].name}  width={44} height={44}/>
                      </div>
                    </div>
                    {feature[0].name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-1 text-sm leading-7 text-skyblue-900">
                    <p className="flex-auto">{feature[0].description}</p>
                  </dd>
                </div>
                <div
                  className="flex flex-col gap-5 w-[365px] sm:w-[450px] flex-grow-0 flex-shrink-0  p-10 transition-all duration-500"
                >
                  <dt className="text-2xl font-bold leading-7 text-white ">
                    <div className="flex items-center justify-center mb-6 rounded-full border-2 border-borderBlue w-[88px] h-[88px]">
                      <div className="flex items-center justify-center rounded-full bg-skyblue-800 w-[74px] h-[74px]">
                        <Image src={feature[1].icon} alt={feature[1].name}  width={44} height={44}/>
                      </div>
                    </div>
                    {feature[1].name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-1 text-sm leading-7 text-skyblue-900">
                    <p className="flex-auto">{feature[1].description}</p>
                  </dd>
                </div>
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
