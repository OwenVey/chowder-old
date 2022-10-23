import { TextInput } from '@/components';
import { FieldPath, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { TextInputProps } from '../Inputs/TextInput';

interface Props<T extends FieldValues> extends TextInputProps {
  name: FieldPath<T>;
  register?: UseFormRegister<T>;
  options?: RegisterOptions<T>;
}

export default function FormTextInput<T extends FieldValues>({
  name,
  register,
  options,
  ...restProps
}: Props<T>) {
  return register ? <TextInput {...register(name, options)} {...restProps} /> : null;
}
