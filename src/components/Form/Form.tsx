import { zodResolver } from '@hookform/resolvers/zod';
import type { InputHTMLAttributes, ReactElement } from 'react';
import React from 'react';
import type { DeepPartial, SubmitHandler} from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import type { z, ZodTypeAny } from 'zod';

interface Props<T extends ZodTypeAny>
  extends Omit<InputHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: ReactElement[];
  onSubmit: SubmitHandler<z.infer<T>>;
  schema: T;
  defaultValues?: DeepPartial<z.infer<T>>;
}

export default function Form<T extends ZodTypeAny>({
  children,
  onSubmit,
  schema,
  defaultValues,
  ...restProps
}: Props<T>) {
  const { handleSubmit, reset, register, formState, control } = useForm<z.infer<T>>({
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
      {/* {JSON.stringify(formState.errors, null, 2)} */}
    </form>
  );
}
