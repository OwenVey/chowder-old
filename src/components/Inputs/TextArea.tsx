import clsx from 'clsx';
import { forwardRef, TextareaHTMLAttributes, useId } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelNote?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  showAsterisk?: boolean;
  error?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      labelNote,
      description,
      placeholder,
      disabled,
      showAsterisk,
      error,
      className,
      ...restProps
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              'inline-block select-none text-sm font-medium text-gray-11',
              !description && 'mb-1',
            )}
          >
            {label}
          </label>
        )}

        {labelNote && (
          <label htmlFor={id} className="ml-1 inline-block select-none text-sm italic text-gray-9">
            {labelNote}
          </label>
        )}

        {showAsterisk && label && <span className="text-red-9"> *</span>}

        {description && <p className="mb-1 text-xs text-gray-9">{description}</p>}

        <div className="relative rounded-lg shadow-sm">
          {/* Input */}
          <textarea
            {...restProps}
            ref={ref}
            id={id}
            className={clsx(
              'block w-full truncate rounded-lg border-gray-7 bg-white text-gray-12 placeholder-gray-9 hover:border-gray-8 dark:bg-gray-1 sm:text-sm',
              'disabled:pointer-events-none disabled:border-gray-6 disabled:bg-gray-3 dark:disabled:bg-gray-3',
              'focus:border-primary-9 focus:ring-primary-9',
              error &&
                'border-red-7 text-red-12 placeholder-red-8 hover:border-red-8 focus:border-red-9 focus:ring-red-9',
            )}
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>

        {/* Error Message */}
        {error && <p className="mt-1 text-sm text-red-9">{error}</p>}
      </div>
    );
  },
);

export default TextArea;
