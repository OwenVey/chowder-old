import { zodResolver } from '@hookform/resolvers/zod';
import React, { InputHTMLAttributes, ReactElement } from 'react';
import { DeepPartial, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
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
  const { handleSubmit, reset, register, formState } = useForm<T>({
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} {...restProps}>
      {recursiveMap(children, registerFormElement)}
      {/* <pre className="text-xs">{JSON.stringify(formState.errors, null, 2)}</pre> */}
    </form>
  );
}
