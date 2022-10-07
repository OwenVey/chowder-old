/* eslint-disable @typescript-eslint/no-var-requires */
const radix = require('@radix-ui/colors');
const plugin = require('tailwindcss/plugin');

const windyRadixPalette = plugin.withOptions(
  ({ colors = radix } = {}) => {
    let rootColors = {};
    let darkModeColors = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      const colorMap = colorName.includes('Dark') ? darkModeColors : rootColors;
      Object.entries(colorObj).forEach(([key, value], index) => {
        const colorNameWithoutDark = colorName.replace('Dark', '');
        const hsl = /\(([^)]+)\)/.exec(value).pop().replaceAll(',', '');
        colorMap[`--${colorNameWithoutDark}${index + 1}`] = hsl;
      });
    }

    return ({ addBase }) => {
      addBase({
        ':root': rootColors,
        '.dark': darkModeColors,
      });
    };
  },
  ({ colors = radix } = {}) => {
    const themeColors = {};

    for (const [colorName, colorObj] of Object.entries(colors)) {
      if (!colorName.includes('Dark')) {
        const themeColor = {};
        Object.entries(colorObj).forEach(([key, value], index) => {
          themeColor[index + 1] = `hsl(var(--${colorName}${index + 1}) / <alpha-value>)`;
        });

        themeColors[colorName] = themeColor;
      }
    }

    return {
      theme: {
        extend: {
          colors: themeColors,
        },
      },
    };
  },
);

module.exports = windyRadixPalette;
