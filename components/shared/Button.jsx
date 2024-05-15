import React from "react";

const cls = (input) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

const classes = {
  base: "no-focus inline-flex items-center ",
  disabled: "!bg-none !bg-zee-grey-v-250 !text-white",
  variant: {
    primary:
      " border-[3px]  py-2 px-3 border-skyblue-250 bg-neonGreen-100 rounded-3xl text-white text-sm font-kumbh font-medium",
    outline: "",
  },
};

export default function Button({
  children,
  type = "button",
  className,
  variant = "primary",
  disabled = false,
  spanClasses = "",
  ...props
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cls(`  
                ${classes.base}
                ${classes.variant[variant]}
                ${disabled && variant != "secondary" && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  );
}
