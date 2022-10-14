import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  align?: 'end' | 'start' | 'center' | undefined;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function Dropdown({ align = 'end', trigger, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content asChild align={align} sideOffset={5}>
              <motion.div
                className="origin-[var(--radix-dropdown-menu-content-transform-origin)] rounded-md border border-gray-7 bg-gray-1 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { type: 'spring', duration: 0.3, bounce: 0 },
                }}
                exit={{ scale: 0, opacity: 0, transition: { duration: 0.1, bounce: 0 } }}
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
