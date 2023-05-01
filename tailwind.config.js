/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MainColor': '#00C2CB',
        'SecondColor': '#bebebe',
        'ThirdColor': '#c1ae83',
        'WhiteColor': '#fff',
        'BlackColor': '#000000',
      },
      fontFamily: {
        'MainFont': 'Great Vibes',
        'SecondFont': 'Red Hat Display',
      }
    },
  },
  plugins: [],
}

