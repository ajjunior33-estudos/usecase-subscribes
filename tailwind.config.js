/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "guy": "url('/guy.png')",
        "mulher": "url('/mulher.png')",
        "sala": "url('/sala.png')",
        "filter": "linear-gradient(90deg, #000 0.13%, #000 0.14%, rgba(0, 0, 0, 0.00) 99.56%);",

      }
    },
    colors: {
      "white": "#FFF",
      "dark-text-color": "#252B42",
      "danger-color": "#E74040",
      "secondary":"#F3CD03",
      "second-text-color": "#737373",
      "primary-color": "#23A6F0",
      "primary-text-color": "#23A6F0",
      "disabled-element-text-color":"#8EC2F2"
    },
  },
  plugins: [],
};
