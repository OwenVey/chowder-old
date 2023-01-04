import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
  label: string;
  side?: 'top' | 'left' | 'right' | 'bottom';
  sideOffset?: number;
};

export default function Tooltip({ children, label, side = 'top', sideOffset = 10 }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <AnimatePresence>
        {open ? (
          <TooltipPrimitive.Portal forceMount>
            <TooltipPrimitive.Content asChild side={side} sideOffset={sideOffset} align="center">
              <motion.div
                className="z-50 inline-flex items-center rounded-md border border-gray-7 bg-gray-1 px-2 py-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.1 }}
              >
                <span className="text-xs text-gray-12">{label}</span>
              </motion.div>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </TooltipPrimitive.Root>
  );
}
