import { FieldPath, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import TextArea, { TextAreaProps } from '../Inputs/TextArea';

interface Props<T extends FieldValues> extends TextAreaProps {
  name: FieldPath<T>;
  register?: UseFormRegister<T>;
  options?: RegisterOptions<T>;
}

export default function FormTextArea<T extends FieldValues>({
  name,
  register,
  options,
  ...restProps
}: Props<T>) {
  return register ? <TextArea {...register(name, options)} {...restProps} /> : null;
}
