/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
