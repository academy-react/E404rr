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
      colors: {
        'dark-blue': 'rgb(50, 62, 115)',
        'darker-green': '#23A455',
        'lighter-green': '#82D8B9',
        'danger': 'rgb(220, 53, 69)',
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

