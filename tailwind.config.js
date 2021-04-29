const forms = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: "'Montserrat', sans-serif",
      secondary: "'Open Sans', sans-serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms],
};
