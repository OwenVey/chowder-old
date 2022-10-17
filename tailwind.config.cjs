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
        gray: radixColors.gray,
        grayDark: radixColors.grayDark,
        primary: radixColors.grass,
        primaryDark: radixColors.grassDark,
        primaryA: radixColors.grassA,
        primaryDarkA: radixColors.grassDarkA,
        red: radixColors.red,
        redDark: radixColors.redDark,
        blue: radixColors.blue,
        blueDark: radixColors.blueDark,
        green: radixColors.green,
        greenDark: radixColors.greenDark,
        yellow: radixColors.yellow,
        yellowDark: radixColors.yellowDark,
        whiteA: radixColors.whiteA,
      },
    }),
  ],
};
