import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Loader } from '.';

export type ButtonVariant = 'filled' | 'default' | 'light';
export type ButtonColor = 'primary' | 'gray' | 'red' | 'green' | 'blue' | 'yellow';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

const buttonVariants: Record<ButtonVariant, Record<ButtonColor, string>> = {
  filled: {
    primary: 'border-transparent bg-primary-9 text-white hover:bg-primary-10 active:bg-primary-11',
    gray: 'border-gray-7 bg-gray-6 text-gray-12 hover:bg-gray-7 active:bg-gray-8',
    red: 'border-transparent bg-red-9 text-white hover:bg-red-10 active:bg-red-11',
    green: 'border-transparent bg-green-9 text-white hover:bg-green-10 active:bg-green-11',
    blue: 'border-transparent bg-blue-9 text-white hover:bg-blue-10 active:bg-blue-11',
    yellow: 'border-transparent bg-yellow-9 text-black hover:bg-yellow-10 active:bg-yellow-11',
  },
  default: {
    primary:
      'border-gray-7 bg-white text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    gray: 'border-gray-7 bg-white text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    red: 'border-gray-7 bg-white text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    green:
      'border-gray-7 bg-white text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    blue: 'border-gray-7 bg-white text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    yellow:
      'border-gray-7 bg-white text-gray-12 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
  },
  light: {
    primary:
      'border-transparent bg-primary-4 text-primary-11 hover:bg-primary-5 active:bg-primary-6',
    gray: 'border-transparent bg-gray-4 text-gray-12 hover:bg-gray-5 active:bg-gray-6',
    red: 'border-transparent bg-red-4 text-red-11 hover:bg-red-5 active:bg-red-6',
    green: 'border-transparent bg-green-4 text-green-11 hover:bg-green-5 active:bg-green-6',
    blue: 'border-transparent bg-blue-4 text-blue-11 hover:bg-blue-5 active:bg-blue-6',
    yellow: 'border-transparent bg-yellow-4 text-yellow-11 hover:bg-yellow-5 active:bg-yellow-6',
  },
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { variant = 'filled', color = 'primary', loading, children, leftIcon, rightIcon, ...restProps },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        {...restProps}
        className={clsx(
          'inline-flex select-none items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors',
          buttonVariants[variant][color],
        )}
      >
        {leftIcon && !loading && React.cloneElement(leftIcon, { className: '-ml-1 mr-2 h-5 w-5' })}
        {loading && <Loader className="-ml-1 mr-2 h-5 w-5" />}
        {children}
        {rightIcon && React.cloneElement(rightIcon, { className: '-mr-1 ml-2 h-5 w-5' })}
      </button>
    );
  },
);

export default Button;
Button.displayName = 'Button';
