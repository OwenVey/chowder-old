/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const radixColors = require('@radix-ui/colors');
// const tailwindColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   inherit: tailwindColors.inherit,
    //   current: tailwindColors.current,
    //   transparent: tailwindColors.transparent,
    //   black: tailwindColors.black,
    //   white: tailwindColors.white,
    // },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./radix-plugin.cjs')({
      colors: {
        primary: { color: 'green', alpha: true },
        gray: { color: 'gray' },
        whiteA: { color: 'whiteA' },
      },
    }),
  ],
};
