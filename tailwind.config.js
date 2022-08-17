/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontSize: { tiny: '.625rem' },
      colors: {
        'body-dark': '#2B2B2B',
        'omni-slate-light': '#4C6E86',
        'omni-slate-dark': '#395365',
        primary: '#00BAC0',
        secondary: '#FFB201',
        'neutral-50': '#fafafa',
        'neutral-100': '#f5f5f5',
      },
      scale: {
        105: '1.05',
      },
    },
  },
  plugins: [],
};
