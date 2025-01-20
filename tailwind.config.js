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
        dark: '#1d232a',
        primary: {
          50: '#eaf5ff',
          100: '#d6eaff',
          200: '#add5ff',
          300: '#84c1ff',
          400: '#5badff',
          500: '#3b9bf3',
          DEFAULT: '#3b9bf3',
          600: '#2e7bcc',
          700: '#225ca5',
          800: '#173d7e',
          900: '#0c1f57',
        },
        sidebar: {
          base: "#f9fafb",
          divider: "#ababab",
          "clinic-box": "#EFEFF1",
          "clinic-box-text": "#50555D",
          "clinic-box-text-addr": "#99A0B2",
          item: {
            default: {
              content: "#676769",
            },
            active: {
              content: "#3b9bf3ff",
              bg: "#E8EFFB",
            },
            hover: {
              content: "#3b9bf3ff",
              bg: "#c8daf7",
            },
          },
        },
        "sidebar-dark": {
          bg: "rgb(26 29 33)",
          base: "#f9fafb",
          divider: "#ababab",
          "clinic-box": "#c1c1c1",
          "clinic-box-text": "#c1c1c1",
          "clinic-box-text-addr": "#c1c1c1",
          item: {
            default: {
              content: "#c1c1c1",
            },
            active: {
              content: "#c1c1c1",
              bg: "#343d49",
            },
            hover: {
              content: "#c1c1c1",
              bg: "#343d49",
            },
          },
        },
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
