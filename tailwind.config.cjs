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
        sans: ['var(--font-inter, "Inter")', ...defaultTheme.fontFamily.sans],
      },
      colors: {},
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
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
