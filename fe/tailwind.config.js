/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['"DM Sans"', 'sans-serif'],
        playwrite: ['"Playwrite BE VLG"', 'sans-serif'],
      },
      colors: {
        'app-green': '#34aa44',
      }
    },
  },
  plugins: [],
}