/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#F9F9F5'
      }
      ,
      screens: {
        'xl':'1300px'
      }
    },

  },
  plugins: [],
}

