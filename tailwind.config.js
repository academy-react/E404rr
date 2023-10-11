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
    },
  },
  plugins: [],
}

