/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Marigny': ['Marigny', 'sans-serif'],
      'Poppins': ['poppins', 'sans-serif'],
    },
  },
  plugins: [],
}


