import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const classes = {
  base: "inline-flex items-center justify-center whitespace-nowrap gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2  no-focus focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  disabled: "opacity-50 cursor-not-allowed",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary: "bg-blue-900s p-2.5 text-white btn-gradient rounded-lgs  shadow-blue-850s",
    secondary:
      "border-[3px]  py-2 px-3 border-skyblue-250 bg-neonGreen-100 rounded-3xl text-white text-sm font-kumbh font-medium",
    tertiary:
      "bg-light-mustard-500 h-10 px-4 !text-dark-mustard-50 py-2 rounded-full items-center text-bold tracking-[.3px] justify-center whitespace-nowrap",
  },
};

const LinkButton = ({ href, children = "", className = "", variant = "primary", disabled = false, ...props }) => {
  return (
    <Link
      href={href}
      className={cn(`
        ${classes.base}
        ${classes?.variant[variant]}
        ${disabled && classes.disabled}
        ${className}
    `)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
