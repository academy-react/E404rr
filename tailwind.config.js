/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        vazir : ['Vazir'] 
      },
        colors:{
          'abi' : 'blue' 
        },
        width: {
          '312.5': '78.125rem',
          '25' : '7.25rem'
        },
        height: {
          '17.5': '4.375rem',
          "100" : "25rem",
          '25' : '7.25rem',
          '35' : '8.75rem'
        },
        lineHeight: {
          '17.5' : '4.375rem'
        },
        minHeight: {
          '50': '15.5rem',
        }
    },
  },
  plugins: [],
}

