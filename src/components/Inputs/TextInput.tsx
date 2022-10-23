import { forwardRef } from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';

export interface TextInputProps extends BaseInputProps {
  test?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <BaseInput ref={ref} {...props} />;
});

export default TextInput;
