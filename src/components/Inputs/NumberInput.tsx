import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';

export interface NumberInputProps extends BaseInputProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      defaultValue,
      min = Number.NEGATIVE_INFINITY,
      max = Number.POSITIVE_INFINITY,
      step = 1,
      ...restProps
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [value, setValue] = useState(defaultValue || 0);

    const handleChange = (value: string) => {
      const result = +value.replace(/\D/g, '');
      if (result !== 0 && (result < min || result > max)) return;
      setValue(result);
    };

    const increment = () => {
      if (value >= max) return;
      setValue(value + step);
    };

    const decrement = () => {
      if (value <= min) return;
      setValue(value - step);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();

        if (event.key === 'ArrowUp') {
          increment();
        } else if (event.key === 'ArrowDown') {
          decrement();
        }
      }
    };

    const rightSection = (
      <div className="flex h-full flex-col">
        <button
          onClick={(e) => {
            inputRef.current?.focus();
            e?.preventDefault();
            increment();
          }}
          onMouseDown={(e) => e.preventDefault()}
          disabled={restProps.disabled || value >= max}
          className="group flex w-6 flex-1 items-center justify-center rounded-tr-[0.435rem] border-l border-b border-gray-7 hover:bg-gray-3 focus:z-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-9 active:bg-gray-4 disabled:pointer-events-none disabled:bg-gray-3"
        >
          <ChevronUpIcon className="h-4 w-4 text-gray-9 group-hover:text-gray-11" />
        </button>
        <button
          onClick={(e) => {
            inputRef.current?.focus();
            e?.preventDefault();
            decrement();
          }}
          onMouseDown={(e) => e.preventDefault()}
          disabled={restProps.disabled || value <= min}
          className="group flex w-6 flex-1 items-center justify-center rounded-br-[0.435rem] border-l border-gray-7 hover:bg-gray-3 focus:z-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-9 active:bg-gray-4 disabled:pointer-events-none disabled:bg-gray-3"
        >
          <ChevronDownIcon className="h-4 w-4 text-gray-9 group-hover:text-gray-11" />
        </button>
      </div>
    );
    return (
      <BaseInput
        ref={inputRef}
        {...restProps}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        rightSection={rightSection}
        min={min}
        max={max}
        step={step}
        onKeyDown={handleKeyDown}
      />
    );
  },
);

export default NumberInput;
