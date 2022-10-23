import React, { InputHTMLAttributes, ReactElement } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface Props<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: ReactElement[];
  onSubmit: SubmitHandler<T>;
}

export default function Form<T extends FieldValues>({
  children,
  onSubmit,
  ...restProps
}: Props<T>) {
  const { handleSubmit, register, formState } = useForm<T>();

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
    <form onSubmit={handleSubmit(onSubmit)} {...restProps}>
      {recursiveMap(children, registerFormElement)}
    </form>
  );
}
