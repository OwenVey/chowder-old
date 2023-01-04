import * as PopoverPrimitive from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  side?: 'top' | 'left' | 'right' | 'bottom';
  sideOffset?: number;
};

export default function Popover({ trigger, children, side = 'top', sideOffset = 5 }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>

      <AnimatePresence>
        {open ? (
          <PopoverPrimitive.Portal forceMount>
            <PopoverPrimitive.Content asChild side={side} sideOffset={sideOffset} align="center">
              <motion.div
                className="z-50 inline-flex items-center rounded-md border border-gray-7 bg-gray-1 px-2 py-1.5 focus:outline-none"
                initial={{ opacity: 0, translateY: 10, scale: 0.9 }}
                animate={{ opacity: 1, translateY: 0, scale: 1 }}
                exit={{ opacity: 0, translateY: 10, scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                {children}
              </motion.div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </PopoverPrimitive.Root>
  );
}
