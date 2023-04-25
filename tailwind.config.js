/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/{*.tsx,*.mp3}",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./public/**/*.mp3",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
    theme: {
    fontFamily:{
      kaushan: ['Kaushan Script'],
    },
    extend: {
      colors:{
        shiumcustom: {DEFAULT:'#6488E7'},
      },
    },
  },
  plugins: [],
}
