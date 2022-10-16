/* eslint-disable @typescript-eslint/no-var-requires */
const radix = require('@radix-ui/colors');
const plugin = require('tailwindcss/plugin');

const createCssVars = (color, radixColors, alpha) => {
  let colors = {};
  alpha = alpha || color.slice(-1) === 'A';

  Object.entries(radixColors).forEach(([key, hslValue], index) => {
    let hslString = /\(([^)]+)\)/.exec(hslValue).pop();
    if (!alpha) {
      hslString = hslString.replaceAll(',', '');
    }
    colors[`--${color}${alpha ? 'A' : ''}${index + 1}`] = hslString;
  });

  return colors;
};

const radixPalette = plugin.withOptions(
  ({ colors = radix } = {}) => {
    let rootColors = {};
    let darkModeColors = {};

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, { color, alpha }] of Object.entries(colors)) {
      const radixColors = radix[color];
      const radixColorsDark = radix[`${color}Dark`];

      if (radixColors) {
        rootColors = { ...rootColors, ...createCssVars(color, radixColors, false) };
      }
      if (radixColorsDark) {
        darkModeColors = { ...darkModeColors, ...createCssVars(color, radixColorsDark, false) };
      }

      if (alpha) {
        const radixColorsA = radix[`${color}A`];
        const radixColorsADark = radix[`${color}DarkA`];
        rootColors = { ...rootColors, ...createCssVars(color, radixColorsA, true) };
        darkModeColors = { ...darkModeColors, ...createCssVars(color, radixColorsADark, true) };
      }
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

    for (const [key, { color, alpha }] of Object.entries(colors)) {
      const themeColor = {};
      const themeColorA = {};
      for (let i = 1; i <= 12; i++) {
        if (alpha || color.slice(-1) === 'A') {
          themeColorA[i] = `hsla(var(--${color}A${i}))`;
        }
        themeColor[i] = `hsl(var(--${color}${i}) / <alpha-value>)`;
      }
      if (alpha) {
        themeColors[`${key}${alpha ? 'A' : ''}`] = themeColorA;
      }
      themeColors[key] = themeColor;
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

module.exports = radixPalette;
