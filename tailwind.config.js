/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: { tiny: '.625rem' },
      lineHeight: {
        12: '3rem',
        14: '4.25rem',
      },
      colors: {
        'body-dark': '#2B2B2B',
        'omni-slate-light': '#4C6E86',
        'omni-slate-dark': '#395365',
        primary: '#00BAC0',
        secondary: '#FFB201',
        //'neutral-50': '#fafafa', //commented out as it is default value
        //'neutral-100': '#f5f5f5', //commented out as it is default value
      },
      scale: {
        105: '1.05',
      },
    },
  },
  plugins: [],
};
