/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C1844',
        secondary: '#C80036',
        accent: '#FF6969',
        light: '#FFF5E1',
      },
    },
  },
  plugins: [],
}
