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
      boxShadow: {
        'card': '0 10px 20px rgba(200, 200, 200, 0.1)',
        'card-elevated': '0 15px 20px rgba(200, 200, 200, 0.3)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.content'),
          }
        }
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
