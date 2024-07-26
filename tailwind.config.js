import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      "cod-gray": {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#121212",
      },
      amethyst: {
        50: "#faf7fd",
        100: "#f3ecfb",
        200: "#e8ddf7",
        300: "#d7c2f0",
        400: "#be9be5",
        500: "#a574d8",
        600: "#9966cc",
        700: "#7943ad",
        800: "#663b8e",
        900: "#533172",
        950: "#381952",
      },
      "electric-violet": {
        50: "#f4f0ff",
        100: "#ece4ff",
        200: "#dbcdff",
        300: "#c2a6ff",
        400: "#a673ff",
        500: "#8d3bff",
        600: "#8414ff",
        700: "#7000f0",
        800: "#6401d6",
        900: "#5303af",
        950: "#320077",
      },
      "guardsman-red": {
        50: "#ffefef",
        100: "#ffdcdc",
        200: "#ffbfbf",
        300: "#ff9292",
        400: "#ff5454",
        500: "#ff1f1f",
        600: "#ff0000",
        700: "#db0000",
        800: "#bd0000",
        900: "#940808",
        950: "#520000",
      },
      white: "#faf9f6",
    },
    extend: {
      // that is animation class
      animation: {
        fade: "fadeIn 2s ease-in-out 3s",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [import("daisyui")],
};
