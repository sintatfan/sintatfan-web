/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#F29516',
        body: '#F7F7F7',
      },
      header: {
        expandedHeight: '146px',
        collapsedHeight: '64px',
      },
    },
  },
  plugins: [],
}
