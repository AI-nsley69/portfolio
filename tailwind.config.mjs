import colors from "tailwindcss/colors";
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      // "cod-gray": {
      //   50: "#f6f6f6",
      //   100: "#e7e7e7",
      //   200: "#d1d1d1",
      //   300: "#b0b0b0",
      //   400: "#888888",
      //   500: "#6d6d6d",
      //   600: "#5d5d5d",
      //   700: "#4f4f4f",
      //   800: "#454545",
      //   900: "#3d3d3d",
      //   950: "#121212",
      // },
      charcoal: {
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
        950: "#1f1f1f",
      },
      "screamin-green": {
        50: "#efffee",
        100: "#d7ffd7",
        200: "#b3ffb2",
        300: "#66ff66",
        400: "#33f534",
        500: "#09de0a",
        600: "#01b802",
        700: "#059007",
        800: "#0a710c",
        900: "#0a5d0d",
        950: "#003402",
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
        700: "#6f00ee",
        800: "#6401d6",
        900: "#5303af",
        950: "#320077",
      },
      // screamin-green: {
      //   50: "#fef3f2",
      //   100: "#fee3e2",
      //   200: "#feccca",
      //   300: "#fbaaa6",
      //   400: "#f77872",
      //   500: "#ee4c45",
      //   600: "#da2d25",
      //   700: "#b8241d",
      //   800: "#98211c",
      //   900: "#7e221e",
      //   950: "#440e0b",
      // },

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
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        custom: {
          primary: "#9966cc",
          secondary: "#6f00ee",
          accent: "#da2d25",
          "base-100": "#121212",
          neutral: "#faf9f6",
        },
      },
    ],
  },
};
