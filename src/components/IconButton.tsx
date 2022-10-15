import React, { forwardRef } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
}

const IconButton = forwardRef<HTMLButtonElement, Props>(({ icon, ...restProps }, ref) => (
  <button ref={ref} {...restProps} className="rounded-full p-2 text-gray-10 hover:text-gray-11">
    {React.cloneElement(icon, { className: 'h-6 w-6' })}
  </button>
));

export default IconButton;
IconButton.displayName = 'IconButtonTest';
