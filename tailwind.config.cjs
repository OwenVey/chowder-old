/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const radixColors = require('@radix-ui/colors');
const tailwindColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   white: tailwindColors.white,
    //   black: tailwindColors.black,
    // },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: tailwindColors.white,
        black: tailwindColors.black,
      },
    },
  },
  plugins: [
    require('./radix-plugin.cjs')({
      colors: {
        gray: radixColors.gray,
        grayDark: radixColors.grayDark,
        primary: radixColors.blue,
        primaryDark: radixColors.blueDark,
      },
    }),
  ],
};
