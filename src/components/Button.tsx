/* eslint-disable react/display-name */
import { Loader, Tooltip } from '@/components';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types/polymorphic';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

const buttonClasses = cva(
  'relative inline-flex select-none items-center justify-center rounded-lg border text-sm font-medium transition-colors',
  {
    variants: {
      disabled: {
        true: '!pointer-events-none !border-transparent !bg-gray-4 !text-gray-8',
      },
      loading: {
        true: 'pointer-events-none before:absolute before:-inset-[1px] before:z-10 before:rounded-lg before:bg-gray-1/40',
      },
      variant: {
        filled: 'shadow-sm border-transparent',
        default:
          'border-gray-7 bg-white text-gray-12 shadow-sm hover:border-gray-8 hover:bg-gray-2 active:bg-gray-3 dark:bg-gray-4 dark:hover:bg-gray-5 dark:active:bg-gray-6',
        light: 'border-transparent shadow-sm',
        subtle: 'border-transparent',
      },
      color: {
        primary: '',
        gray: '',
        red: '',
        green: '',
        blue: '',
        yellow: '',
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        color: 'primary',
        class: 'bg-primary-9 text-white hover:bg-primary-10 active:bg-primary-11',
      },
      {
        variant: 'filled',
        color: 'gray',
        class: 'bg-gray-9 text-white hover:bg-gray-10 active:bg-gray-11',
      },
      {
        variant: 'filled',
        color: 'red',
        class: 'bg-red-9 text-white hover:bg-red-10 active:bg-red-11',
      },
      {
        variant: 'filled',
        color: 'green',
        class: 'bg-green-9 text-white hover:bg-green-10 active:bg-green-11',
      },
      {
        variant: 'filled',
        color: 'blue',
        class: 'bg-blue-9 text-white hover:bg-blue-10 active:bg-blue-11',
      },
      {
        variant: 'filled',
        color: 'yellow',
        class: 'bg-yellow-9 text-black hover:bg-yellow-10 active:bg-yellow-11',
      },
      {
        variant: 'light',
        color: 'primary',
        class: 'bg-primary-4 text-primary-11 hover:bg-primary-5 active:bg-primary-6',
      },
      {
        variant: 'light',
        color: 'gray',
        class: 'bg-gray-4 text-gray-12 hover:bg-gray-5 active:bg-gray-6',
      },
      {
        variant: 'light',
        color: 'red',
        class: 'bg-red-4 text-red-11 hover:bg-red-5 active:bg-red-6',
      },
      {
        variant: 'light',
        color: 'green',
        class: 'bg-green-4 text-green-11 hover:bg-green-5 active:bg-green-6',
      },
      {
        variant: 'light',
        color: 'blue',
        class: 'bg-blue-4 text-blue-11 hover:bg-blue-5 active:bg-blue-6',
      },
      {
        variant: 'light',
        color: 'yellow',
        class: 'bg-yellow-4 text-yellow-11 hover:bg-yellow-5 active:bg-yellow-6',
      },
      {
        variant: 'subtle',
        color: 'primary',
        class: 'text-primary-9 hover:bg-primary-4 hover:text-primary-11 active:bg-primary-5',
      },
      {
        variant: 'subtle',
        color: 'gray',
        class: 'text-gray-10 hover:bg-gray-4 hover:text-gray-11 active:bg-gray-5',
      },
      {
        variant: 'subtle',
        color: 'red',
        class: 'text-red-9 hover:bg-red-4 hover:text-red-11 active:bg-red-5',
      },
      {
        variant: 'subtle',
        color: 'green',
        class: 'text-green-9 hover:bg-green-4 hover:text-green-11 active:bg-green-5',
      },
      {
        variant: 'subtle',
        color: 'blue',
        class: 'text-blue-9 hover:bg-blue-4 hover:text-blue-11 active:bg-blue-5',
      },
      {
        variant: 'subtle',
        color: 'yellow',
        class:
          'text-yellow-10 dark:text-yellow-9 hover:bg-yellow-4 hover:text-yellow-11 active:bg-yellow-5',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'primary',
    },
  },
);

interface Props extends VariantProps<typeof buttonClasses> {
  leftIcon?: React.ReactElement;
  icon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  tooltip?: string;
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>,
) => React.ReactElement | null;

export const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = 'button'>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) => {
    const {
      as,
      variant,
      color,
      loading,
      children,
      leftIcon,
      icon,
      rightIcon,
      disabled,
      tooltip,
      className,
      ...restProps
    } = props;

    const cloneAndPassClass = (component: React.ReactElement | undefined, defaultClass: string) => {
      if (!component) return;
      return React.cloneElement(component, {
        className: clsx(defaultClass, component.props.className),
      });
    };

    const As = as || 'button';

    const Component = (
      <As
        ref={ref}
        {...restProps}
        disabled={disabled || loading || false}
        className={clsx(
          icon ? 'p-1.5' : 'px-4 py-2',
          buttonClasses({ variant, color, loading, disabled, class: className }),
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
      </As>
    );

    if (tooltip) {
      return <Tooltip label={tooltip}>{Component}</Tooltip>;
    }

    return Component;
  },
);

export default Button;
(Button as React.FC).displayName = 'Button';
