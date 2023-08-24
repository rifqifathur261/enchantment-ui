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
        'accent': '#F9DDAA',
        'text-dark': '#3D290F',
        'white-primary': '#F9F6F1',
        'grey': '#555555',
        'grey-light': '#938F87',
        'grey-lighten': '#B1B1AE',
        'gold-light': '#B89A48',
        'gold-dark': '#B1803B',
        'blue-light': '#416C9C',
        'blue-dark': '#3E5F98',
        'blue-lighten': '#97C8FA',

        'box-item': '#C3C7C4',
      }
    },
  },
  plugins: [],
}

