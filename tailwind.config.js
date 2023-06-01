/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2CCF29",
        secondary: "#DCD6D9",
      },
      fontFamily: {
        "font-roboto": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
