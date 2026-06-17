/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#069BAF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
