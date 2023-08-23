/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CFA87E',
        'primary-light': '#FBE5D5',
        'text-dark': '#3D290F',
        'white-primary': '#F9F6F1',
        'grey': '#555555',
      }
    },
  },
  plugins: [],
}

