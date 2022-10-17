import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import Tooltip from './Tooltip';

type IconButtonColor = 'gray' | 'red';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  tooltip?: string;
  color?: IconButtonColor;
  showDownArrow?: boolean;
}

const buttonColors: Record<IconButtonColor, string> = {
  gray: 'text-gray-10 hover:text-gray-11 hover:bg-gray-4 active:bg-gray-5',
  red: 'text-red-9 hover:text-red-11 hover:bg-red-4 active:bg-red-5',
};

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ icon, tooltip, color = 'gray', showDownArrow, ...restProps }, ref) => {
    const Component = (
      <button
        ref={ref}
        {...restProps}
        className={clsx('flex items-center rounded-lg p-1.5', buttonColors[color])}
      >
        {React.cloneElement(icon, { className: 'h-6 w-6' })}
        {showDownArrow && <ChevronDownIcon className="h-4 w-4" />}
      </button>
    );

    if (tooltip) {
      return <Tooltip label={tooltip}>{Component}</Tooltip>;
    }

    return Component;
  },
);

export default IconButton;
IconButton.displayName = 'IconButtonTest';
