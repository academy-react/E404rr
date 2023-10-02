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
          '25' : '7.25rem',
          '71.875' : '17.96875rem' 
        },
        height: {
          '17.5': '4.375rem',
          "100" : "25rem",
          '25' : '7.25rem',
          '35' : '8.75rem',
          '80.325':'20.08125rem',
          '45' : '11.25rem',
        },
        lineHeight: {
          '17.5' : '4.375rem'
        },
        minHeight: {
          '400': '100rem',
        }
    },
  },
  plugins: [],
}

