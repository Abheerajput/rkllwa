/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': {'min': '300px', 'max': '780px'},
    },
    extend: {},
  },
  plugins: [],
}
