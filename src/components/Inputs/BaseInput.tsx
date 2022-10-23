import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  showAsterisk?: boolean;
  error?: string;
  icon?: React.ReactElement;
  rightSection?: React.ReactNode;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      label,
      description,
      placeholder,
      disabled,
      showAsterisk,
      error,
      icon,
      rightSection,
      ...restProps
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
            {showAsterisk && <span className="text-red-9"> *</span>}
          </label>
        )}
        {description && <p className="mb-1 text-xs text-gray-9">{description}</p>}
        <div className="relative rounded-lg shadow-sm">
          {/* Left Icon */}
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="h-5 w-5 text-gray-9">{icon}</span>
            </div>
          )}

          {/* Input */}
          <input
            {...restProps}
            ref={ref}
            type="text"
            id={id}
            className={clsx(
              'block w-full truncate rounded-lg border-gray-7 bg-white text-gray-12 placeholder-gray-9 hover:border-gray-8 dark:bg-gray-1 sm:text-sm',
              'disabled:pointer-events-none disabled:border-gray-6 disabled:bg-gray-3 dark:disabled:bg-gray-3',
              'focus:border-primary-9 focus:ring-primary-9',
              error &&
                'border-red-7 text-red-12 placeholder-red-8 hover:border-red-8 focus:border-red-9 focus:ring-red-9',
              icon && 'pl-10',
              rightSection && 'pr-10',
            )}
            placeholder={placeholder}
            disabled={disabled}
          />

          {/* Right Section */}
          {rightSection && <div className="absolute inset-y-0 right-0 m-px">{rightSection}</div>}
        </div>

        {/* Error Message */}
        {error && <p className="mt-1 text-sm text-red-9">{error}</p>}
      </div>
    );
  },
);

export default BaseInput;
