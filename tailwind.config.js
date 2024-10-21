/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#F9F9F5',
        'c_white': '#ecf0ff',
        'primary':'#6EACDA',
        'line':'#f9f9f585'
      }
      ,
      screens: {
        'xl':'1300px',
        'mid':'940px'
      }
    },

  },
  plugins: [],
}

