const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
      backgroundImage: {
        'hero': "url('/public/hero.svg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
