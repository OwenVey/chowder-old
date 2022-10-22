import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type Props<T extends FieldValues> = {
  children?: React.ReactNode;
  onSubmit: SubmitHandler<T>;
};

export default function Form<T extends FieldValues>({ children, onSubmit }: Props<T>) {
  const { handleSubmit, register, formState } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
