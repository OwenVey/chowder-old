import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { forwardRef, useId } from 'react';

type Props = {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      value,
      onChange,
      label,
      description,
      placeholder,
      disabled,
      required,
      error,
      leftIcon,
      rightIcon,
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              'block select-none text-sm font-medium text-gray-11',
              !description && 'mb-1',
            )}
          >
            {label}
            {required && <span className="text-red-9"> *</span>}
          </label>
        )}
        {description && <p className="mb-1 text-xs text-gray-9">{description}</p>}
        <div className="relative rounded-lg shadow-sm">
          {/* Left Icon */}
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="h-5 w-5 text-gray-9">{leftIcon}</span>
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type="text"
            id={id}
            value={value}
            onChange={({ target: { value } }) => onChange(value)}
            className={clsx(
              'block w-full truncate rounded-lg border-gray-7 bg-white text-gray-12 placeholder-gray-9 hover:border-gray-8 dark:bg-gray-1 sm:text-sm',
              'disabled:pointer-events-none disabled:border-gray-6 disabled:bg-gray-3 dark:disabled:bg-gray-3',
              'focus:border-primary-9 focus:ring-primary-9',
              error &&
                'border-red-7 text-red-12 placeholder-red-8 hover:border-red-8 focus:border-red-9 focus:ring-red-9',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
            )}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
          />

          {/* Right Icon */}
          {rightIcon && !error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="h-5 w-5 text-gray-9">{rightIcon}</span>
            </div>
          )}

          {/* Error Icon */}
          {error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-9" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && <p className="mt-2 text-sm text-red-9">{error}</p>}
      </div>
    );
  },
);

export default TextInput;
