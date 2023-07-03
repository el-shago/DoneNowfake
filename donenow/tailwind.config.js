/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js, tsx, ts, jsx}",
    "./src/*.{html,js,ts, tsx, jsx}",
    "./*.{html,js,ts,tsx, jsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      Lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
