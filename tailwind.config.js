import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      black: "#121212",
      white: "#faf9f6",
    },
    extend: {
        // that is animation class
      animation: {
        fade: 'fadeIn 2s ease-in-out 3s',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0, },
          '100%': { opacity: 1, },
        },
      }),
    }
  },
  plugins: [],
};
