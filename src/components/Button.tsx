import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Loader, Tooltip } from '.';

export type ButtonVariant = 'filled' | 'default' | 'light' | 'subtle';
export type ButtonColor = 'primary' | 'gray' | 'red' | 'green' | 'blue' | 'yellow';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  leftIcon?: React.ReactElement;
  icon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  disabled?: boolean;
  tooltip?: string;
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
      'border-gray-7 bg-white text-gray-12 hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    gray: 'border-gray-7 bg-white text-gray-12 hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    red: 'border-gray-7 bg-white text-gray-12 hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    green:
      'border-gray-7 bg-white text-gray-12 hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    blue: 'border-gray-7 bg-white text-gray-12 hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
    yellow:
      'border-gray-7 bg-white text-gray-12 hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
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
  subtle: {
    primary:
      'border-transparent text-primary-9 shadow-none hover:bg-primary-4 hover:text-primary-11 active:bg-primary-5',
    gray: 'border-transparent text-gray-10 shadow-none hover:bg-gray-4 hover:text-gray-11 active:bg-gray-5',
    red: 'border-transparent text-red-9 shadow-none hover:bg-red-4 hover:text-red-11 active:bg-red-5',
    green:
      'border-transparent text-green-9 shadow-none hover:bg-green-4 hover:text-green-11 active:bg-green-5',
    blue: 'border-transparent text-blue-9 shadow-none hover:bg-blue-4 hover:text-blue-11 active:bg-blue-5',
    yellow:
      'border-transparent text-yellow-10 dark:text-yellow-9 shadow-none hover:bg-yellow-4 hover:text-yellow-11 active:bg-yellow-5',
  },
};

const classes = {
  base: 'relative inline-flex select-none items-center justify-center rounded-lg border text-sm font-medium shadow-sm transition-colors',
  disabled: '!pointer-events-none !border-transparent !bg-gray-4 !text-gray-8',
  loading:
    'pointer-events-none before:absolute before:-inset-[1px] before:z-10 before:rounded-lg before:bg-gray-1/40',
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = 'filled',
      color = 'primary',
      loading,
      children,
      leftIcon,
      icon,
      rightIcon,
      disabled,
      tooltip,
      ...restProps
    },
    ref,
  ) => {
    const cloneAndPassClass = (component: React.ReactElement | undefined, defaultClass: string) => {
      if (!component) return;
      return React.cloneElement(component, {
        className: clsx(defaultClass, component.props.className),
      });
    };

    const Component = (
      <button
        ref={ref}
        {...restProps}
        disabled={disabled || loading}
        className={clsx(
          icon ? 'p-1.5' : 'px-4 py-2',
          classes.base,
          buttonVariants[variant][color],
          disabled && classes.disabled,
          loading && classes.loading,
        )}
      >
        {/* Left Icon */}
        {!loading && cloneAndPassClass(leftIcon, '-ml-1 mr-2 h-5 w-5')}

        {/* Loading Spinner */}
        {loading && <Loader className={clsx('h-5 w-5', icon ? 'm-0.5' : '-ml-1 mr-2')} />}

        {/* Middle Icon */}
        {icon ? !loading && cloneAndPassClass(icon, 'h-6 w-6') : children}

        {/* Right Icon */}
        {!loading && cloneAndPassClass(rightIcon, '-mr-1 ml-2 h-5 w-5')}
      </button>
    );

    if (tooltip) {
      return <Tooltip label={tooltip}>{Component}</Tooltip>;
    }

    return Component;
  },
);

export default Button;
Button.displayName = 'Button';
