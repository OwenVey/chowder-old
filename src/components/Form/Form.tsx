import { zodResolver } from '@hookform/resolvers/zod';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { Controller, DeepPartial, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

interface Props<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: ReactElement[];
  onSubmit: SubmitHandler<T>;
  schema?: ZodType<Omit<T, 'id'>>;
  defaultValues?: DeepPartial<T>;
}

export default function Form<T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  ...restProps
}: Props<T>) {
  const { handleSubmit, reset, register, formState, control } = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  });

  const recursiveMap = (
    children: ReactElement[],
    fn: (child: ReactElement) => ReactElement,
  ): ReactElement[] => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if ((child as ReactElement).props.children) {
        const props = {
          children: recursiveMap((child as ReactElement).props.children, fn),
        };
        child = React.cloneElement(child, props);
      }

      return fn(child);
    });
  };

  const registerFormElement = (child: ReactElement): ReactElement => {
    if (child.props.name) {
      if (child.props.controlled) {
        return (
          <Controller
            control={control}
            name={child.props.name}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { isTouched, isDirty, error },
            }) =>
              React.createElement(child.type, {
                ...child.props,
                register,
                onChange,
                value,
                key: child.props.name,
                error: error?.message,
              })
            }
          />
        );
      } else {
        return React.createElement(child.type, {
          ...child.props,
          register,
          key: child.props.name,
          error: formState.errors[child.props.name]?.message,
        });
      }
    } else {
      return child;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} {...restProps}>
      {recursiveMap(children, registerFormElement)}
    </form>
  );
}
