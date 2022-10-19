import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { ForwardedRef, forwardRef } from 'react';

// Redecalare forwardRef
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

interface Props<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onSelect?: ((event: Event) => void) | undefined;
}

function DropdownItemInner<T extends React.ElementType = 'button'>(
  {
    as,
    children,
    icon,
    onSelect,
    ...props
  }: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const Component = as || 'button';
  return (
    <DropdownMenuItem asChild ref={ref} onSelect={onSelect}>
      <Component
        {...props}
        className="group flex w-full items-center rounded p-2 pr-10 hover:bg-gray-3 focus:outline-none active:bg-gray-4"
      >
        {icon && <div className="mr-3 h-5 w-5 text-gray-10 group-hover:text-gray-12">{icon}</div>}
        {children && (
          <div className="text-sm text-gray-12/90 group-hover:text-gray-12 group-disabled:text-opacity-50">
            {children}
          </div>
        )}
      </Component>
    </DropdownMenuItem>
  );
}

export default forwardRef(DropdownItemInner);
