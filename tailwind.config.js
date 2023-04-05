/** @type {import('tailwindcss').Config} */
module.exports = { 
  darkMode: 'class',
  content: [
     // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

     ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  plugins: [],
}