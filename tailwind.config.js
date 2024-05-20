/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backdropBlur: {
      sm: "6px",
    },
    fontWeight: {
      light: "200",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      xlargebold: "900",
    },
    extend: {
      borderRadius: {
        "4xl": "1.75rem",
      },
      colors: {
        borderBlue: "rgba(51, 70, 121, 1)",
        neonGreen: {
          100: "rgba(221, 237, 102, 0.1)",
          900: "#DDED66",
        },
        blue: {
          200: "#2D71D1",
          300: "rgba(25, 89, 173, 0.5)",
          500: "rgba(8, 13, 39, 0.5)",
          950: "#0C112C",
        },
        skyblue: {
          250: "rgba(25, 89, 173, 0.25)",
          300: "rgba(25, 89, 173, 0.25)",
          500: "rgba(196, 203, 245, 0.5)",
          700: "rgba(196, 203, 245, 0.7)",
          750: "rgba(196, 203, 245, 0.75)",
          800: "#0C1838",
          900: "#C4CBF5",
        },
        "accent-blue": "#1DA1F2",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"], // Custom name 'manrope' for Manrope font
        kumbh: ["var(--font-kumbh-sans)"],
      },
      boxShadow: {
        "blue-850": "0px -14px 48px 0px rgba(40, 51, 111, 0.69)",
        "blue-white": "0px -3px 5px 0px #FFFFFF80 inset",
        "midnight-blue-inset": "0px 2px 4px 0px #FFFFFF80 inset",
        btn: "0px -3px 5px 0px rgba(255, 255, 255, 0.5) inset",
      },
      dropShadow: {
        "btn-dropShadow": "0px -14px 48px 0px #28336FB0",
      },
      backgroundImage: {
        "tab-active": "url('/images/tab-active.png')",
        "light-gradient": "url('/svgs/light.svg')",
        "hero-banner": "url('/images/hero.png')",
        "blue-800": "linear-gradient(180deg, #334679 0%, #162561 100%)",
        "blue-900": "linear-gradient(180deg, #253575 0%, #162561 100%)",
        "features-gradient": "linear-gradient(180deg, #1B275A 0%, #0E1434 100%)",
        "blue-700-gradient": "linear-gradient(180deg, rgba(27, 39, 90, 0.9) 0%, rgba(14, 20, 52, 0.9) 100%)",
      },

      transitionDuration: {
        850: ".85s",
      },
      backgroundPosition: {
        "right-top": "right 6rem top -1.6rem",
        "right-top-20-2.6": "right -20rem top -1.6rem",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(1.05)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scale: "scale 1s ease-out",
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeOut: "fadeOut 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
