// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Montserrat"'],
      topHeading: ['"Bebas Neue"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
