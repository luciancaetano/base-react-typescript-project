const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./publis/index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      satoshi: ["Roboto", "sans-serif"],
    },
    screens: {
      ...defaultTheme.screens,
    },
    screens: defaultTheme.screens,
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        ssm: "0.75rem",
        xxs: "0.75rem",
      },
      zIndex: {
        "sidebar-trigger": "1000",
        sidebar: "1001", 
        modal: "1002",
        dropdown: "1003",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
