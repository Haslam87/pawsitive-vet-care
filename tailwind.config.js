/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cashmere: '#D4C4B7',
        amber: '#B3704D',
        alabaster: '#FAF8F5',
        espresso: '#2B221E',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Jost', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
