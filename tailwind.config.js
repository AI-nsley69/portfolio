/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#990a1f",
        secondary: "#e9e9ea",
        background: "#242424",
        text: "#ffff8f",
      },
    },
  },
  plugins: [],
};
