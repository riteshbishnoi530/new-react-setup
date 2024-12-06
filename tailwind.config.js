/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
          "2xl": "1140px",
      },
  },
    extend: {
      colors: {
        offBlue: '#003459F5',
      },
      fontSize: {
        CustomSm: '64px',
      },
    },
  },
  plugins: [],
}