const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          light: '#FFC345',
          DEFAULT: '#F29516',
        },
        body: '#F7F7F7',
        content: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      header: {
        expandedHeight: '146px',
        collapsedHeight: '64px',
      },
    },
  },
  plugins: [],
}
