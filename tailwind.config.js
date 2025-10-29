/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        necra: ["Necra", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        night: ["TheNightWatch", "sans-serif"],
      },

      colors: {
        primary: "#ffb400",
        dark: "#3A3A3A",
        light: "#F0FBFF",
        secondary: "#FFA500",
      },
    },
  },
  plugins: [],
};
