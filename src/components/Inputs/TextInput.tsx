import { forwardRef } from 'react';
import type { BaseInputProps } from './BaseInput';
import BaseInput from './BaseInput';

export interface TextInputProps extends BaseInputProps {
  test?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <BaseInput ref={ref} {...props} />;
});

export default TextInput;
