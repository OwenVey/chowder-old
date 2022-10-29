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
  fullHeight?: boolean;
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
      fullHeight,
      ...restProps
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div className={clsx('flex flex-col', className)}>
        {label && (
          <label
            htmlFor={id}
            className={clsx('block select-none space-x-1 text-sm', !description && 'mb-1')}
          >
            <span className="font-medium text-gray-11">{label}</span>
            {labelNote && <span className="italic text-gray-9">{labelNote}</span>}
            {showAsterisk && <span className="text-red-9">*</span>}
          </label>
        )}

        {description && <p className="mb-1 text-xs text-gray-9">{description}</p>}

        <div className="relative flex-1 rounded-lg shadow-sm">
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
              fullHeight && 'h-full',
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
