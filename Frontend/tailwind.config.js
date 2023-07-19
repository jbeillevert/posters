/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font1': ['worksans', 'sans-serif'],
      },
      colors: {
        'blaaack': '#161516',
        'grey': '#EDEFF4',
        'orange': '#FFC972',
        'salmon': '#FF9B73',
        'purple': '#B692FE',
        'blue': '#01D4FF',
        'fadegreen': '#E4EE91',
      },
    },
  },
  plugins: [],
}

