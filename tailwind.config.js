import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      'cod-gray': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#121212',
    },
    'electric-violet': {
        '50': '#fbf6fe',
        '100': '#f6eafd',
        '200': '#eed8fc',
        '300': '#e0baf8',
        '400': '#ce8df3',
        '500': '#ba61eb',
        '600': '#a741dc',
        '700': '#9932cc',
        '800': '#792b9e',
        '900': '#63247f',
        '950': '#450e5d',
    },
    'blue-violet': {
        '50': '#f0f2fd',
        '100': '#e4e7fb',
        '200': '#cfd4f6',
        '300': '#b2b7ef',
        '400': '#9293e7',
        '500': '#7e78dc',
        '600': '#6a5acd',
        '700': '#5e4db5',
        '800': '#4d4192',
        '900': '#413a75',
        '950': '#272244',
    },
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
