"use client";
import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { useSpring, animated as a, to } from "react-spring";
import useWindowScroll from "@react-hook/window-scroll";
import useScrollWidth from "@/hooks/useScrollWidth";

import Image from "next/image";
import scaleAppsFeatures from "@/constants/scaleAppsFeatures";
import { isBrowser } from "@/lib/utils";

function ScrollCarousel({ children }) {
  const [_window, setWindowObject] = React.useState(null);

  const refHeight = useRef(null);
  const refTransform = useRef(null);

  const { scrollWidth } = useScrollWidth(refTransform);

  // the argument is the fps that the hook uses,
  // since react spring interpolates values we can safely reduce this below 60
  const scrollY = useWindowScroll(45);
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

  useEffect(() => {
    setWindowObject(window);
  }, []);
  useEffect(() => {
    set({ st: scrollY });
  }, [scrollY, set]);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - _window?.innerWidth / 2, y - _window?.innerHeight / 2] }),
    [_window?.innerHeight, _window?.innerWidth, set]
  );

  const top = refHeight.current ? refHeight.current.offsetTop : 0;
  const width = refHeight.current ? refHeight.current.offsetWidth : 0;

  // we want to set the scrolling element *height* to the value of the *width* of the horizontal content
  // plus some other calculations to convert it from a width to a height value
  const elHeight = useMemo(() => {
    if (isBrowser()) {
      return scrollWidth - (_window?.innerWidth - _window?.innerHeight);
    }
    return scrollWidth;
  }, [_window?.innerHeight, _window?.innerWidth, scrollWidth]); // scroll away when final viewport width is 0.5 done

  const interpTransform = to([st, xy], (o, xy) => {
    const mouseMoveDepth = 40; // not necessary, but nice to have
    const x = width - (top - o) - width;
    if (x <= 0) {
      return `translate3d(${0}px, 0, 0)`;
    }

    if (Math.abs(x) > elHeight) {
      // element is not in view, currently below it.
      return `translate3d(${elHeight}px, 0, 0)`;
    }

    // else animate as usual
    return `translate3d(${-x + -xy[0] / mouseMoveDepth}px, ${
      -xy[1] / mouseMoveDepth
    }px, 0)`;
  });

  return (
    <div
      className="scroll-carousel"
      ref={refHeight}
      style={{ height: elHeight }}
    >
      <div className="sticky top-0 ">
        <div className="max-w-2xl px-4 pt-8 mx-auto text-center">
          <h2 className="mt-2 text-white heading-bold">
            Make ScaleApps life easier{" "}
          </h2>
          <p className="mt-6 text-center text-medium text-skyblue-90">
            Our mission: to offer a secure, flexible, chain-agnostic,
            user-friendly platform for decentralised app development and
            deployment.
          </p>
        </div>
        <div className="w-screen overflow-hidden lg:mt-16 ">
          <a.div
            style={{ transform: interpTransform }}
            className="flex-col justify-center transform-box"
            ref={refTransform}
          >
            {children}
          </a.div>
        </div>
      </div>
    </div>
  );
}

function ScaleApps() {
  return (
    <ScrollCarousel>
      <div className="mx-auto mt-4 mb-28 sm:mt-10 lg:mt-8">
        <dl className="flex gap-6 overflow-visible">
          {scaleAppsFeatures.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col gap-5 w-[365px] sm:w-[450px] flex-grow-0 flex-shrink-0  p-10 transition-all duration-500"
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
        </dl>
      </div>
    </ScrollCarousel>
  );
}
export default ScaleApps;
