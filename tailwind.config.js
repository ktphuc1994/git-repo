/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false,
  // },
  // important: '#__next',
  plugins: [],
};
