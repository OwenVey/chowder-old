import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type Props = {
  align?: 'end' | 'start' | 'center' | undefined;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function Dropdown({ align = 'end', trigger, children }: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          sideOffset={5}
          className="rounded-md border border-gray-7 bg-gray-1 shadow-lg"
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
