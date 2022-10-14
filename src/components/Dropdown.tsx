import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type DropdownItem = {
  icon?: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type Props = {
  items: DropdownItem[];
  align?: 'end' | 'start' | 'center' | undefined;
  trigger: React.ReactNode;
};

export default function Dropdown({ items, align = 'end', trigger }: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          sideOffset={5}
          className="w-32 rounded-md border border-gray-7 bg-gray-1 shadow-lg"
        >
          <DropdownMenu.Label />

          {items.map((item) => (
            <DropdownMenu.Item asChild key={item.label}>
              <button
                onClick={(event) => item.onClick(event)}
                disabled={item.disabled}
                className="group flex w-full px-4 py-2 ring-0 focus:bg-gray-3 focus:outline-none"
              >
                {item.icon && (
                  <span className="mr-3 h-5 w-5 text-gray-9 group-hover:text-gray-11">
                    {item.icon}
                  </span>
                )}
                <span className="text-sm text-gray-11 group-focus:text-gray-12 group-disabled:text-opacity-50">
                  {item.label}
                </span>
              </button>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
