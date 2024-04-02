/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
       'super-grey': 'color: #9e9ea7',
    },
    animation: {
      fade: 'fadeOut 5s ease-in-out',
    },
    keyframes: theme => ({
      fadeOut: {
        '0%': { backgroundColor: theme('colors.red.300') },
        '100%': { backgroundColor: theme('colors.transparent') },
      },
    }),
  },
  plugins: [],
}
}