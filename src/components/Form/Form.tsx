import React, { InputHTMLAttributes } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface Props<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<T>;
}

export default function Form<T extends FieldValues>({
  children,
  onSubmit,
  ...restProps
}: Props<T>) {
  const { handleSubmit, register, formState } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...restProps}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                    error: formState.errors[child.props.name]?.message,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}
