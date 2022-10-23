import { NumberInput } from '@/components';
import { FieldPath, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { NumberInputProps } from '../Inputs/NumberInput';

interface Props<T extends FieldValues> extends NumberInputProps {
  name: FieldPath<T>;
  register?: UseFormRegister<T>;
  options?: RegisterOptions<T>;
  min?: number;
  max?: number;
  step?: number;
}

export default function FormNumberInput<T extends FieldValues>({
  name,
  register,
  options,
  min,
  max,
  step,
  ...restProps
}: Props<T>) {
  return register ? (
    <NumberInput
      {...register(name, { ...options, valueAsNumber: true })}
      min={min}
      max={max}
      step={step}
      {...restProps}
    />
  ) : null;
}
