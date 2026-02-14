/** @type {import('tailwindcss').Config} */
module.exports = {
  // We only scan files that contain actual HTML/React code
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Perfect for your next-themes setup
  theme: {
    fontFamily: {
      kaushan: ['Kaushan Script'],
    },
    extend: {
      colors: {
        // Your custom brand color
        shiumcustom: { DEFAULT: '#6488E7' },
      },
    },
  },
  plugins: [],
}