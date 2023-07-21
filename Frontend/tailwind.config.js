/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fontWSH2': ['wsh2', 'sans-serif'],
        'fontWSH3': ['wsh3', 'sans-serif'],
        'fontWSP': ['wsp', 'sans-serif'],
        'fontWSPL': ['wspl', 'sans-serif'],
      },
      colors: {
        'blaaack': '#161516',
        'lightblack': '#4B4B4B',
        'grey': '#EDEFF4',
        'reed': "#E97777",
        'bluue': "#7286D3",
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

