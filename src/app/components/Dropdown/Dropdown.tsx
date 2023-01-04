import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  align?: 'end' | 'start' | 'center' | undefined;
  trigger: React.ReactNode;
  children: React.ReactNode;
  hidden?: boolean;
  open?: boolean;
  onOpenChange?(open: boolean): void;
};

export default function Dropdown({
  align = 'end',
  trigger,
  children,
  hidden,
  open,
  onOpenChange,
}: Props) {
  const [_open, _setOpen] = useState(false);

  const isOpen = () => {
    return open === undefined ? _open : open;
  };

  return (
    <DropdownMenu.Root
      open={isOpen()}
      onOpenChange={(isOpen) => {
        onOpenChange !== undefined && onOpenChange(isOpen);
        _setOpen(isOpen);
      }}
    >
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <AnimatePresence>
        {isOpen() ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content asChild hidden={hidden} align={align} sideOffset={5}>
              <motion.div
                className="origin-[var(--radix-dropdown-menu-content-transform-origin)] rounded-md border border-gray-7 bg-gray-1 p-1 shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { ease: 'easeIn', duration: 0.1, bounce: 0 },
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                  transition: { ease: 'easeOut', duration: 0.075, bounce: 0 },
                }}
              >
                {children}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        ) : null}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}
