/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "white": "#FFF",
      "dark-text-color": "#252B42",
      "danger-color": "#E74040",
      "second-text-color": "#737373",
      "primary-color": "#23A6F0",
    },
  },
  plugins: [],
};
