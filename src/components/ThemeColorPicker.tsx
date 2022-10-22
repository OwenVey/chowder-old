/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as radixColors from '@radix-ui/colors';
import clsx from 'clsx';
import { useState } from 'react';

export default function ThemeColorPicker() {
  const [lastIndex, setLastIndex] = useState<number | undefined>(undefined);

  const colors = [
    'tomato',
    'red',
    'crimson',
    'pink',
    'plum',
    'purple',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'grass',
    'orange',
    'brown',
  ];

  const togglePrimaryColor = (color: string) => {
    let lightRules = ':root {';
    let darkRules = ':root.dark {';

    for (let i = 1; i <= 12; i++) {
      const lightHsl = /\(([^)]+)\)/
        // @ts-ignore
        .exec(radixColors[color][`${color}${i}`])
        ?.pop()
        ?.replaceAll(',', '');
      const darkHsl = /\(([^)]+)\)/
        // @ts-ignore
        .exec(radixColors[`${color}Dark`][`${color}${i}`])
        ?.pop()
        ?.replaceAll(',', '');

      lightRules += `--primary${i}: ${lightHsl}; `;
      darkRules += `--primary${i}: ${darkHsl}; `;
    }

    lightRules += '}';
    darkRules += '}';

    const stylesheet = document.styleSheets[0];
    if (lastIndex) {
      stylesheet?.deleteRule(lastIndex);
      stylesheet?.deleteRule(lastIndex - 1);
    }

    stylesheet?.insertRule(lightRules, stylesheet.cssRules.length);
    setLastIndex(stylesheet?.insertRule(darkRules, stylesheet.cssRules.length));
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <button
          onClick={() => togglePrimaryColor(color)}
          key={color}
          className={clsx('flex h-14 w-14 items-center justify-center rounded-full border-2')}
          style={{
            // @ts-ignore
            backgroundColor: radixColors[color][`${color}9`],
            // @ts-ignore
            borderColor: radixColors[color][`${color}8`],
          }}
        />
      ))}
    </div>
  );
}
