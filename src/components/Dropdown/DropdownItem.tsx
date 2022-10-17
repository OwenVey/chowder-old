import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

interface Props<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function DropdownItem<T extends React.ElementType = 'button'>({
  as,
  children,
  icon,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = as || 'button';
  return (
    <DropdownMenuItem asChild>
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
