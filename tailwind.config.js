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
      backgroundImage: {
        'hero-image': "url('../public/assets/webp/header-bg.webp')"
      },

      colors: {
        offBlue: '#003459F5',
        deepBlue: '#00171F',
        PrussianBlue: '#003459'
      },
      fontSize: {
        CustomSm: '64px',
        CustomMd: '38px',
        CustomLg: '32px'
      },
    },
  },
  plugins: [],
}