/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'boundless-dark': '#00050d',
        'boundless-blue': '#00aaff',
        'cuab-green': '#006837',
        'cuab-yellow': '#ffde00',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
