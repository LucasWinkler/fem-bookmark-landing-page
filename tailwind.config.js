const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      blue: 'hsl(231, 69%, 60%)',
      red: 'hsl(0, 94%, 66%)',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      'grayish-blue': 'hsl(229, 8%, 60%)',
      'very-dark-blue': 'hsl(229, 31%, 21%)',
      'light-gray': 'hsl(0, 0%, 97%)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    boxShadow: {
      DEFAULT: '0px 8px 8px -4px rgba(73, 93, 207, 0.20012)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};
